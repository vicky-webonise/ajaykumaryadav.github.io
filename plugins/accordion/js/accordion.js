/*
 * 
 * Accordion - A simple accordion group for most use cases.
 * Version 0.1
 * @requires jQuery v1.5
 * 
 * Copyright (c) 2014 Ajay Kumar Yadav
 * Published for free use under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

!function($){  
  $.fn.accordion = function(options){

    // Setting and extending initial values...
    var defaults = {
      tabClick: ".topWrap",
      tabContent: ".details",
      accordAnimation: 1000,
      bodyAnimation: 1000,
      spaceTop: 0
    };
    var settings = $.extend({}, defaults, options);
    $(settings.tabContent).hide();
    
    $(document).on('click', settings.tabClick ,function() {
      var el = $(this),
          display = el.siblings(settings.tabContent).css("display"),
          sibling = el.siblings(settings.tabContent),
          parent = el.parent("li"),
          offsetTop = el.offset().top;
      
      if( display == "block" ) {
        sibling.slideUp( parseInt(settings.accordAnimation) );
        parent.removeClass("active");
      } else {
        
        el.siblings(settings.tabContent).slideToggle(parseInt(settings.accordAnimation));
        if( display != "none" ) {
          parent.removeClass("active");
        }
        else {
          parent.addClass("active");
        }
        $('html,body').animate({scrollTop:offsetTop - settings.spaceTop},parseInt(settings.bodyAnimation));
      }
    });
  };
}(window.jQuery);