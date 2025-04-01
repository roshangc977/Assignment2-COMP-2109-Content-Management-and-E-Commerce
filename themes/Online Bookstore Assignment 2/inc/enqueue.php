<?php
function online_bookstore_enqueue_assets() {
    wp_enqueue_style('online-bookstore-style', get_stylesheet_uri());
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/assets/css/custom-style.css');
    
    wp_enqueue_script('jquery');
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), false, true);
}
add_action('wp_enqueue_scripts', 'online_bookstore_enqueue_assets');
?>
