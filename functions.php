<?php
$path = plugins_url('js/admin_scripts_wpcd.js', __FILE__);

function category_widget_scripts(){
    wp_enqueue_script( 'admin-scripts-wpcd', plugins_url('js/admin_scripts_wpcd.js', __FILE__), array('jquery'), time() );
    wp_localize_script( 'admin-scripts-wpcd', 'wpcd_admin_ajax', array( 'ajaxurl' => admin_url( 'admin_ajax.php' ) ) );
}
add_action( 'admin_enqueue_scripts', 'category_widget_scripts');
?>
