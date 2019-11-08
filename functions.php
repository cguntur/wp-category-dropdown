<?php
$path = plugins_url('js/admin_scripts_wpcd.js', __FILE__);
add_action( 'admin_enqueue_scripts', function() {
    wp_enqueue_script( 'admin-scripts-wpcd', plugins_url('js/admin_scripts_wpcd.js', __FILE__), array('jquery'), time() );
    wp_localize_script( 'admin-scripts-wpcd', 'wpcd-admin-ajax', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );
} );
?>
