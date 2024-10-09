<?php
// register My_Widget
add_action( 'widgets_init', function(){
	register_widget( 'Category_Dropdown_Widget' );
});

class Category_Dropdown_Widget extends WP_Widget {
	// class constructor
	public function __construct() {
		$widget_ops = array(
		'classname' => 'wcpd_category_dropdown_widget',
		'description' => __('A widget to display parent and child categories in a dropdown.', GCSCD_TXT_DOMAIN),
	);
	parent::__construct( 'wpcd_category_dropdown_widget', 'Category Dropdown Widget', $widget_ops );
	}

	// output the widget content on the front-end
	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}
		if(!isset($instance['wpcd_exclude_category']) || empty($instance['wpcd_exclude_category'])) {
			$instance['wpcd_exclude_category'] = "";
		}
		if(isset($instance['wpcd_exclude_category'])){
			$exclude_cats_array = $instance['wpcd_exclude_category'];
			if(is_array($exclude_cats_array)){
				$exclude_cats_string = implode(', ', $exclude_cats_array);
				$exclude_cats =  $exclude_cats_string;
			}else{
				$exclude_cats = $exclude_cats_array;
			}
		}else{
			$exclude_cats_array = '';
			$exclude_cats = '';
		}



		$atts = array(
			'orderby' => $instance['wpcd_cat_orderby'],
			'order' => $instance['wpcd_cat_order'],
			'showcount' => $instance['wpcd_showcount'],
			'hierarchical' => 1,
			'hide_empty' => $instance['wpcd_hide_empty'],
            'exclude'   => $instance['wpcd_exclude_category'],
			'default_option_text'	=> $instance['parent_default_option'],
			'default_option_sub'	=> $instance['child_default_option'],
			'category'	=>	$instance['wpcd_select_category']
		);

		$categories = wpcd_child_category_dropdown( $atts );
		echo $categories;

		echo $args['after_widget'];
	}

	// output the option form field in admin Widgets screen
	public function form( $instance ) {
		/* Set up some default widget settings. */
		$defaults = array(
			'title' => __( 'Categories', GCSCD_TXT_DOMAIN ),
			'parent_default_option' => __('Select a Parent Category', GCSCD_TXT_DOMAIN),
			'child_default_option' => __('Select a Child Category', GCSCD_TXT_DOMAIN),
			'wpcd_cat_orderby'		=> 'name',
			'wpcd_cat_order'			=> 'ASC',
			'wpcd_showcount'			=>	0,
			'wpcd_hide_empty'			=> 0,
			'wpcd_select_category'=>	'',
			'wpcd_exclude_category'	=> ''

		);
		$instance = wp_parse_args( (array) $instance, $defaults ); ?>

		<!-- Widget Title: Text Input -->
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'cdash' ); ?></label>
			<input id="<?php echo $this->get_field_id( 'title' ); ?>" class="widefat" type="text" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo $instance['title']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'parent_default_option' ); ?>"><?php _e( 'Default option text for the parent category', GCSCD_TXT_DOMAIN ); ?></label><br />
			<input id="<?php echo $this->get_field_id( 'parent_default_option' ); ?>" class="widefat" type="text" name="<?php echo $this->get_field_name( 'parent_default_option' ); ?>" value="<?php echo $instance['parent_default_option']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'child_default_option' ); ?>"><?php _e( 'Default option text for the child category', GCSCD_TXT_DOMAIN ); ?></label><br />
			<input id="<?php echo $this->get_field_id( 'child_default_option' ); ?>" class="widefat" type="text" name="<?php echo $this->get_field_name( 'child_default_option' ); ?>" value="<?php echo $instance['child_default_option']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_cat_orderby' ); ?>"><?php _e( 'Order By', GCSCD_TXT_DOMAIN ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_cat_orderby'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_cat_orderby'); ?>" type="text">
				<option <?php selected( $instance['wpcd_cat_orderby'], 'name'); ?> value="name">Name</option>
				<option <?php selected( $instance['wpcd_cat_orderby'], 'date'); ?> value="date">Date</option>
				<option <?php selected( $instance['wpcd_cat_orderby'], 'menu_order'); ?> value="menu_order">Menu Order</option>
				<option <?php selected( $instance['wpcd_cat_orderby'], 'rand'); ?> value="rand">Random</option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_cat_order' ); ?>"><?php _e( 'Order', GCSCD_TXT_DOMAIN ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_cat_order'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_cat_order'); ?>" type="text">
				<option <?php selected( $instance['wpcd_cat_order'], 'ASC'); ?> value="ASC"><?php _e('ASC', GCSCD_TXT_DOMAIN);?></option>
				<option <?php selected( $instance['wpcd_cat_order'], 'DESC'); ?> value="DESC"><?php _e('DESC', GCSCD_TXT_DOMAIN);?></option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_showcount' ); ?>"><?php _e( 'Show the number of posts in the category', GCSCD_TXT_DOMAIN ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_showcount'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_showcount'); ?>">
				<option <?php selected( $instance['wpcd_showcount'], '1'); ?> value="1"><?php _e('Yes', GCSCD_TXT_DOMAIN);?></option>
				<option <?php selected( $instance['wpcd_showcount'], '0'); ?> value="0"><?php _e('No', GCSCD_TXT_DOMAIN);?></option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_hide_empty' ); ?>"><?php _e( 'Hide the categories without any posts', GCSCD_TXT_DOMAIN ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_hide_empty'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_hide_empty'); ?>">
				<option <?php selected( $instance['wpcd_hide_empty'], '1'); ?> value="1"><?php _e('Yes', GCSCD_TXT_DOMAIN);?></option>
				<option <?php selected( $instance['wpcd_hide_empty'], '0'); ?> value="0"><?php _e('No', GCSCD_TXT_DOMAIN);?></option>
			</select>
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_select_category' ); ?>"><?php _e( 'Select a Category', GCSCD_TXT_DOMAIN ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_select_category'); ?>" class="widefat wpcd_select_category" name="<?php echo $this->get_field_name('wpcd_select_category'); ?>" type="text">
				<option <?php selected($instance['wpcd_select_category'], 'category'); ?> value="category"><?php _e('Categories', GCSCD_TXT_DOMAIN); ?></option>
				<?php
					$args=array('public'   => true, '_builtin'	=> false, 'show_tagcloud'	=> true);
					$output = 'objects';
					$operator = 'and';
					$taxonomies = get_taxonomies($args,$output,$operator);

					if ( ! empty( $taxonomies ) ) :
						foreach ( $taxonomies as $taxonomy ) {
							$value = $taxonomy->name;
						?>
							<option <?php selected( $instance['wpcd_select_category'], $value); ?> value="<?php echo $value; ?>"><?php echo $taxonomy->labels->name; ?></option>
						<?php
						}
					endif;
			 	?>
				</select>
		</p>
		<p>
			<?php
			if(isset($instance['wpcd_exclude_category']) && $instance['wpcd_exclude_category'] != '' ){
				$exclude_cats_array = $instance['wpcd_exclude_category'];
				if(is_array($exclude_cats_array)){
					$exclude_cats_string = implode(', ', $exclude_cats_array);
					$exclude_cats = $exclude_cats_string;
				}else{
					$exclude_cats = $exclude_cats_array;
				}
			}else{
				$exclude_cats_array = '';
				$exclude_cats = '';
            }
            
            if(isset($instance['wpcd_select_category']) && $instance['wpcd_select_category'] != ''){
                $category = $instance['wpcd_select_category'];
            }else{
                $category = 'category';
            }
			
			?>
			<label for="<?php echo $this->get_field_id( 'wpcd_exclude_category' ); ?>"><?php _e( 'Exclude Categories', GCSCD_TXT_DOMAIN ); ?></label><br />
			<?php
			$field_id = $this->get_field_id("wpcd_exclude_category");
			$field_name = $this->get_field_name('wpcd_exclude_category');
			?>
            <?php
                $tax_terms = wpcd_get_taxonomy_terms_for_widget();
            ?>
			<p class="selected_cat_sub">
				<?php
				$exclude_select = wpcd_display_tax_terms($category, $field_id, $field_name, $exclude_cats_array);
				echo $exclude_select;
				?>
			</p>
			<p class="generate_cat_sub"></p>

		</p>
