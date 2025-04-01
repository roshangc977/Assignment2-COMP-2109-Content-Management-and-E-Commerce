<?php
get_header();
?>

<div class="hero">
    <div class="container">
        <h2>Welcome to Our Online Bookstore – Your Gateway to Knowledge</h2>
        <p>At Online Bookstore, we believe in the power of books to educate, inspire, and entertain. Whether you’re looking for the latest bestsellers, timeless classics, or academic resources, we’ve got a diverse collection to suit every reader’s preference. Our platform makes it easy to explore, purchase, and enjoy books from the comfort of your home. <br>
<br>
Explore Our Vast Collection <br>
From fiction to non-fiction, self-help to sci-fi, and children’s books to academic texts, our carefully curated collection ensures there’s something for everyone. Whether you prefer digital eBooks for instant access or the feel of a physical book in your hands, we offer multiple formats to enhance your reading experience. <br>
<br>
Seamless Shopping & Instant Access <br>
Shopping for books has never been easier! Browse our collection, add your favorites to the cart, and check out with ease. For digital books, receive an instant download link upon purchase, and for physical books, we ensure safe and fast shipping straight to your doorstep. <br>

<P>Why Choose Online Bookstore? <br>
✅ Convenience – Shop anytime, anywhere from your device. <br>
✅ Variety – A vast selection of genres and titles. <br>
✅ Instant Downloads – Get your eBook instantly after purchase. <br>
✅ Secure Payments – Multiple payment options for a hassle-free checkout. <br></p>

Join our community of book lovers today and embark on your next literary adventure! 📚✨</p>
        <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="btn">Shop Now</a>
    </div>
</div>

<div class="featured-books container">
    <h2>Featured Books</h2>
    <?php
    // WooCommerce Loop to Display 4 Featured Products
    $args = array(
        'post_type' => 'product',
        'posts_per_page' => 4,
        'meta_key' => '_featured',
        'meta_value' => 'yes'
    );

    $featured_query = new WP_Query($args);

    if ($featured_query->have_posts()) :
        echo '<ul class="products">';
        while ($featured_query->have_posts()) : $featured_query->the_post();
            wc_get_template_part('content', 'product');
        endwhile;
        echo '</ul>';
        wp_reset_postdata();
    else :
        echo '<p>No featured books available.</p>';
    endif;
    ?>
</div>

<?php get_footer(); ?>