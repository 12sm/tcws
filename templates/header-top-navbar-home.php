<header class="banner navbar navbar-default navbar-static-top" role="banner">
  <div class="banner" id="topBanner">
  </div>
  <div class="container" id="navbar-container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle btn btn-link active" data-toggle="collapse" data-target=".navbar-collapse">
        <span id="navButton"><h1>Navigation</h1></span>
      </button>
      <a class="navbar-brand" href="<?php echo home_url(); ?>/"><?php bloginfo('name'); ?></a>
    </div>

    <nav class="collapse navbar-collapse" role="navigation">
      <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav navbar-nav'));
        endif;
      ?>
    </nav>
  </div>
</header>
