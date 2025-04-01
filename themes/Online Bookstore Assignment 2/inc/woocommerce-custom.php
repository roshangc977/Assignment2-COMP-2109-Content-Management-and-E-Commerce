<?php
// Ensure WooCommerce is active
if (class_exists('WooCommerce')) {

    // Remove default WooCommerce styles
    add_filter('woocommerce_enqueue_styles', '__return_empty_array');

    // Redirect users to "My Account" after checkout
    add_filter('woocommerce_thankyou', 'custom_redirect_after_checkout');
    function custom_redirect_after_checkout($order_id) {
        $order = wc_get_order($order_id);
        wp_redirect($order->get_checkout_order_received_url());
        exit;
    }

    // Limit digital product downloads to one
    add_filter('woocommerce_order_item_downloads', function($downloads) {
        foreach ($downloads as $download) {
            $download['download_limit'] = 1;
        }
        return $downloads;
    });
}
?>
