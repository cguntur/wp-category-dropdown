<?php
$path = plugins_url('js/admin_scripts_wpcd.js', __FILE__);

function category_widget_scripts(){
    wp_enqueue_script( 'admin-scripts-wpcd', plugins_url('js/admin_scripts_wpcd.js', __FILE__), array('jquery'), time() );
    wp_localize_script( 'admin-scripts-wpcd', 'wpcd_admin_ajax', array( 'ajaxurl' => admin_url( 'admin_ajax.php' ) ) );
}
add_action( 'admin_enqueue_scripts', 'category_widget_scripts');

function wpcd_get_taxonomies(){
    $args = array(
        'public'   => true,
        '_builtin' => false,
        'show_tagcloud'	=> true
      ); 
      $output = 'objects'; // or objects
      //$operator = 'and'; // 'and' or 'or'
      //$taxonomies = get_taxonomies( $args, $output, $operator );
      $taxonomies = get_taxonomies( $args, $output );
      $exclude = array( 'post_tag', 'post_format' );

      $response = array();
      $response = $taxonomies;
      //$response['taxonomies'] = $taxonomies;
      echo json_encode($response);
      wp_die();
      //return $taxonomies;
}

add_action('wp_ajax_wpcd_get_taxonomies_action', 'wpcd_get_taxonomies');
add_action('wp_ajax_nopriv_wpcd_get_taxonomies_action', 'wpcd_get_taxonomies');

function wpcd_get_taxonomy_terms(){
    if(isset($_GET['taxonomy'])){
        $taxonomy = sanitize_text_field($_GET['taxonomy']);
    }else{
        $taxonomy = "category";
    }
    $tax_terms = '';
    $tax_terms = get_terms( array(
        //'taxonomy' => $taxonomy,
        'hide_empty' => false,
        'hierarchical' => true
    ) );

    $response = '';
    $response = $tax_terms;
    echo json_encode($response);
    wp_die();
}

add_action('wp_ajax_wpcd_get_taxonomy_terms_action', 'wpcd_get_taxonomy_terms');
add_action('wp_ajax_nopriv_wpcd_get_taxonomy_terms_action', 'wpcd_get_taxonomy_terms');

//add custom css in the in the editor
function wpcd_block_editor_css(){
    wp_enqueue_style(
        'wpcd_editor_styles',
        plugins_url( '/css/wpcd_block_editor_styles.css', __FILE__ ),
        array()
     );
  }
  add_action( 'enqueue_block_editor_assets', 'wpcd_block_editor_css' );

  function wpcd_get_taxonomy_terms_for_widget(){
    if(isset($_GET['taxonomy'])){
        $taxonomy = sanitize_text_field($_GET['taxonomy']);
    }else{
        $taxonomy = "category";
    }
    $tax_terms = '';
    $tax_terms = get_terms( array(
        //'taxonomy' => $taxonomy,
        'hide_empty' => false,
        'hierarchical' => true
    ) );

    return $tax_terms;
}
?>
