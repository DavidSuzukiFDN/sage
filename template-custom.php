<?php
/**
 * Template Name: Custom Template
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <div id='page-content'>
    <?php get_template_part('templates/content', 'page'); ?>
  </div>
<?php endwhile; ?>
