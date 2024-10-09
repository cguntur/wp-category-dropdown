<?php
if ( function_exists( 'register_block_type' ) ) {
	// Hook server side rendering into render callback
	register_block_type(
		'gcs/wp-category-dropdown', [
			'render_callback' => 'wp_cat_dropdown_callback',
			'attributes'  => array(
                'align'  => array(
					'type'  => 'string',
					'default' => '',
				),
				'orderby'  => array(
					'type'  => 'string',
					'default' => 'name',
				),
				'order'  => array(
					'type'  => 'string',
					'default' => 'asc',
				),
				'showcount'  => array(
					'type'  => 'boolean',
					'default' => true,
				),
				'hierarchical'  => array(
					'type'  => 'boolean',
					'default' => true,
				),
				'hide_empty'  => array(
					'type'  => 'boolean',
					'default' => true,
				),
				'category'  => array(
					'type'  => 'string',
					'default' => 'category',
				),
				'exclude'  => array(
					'type'  => 'array',
					'default' => [],
				),
				'include'  => array(
					'type'  => 'array',
					'default' => [],
				),
				'default_option_text'  => array(
					'type'  => 'string',
					'default' =>  __('Parent Category', GCSCD_TXT_DOMAIN),
				),
				'default_option_sub'  => array(
					'type'  => 'string',
					'default' =>   __('Child Category', GCSCD_TXT_DOMAIN),
				),
			)
		]
	);
};

function wp_cat_dropdown_callback($attributes){
	$align = $attributes['align'];
    $categories = '<div class="align'.esc_attr($align).'">';
    $categories .= wpcd_child_category_dropdown($attributes);
    $categories .= '</div>';
	return $categories;
}
?>