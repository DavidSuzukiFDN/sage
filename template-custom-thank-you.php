<?php
/**
 * Template Name: Custom Template Thank You
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <div id='page-content thank-you'>
    <?php get_template_part('templates/content', 'thank-you-page'); ?>
  </div>
<?php endwhile; ?>