<?php
}

	// save options
	public function update( $new_instance, $old_instance ) {
		$instance = $old_instance;

		/* Strip tags for title and name to remove HTML (important for text inputs). */
		$instance['title'] = strip_tags( $new_instance['title'] );
		$instance['parent_default_option'] = strip_tags( $new_instance['parent_default_option'] );
		$instance['child_default_option'] = strip_tags( $new_instance['child_default_option'] );
		$instance['wpcd_cat_orderby'] = $new_instance['wpcd_cat_orderby'];
		$instance['wpcd_cat_order'] = $new_instance['wpcd_cat_order'];
		$instance['wpcd_showcount'] = $new_instance['wpcd_showcount'];
		$instance['wpcd_hide_empty'] = $new_instance['wpcd_hide_empty'];
		$instance['wpcd_select_category'] = $new_instance['wpcd_select_category'];
		$instance['wpcd_exclude_category'] = $new_instance['wpcd_exclude_category'];

		return $instance;
	}
}

function wpcd_widget_exclude_categories(){
	global $wpdb;
	if(isset($instance['wpcd_exclude_category'])){
		$exclude_cats_array = $instance['wpcd_exclude_category'];
		if(is_array($exclude_cats_array)){
			$exclude_cats_string = implode(', ', $exclude_cats_array);
			$exclude_cats = $exclude_cats_string;
		}else{
			$exclude_cats = $exclude_cats_array;
		}
	}else{
		$exclude_cats_array = '';
		$exclude_cats = '';
	}
	if(isset($_POST['wpcd_exclude_cat_field_id'])){
		$wpcd_exclude_cat_field_id = sanitize_text_field($_POST['wpcd_exclude_cat_field_id']);
	}else{
		$wpcd_exclude_cat_field_id = '';
	}
	if(isset($_POST['wpcd_exclude_cat_field_name'])){
		$wpcd_exclude_cat_field_name = sanitize_text_field($_POST['wpcd_exclude_cat_field_name']);
	}else{
		$wpcd_exclude_cat_field_name = '';
    }
    
	$response = '';
	if (isset($_POST['selected_cat'])) {
		$selected_cat = sanitize_text_field($_POST['selected_cat']);
		//If there is a custom category base set, get that from the options
		if($selected_cat == 'category'){
			$category_base = get_option('category_base');
			if(isset($category_base) && $category_base != ''){
				$selected_cat = $category_base;
			}
		}
		if ( $selected_cat == "product_cat" ) {
			$wc_permalinks = get_option( 'woocommerce_permalinks' );
			$category_base = $wc_permalinks['category_base'];
			$selected_cat = $category_base;
		}
		$response .= wpcd_display_tax_terms($selected_cat, $wpcd_exclude_cat_field_id,$wpcd_exclude_cat_field_name, $exclude_cats_array);
	}else{
		$selected_cat = '';
		$response = "No Category Selected";
	}
	die($response);
}
add_action("wp_ajax_wpcd_widget_exclude_categories", "wpcd_widget_exclude_categories");
add_action("wp_ajax_nopriv_wpcd_widget_exclude_categories", "wpcd_widget_exclude_categories");


function wpcd_display_tax_terms($taxonomy, $field_id, $field_name, $exclude_cats_array){
	$tax_terms ='';
	$tax_terms .= '<select multiple="multiple" id="'.$field_id.'" class="widefat cat_sub" name="'.$field_name.'[]" type="text">';
	
	$terms = get_terms( array(
        'taxonomy' => $taxonomy,
        'hide_empty' => false,
        'hierarchical' => true
	) );
	if ( !empty( $terms ) ){
		foreach ( $terms as $term ) {
			$id = $term->term_id;
			if ( is_array($exclude_cats_array) && in_array($term->term_id, $exclude_cats_array) ) {
    			$selected = "selected='selected'";
			}else{
				$selected = 'test';
			}
			$value = $term->name;
			$tax_terms .= '<option value="' . $id . '"' . $selected .'>' . $term->name . '</option>';
		}
	}else{
		$tax_terms .= '<option value="">' . __('No categories found', GCSCD_TXT_DOMAIN) . '</option>';
	}
	$tax_terms .= '</select>';
	return $tax_terms;
}
?>
