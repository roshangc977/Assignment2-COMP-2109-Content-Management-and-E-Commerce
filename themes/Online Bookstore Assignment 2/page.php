<?php
/**
 * Default Page Template
 */

get_header(); ?>

<div class="container">
    <h2><?php the_title(); ?></h2>
    <div class="content">
        <?php the_content(); ?>
    </div>
</div>

<?php get_footer(); ?>
