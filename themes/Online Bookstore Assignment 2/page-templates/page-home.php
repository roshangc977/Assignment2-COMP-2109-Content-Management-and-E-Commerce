<?php
get_header(); ?>

<main class="homepage">
    <section class="hero">
        <h2>Welcome to Online Bookstore</h2>
        <p>Browse our collection of books and get your favorites today.</p>
        <a href="<?php echo get_permalink(wc_get_page_id('shop')); ?>" class="btn">Shop Now</a>
    </section>

    <section class="featured-books">
        <h2>Featured Books</h2>
        <?php echo do_shortcode('[products limit="4" columns="4" visibility="featured"]'); ?>
    </section>
</main>

<?php get_footer(); ?>
