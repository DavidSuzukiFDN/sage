<div class="row call-out thank-you-body">
  <div class="text-column col-md-8 col-md-offset-2">
    <h3 class="thank-you-header"><?php echo get_post_meta($post->ID, 'call-out', true); ?></h3>
  </div>
</div>
<div class="row">
  <div class="left-column col-md-offset-2 col-md-8 thank-you-text">
    <?php  the_content(); ?>
  </div>
</div>
