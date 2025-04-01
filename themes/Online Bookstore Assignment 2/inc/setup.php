<?php
// Register Menus
function online_bookstore_register_menus() {
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'online-bookstore'),
        'footer'  => __('Footer Menu', 'online-bookstore')
    ));
}
add_action('init', 'online_bookstore_register_menus');
?>
