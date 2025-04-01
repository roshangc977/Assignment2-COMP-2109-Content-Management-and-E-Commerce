<?php
// Theme Setup
require get_template_directory() . '/inc/setup.php';

// Enqueue Scripts & Styles
require get_template_directory() . '/inc/enqueue.php';

// WooCommerce Customizations
require get_template_directory() . '/inc/woocommerce-custom.php';

// Add Theme Support
function online_bookstore_theme_setup() {
    add_theme_support('woocommerce');
    add_theme_support('post-thumbnails'); // Enable images for books
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'online_bookstore_theme_setup');
?>
