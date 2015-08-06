/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.

//stick in the fixed 100% height behind the navbar but don't wrap it
jQuery(document).ready(function () {
    //stick in the fixed 100% height behind the navbar but don't wrap it
    jQuery('#slide-nav.navbar-inverse').after(jQuery('<div class="inverse" id="navbar-height-col"></div>'));

    jQuery('#slide-nav.navbar-default').after(jQuery('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '40%';
    var menuneg = '-100%';
    var slideneg = '-60%';
    jQuery("#slide-nav").on("click", toggler, function (e) {
      var selected = jQuery(this).hasClass('slide-active');
      if (jQuery(window).width() < 750) {
        jQuery('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        jQuery('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        jQuery(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        jQuery(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        });
        jQuery(this).toggleClass('slide-active', !selected);
        jQuery('#slidemenu').toggleClass('slide-active');
        jQuery('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
      }else if (jQuery(window).width() > 751 && jQuery(window).width() < 1200) {
        jQuery('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        });
        jQuery('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        });
        jQuery(pagewrapper).stop().animate({
            left: selected ? '0px' : "300px"
        });
        jQuery(navigationwrapper).stop().animate({
            left: selected ? '0px' : "300px"
        });
        jQuery(this).toggleClass('slide-active', !selected);
        jQuery('#slidemenu').toggleClass('slide-active');
        jQuery('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
      }else {}
    });
    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';

    jQuery(window).on("resize", function () {
        if (jQuery(window).width() > 1200 && jQuery('.navbar-toggle').is(':hidden')) {
            jQuery(selected).removeClass('slide-active');
        }
    });
});
