// Modified http://paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
// Only fires on body class (working off strictly WordPress body_class)
//Lets go GitHub!!!!
var ExampleSite = {
  // All pages
  common: {
    init: function() {
      $(".page-content").fitVids();
    },
    finalize: function() { }
  },
  // Home page
  home: {
    init: function() {
    
    	//Scrollto
	    $(function() {
		    $('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				    var target = $(this.hash);
				    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				    var headerHeight = $(".banner").height();
				    var scrollToPosition = $(target).offset().top - headerHeight;
				    if (target.length) {
					    $('html,body').animate({
						    scrollTop: scrollToPosition
						 }, 1000);
						 return false;
					}
				}
		    });
	   });
    
      $(window).load(function(){

        $( ".width2" ).each(function( i ) {
            var $box = $(this);
            var $width = $(this).width();
            var $curr_width =parseInt($width); // removes the "px" at the end
            var $height = $curr_width*0.27185328185328 + "px";
            $(".width2").css("height",$height);
          });      
      
      
        var $container = $('#projects');
        // initialize isotope
        $container.isotope({
          resizable: false, // disable normal resizing
          // set columnWidth to a percentage of container width
          masonry: { 
          columnWidth: $container.width() / 4,
          gutterWidth: 0 }
        });
        // filter items when filter link is clicked
     $('#filters a').click(function(){
          var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });
          return false;
    });
    
    $(".item").css("opacity", "1");
        
    $(window).smartresize(function(){
        $( ".width2" ).each(function( i ) {
            var $box = $(this);
            var $width = $(this).width();
            var $curr_width =parseInt($width); // removes the "px" at the end
            var $height = $curr_width*0.27185328185328 + "px";
            $(".width2").css("height",$height);
          });
          
          //$( ".mi-slider nav" ).css("top", "60%");    
    
       $container.isotope({
         // update columnWidth to a percentage of container width
         masonry: { columnWidth: $container.width() / 4 }
      });
      
    });       
     // END window.load   
     });
    }
    
  },
  // About page
  about: {
    init: function() {
      // JS here
    }
  },
  work: {
    init: function(){
    $(window).load(function(){

        $( ".width2" ).each(function( i ) {
            var $box = $(this);
            var $width = $(this).width();
            var $curr_width =parseInt($width); // removes the "px" at the end
            var $height = $curr_width*0.27185328185328 + "px";
            $(".width2").css("height",$height);
          });      
      
      
        var $container = $('#projects');
        // initialize isotope
        $container.isotope({
          resizable: false, // disable normal resizing
          // set columnWidth to a percentage of container width
          masonry: { 
          columnWidth: $container.width() / 4,
          gutterWidth: 0 }
        });
        // filter items when filter link is clicked
     $('#filters a').click(function(){
          var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });
          return false;
    });
    
    $(".item").css("opacity", "1");
        
    $(window).smartresize(function(){
        $( ".width2" ).each(function( i ) {
            var $box = $(this);
            var $width = $(this).width();
            var $curr_width =parseInt($width); // removes the "px" at the end
            var $height = $curr_width*0.27185328185328 + "px";
            $(".width2").css("height",$height);
          });
          
          //$( ".mi-slider nav" ).css("top", "60%");    
    
       $container.isotope({
         // update columnWidth to a percentage of container width
         masonry: { columnWidth: $container.width() / 4 }
      });
      
    });       
     // END window.load   
     });
    }
  },
};

var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = ExampleSite;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {

    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });

    UTIL.fire('common', 'finalize');
  }
};

$(document).ready(UTIL.loadEvents);
