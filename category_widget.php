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
		'description' => __('A widget to display parent and child categories in a dropdown.', 'wpcd'),
	);
	parent::__construct( 'wpcd_category_dropdown_widget', 'Category Dropdown Widget', $widget_ops );
	}

	// output the widget content on the front-end
	public function widget( $args, $instance ) {
		echo $args['before_widget'];
		if ( ! empty( $instance['title'] ) ) {
			echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
		}

		$atts = array(
			'orderby' => $instance['wpcd_cat_orderby'],
			'order' => $instance['wpcd_cat_order'],
			'showcount' => $instance['wpcd_showcount'],
			'hierarchical' => 1,
			'hide_empty' => $instance['wpcd_hide_empty'],
			'exclude' => '',
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
			'title' => __( 'Categories', 'wpcd' ),
			'parent_default_option' => __('Select a Parent Category', 'wpcd'),
			'child_default_option' => __('Select a Child Category', 'wpcd'),
			'wpcd_cat_orderby'		=> 'name',
			'wpcd_cat_order'			=> 'ASC',
			'wpcd_showcount'			=>	0,
			'wpcd_hide_empty'			=> 0,
			'wpcd_select_category'=>	''

		);
		$instance = wp_parse_args( (array) $instance, $defaults ); ?>

		<!-- Widget Title: Text Input -->
		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:', 'cdash' ); ?></label>
			<input id="<?php echo $this->get_field_id( 'title' ); ?>" class="widefat" type="text" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo $instance['title']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'parent_default_option' ); ?>"><?php _e( 'Default option text for the parent category', 'wpcd' ); ?></label><br />
			<input id="<?php echo $this->get_field_id( 'parent_default_option' ); ?>" class="widefat" type="text" name="<?php echo $this->get_field_name( 'parent_default_option' ); ?>" value="<?php echo $instance['parent_default_option']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'child_default_option' ); ?>"><?php _e( 'Default option text for the child category', 'wpcd' ); ?></label><br />
			<input id="<?php echo $this->get_field_id( 'child_default_option' ); ?>" class="widefat" type="text" name="<?php echo $this->get_field_name( 'child_default_option' ); ?>" value="<?php echo $instance['child_default_option']; ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_cat_orderby' ); ?>"><?php _e( 'Order By', 'wpcd' ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_cat_orderby'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_cat_orderby'); ?>" type="text">
				<option <?php selected( $instance['wpcd_cat_orderby'], 'name'); ?> value="name">Name</option>
				<option <?php selected( $instance['wpcd_cat_orderby'], 'date'); ?> value="date">Date</option>
				<option <?php selected( $instance['wpcd_cat_orderby'], 'menu_order'); ?> value="menu_order">Menu Order</option>
				<option <?php selected( $instance['wpcd_cat_orderby'], 'rand'); ?> value="rand">Random</option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_cat_order' ); ?>"><?php _e( 'Order', 'wpcd' ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_cat_order'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_cat_order'); ?>" type="text">
				<option <?php selected( $instance['wpcd_cat_order'], 'ASC'); ?> value="ASC"><?php _e('ASC', 'wpcd');?></option>
				<option <?php selected( $instance['wpcd_cat_order'], 'DESC'); ?> value="DESC"><?php _e('DESC', 'wpcd');?></option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_showcount' ); ?>"><?php _e( 'Show the number of posts in the category', 'wpcd' ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_showcount'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_showcount'); ?>">
				<option <?php selected( $instance['wpcd_showcount'], '1'); ?> value="1"><?php _e('Yes', 'wpcd');?></option>
				<option <?php selected( $instance['wpcd_showcount'], '0'); ?> value="0"><?php _e('No', 'wpcd');?></option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_hide_empty' ); ?>"><?php _e( 'Hide the categories without any posts', 'wpcd' ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_hide_empty'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_hide_empty'); ?>">
				<option <?php selected( $instance['wpcd_hide_empty'], '1'); ?> value="1"><?php _e('Yes', 'wpcd');?></option>
				<option <?php selected( $instance['wpcd_hide_empty'], '0'); ?> value="0"><?php _e('No', 'wpcd');?></option>
			</select>
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'wpcd_select_category' ); ?>"><?php _e( 'Select a Category', 'wpcd' ); ?></label><br />
			<select id="<?php echo $this->get_field_id('wpcd_select_category'); ?>" class="widefat" name="<?php echo $this->get_field_name('wpcd_select_category'); ?>" type="text">
				<option <?php selected($instance['wpcd_select_category'], 'category'); ?> value="category"><?php _e('Categories', 'wpcd'); ?></option>
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

		return $instance;
	}
}
?>
