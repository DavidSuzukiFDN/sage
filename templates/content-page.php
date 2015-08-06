<?php #the_content(); ?>
<div class="row call-out">
  <div class="text-column col-md-8 col-md-offset-2">
    <h3><?php echo get_post_meta($post->ID, 'call-out', true); ?></h3>
  </div>
</div>
<div class="row">
  <div class="left-column col-md-offset-1 col-md-4">
    <?php  the_content(); ?>
  </div>
  <div class="right-column col-md-offset-1 col-md-5">
    <table>
      <tbody>
        <tr>
          <td>
            <p class="title">TELL</P>
          </td>
          <td class="targets">
            <?php echo get_post_meta($post->ID, 'tell', true); ?>
          </td>
        </tr>
        <tr>
          <td>
            <p class="title">THAT</P>
          </td>
          <td>
              <?php echo get_post_meta($post->ID, 'them', true); ?>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="form">
      <script src="//app-sj05.marketo.com/js/forms2/js/forms2.min.js"></script>
      <form id="mktoForm_<?php echo get_post_meta($post->ID,'form-id', true); ?>"></form>
      <script>
        MktoForms2.loadForm("//app-sj05.marketo.com", "188-VDU-360", <?php echo get_post_meta($post->ID,'form-id', true); ?>);
      </script>
    </div>
  </div>
</div>
