<footer class="content-info container" role="contentinfo">
<div class="row">
	<div class="col-md-12">
		<?php dynamic_sidebar('sidebar-footer'); ?>
	</div>
</div> 
  <div class="row">
    <div class="col-md-8">
      	<div class="credits">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>  |  <a href="http://12southmusic.com/" target="_blank">built by 12SM</a></div>
    </div>
    <div class="col-md-4">
      <div class="row">
      	<div class="col-md-8">
      		<p>For in-depth web services, check out our sister company</p>
      	</div>
      	<div class="col-md-4">
      		<img src="/assets/img/hifi-logo.png">
      	</div>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>

<!-- Begin 12SM Network Analytics <!-->   
  <script type="text/javascript">
	var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-27814560-1']);
  	_gaq.push(['_setDomainName', '12southmusic.com']);
  	_gaq.push(['_setAllowLinker', true]);
  	_gaq.push(['_trackPageview']);
 	(function() {
	  	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	  	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	  	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  	})();
	</script>
  <!-- End 12SM Network Analytics <!--> 