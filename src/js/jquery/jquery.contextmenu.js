/**
 * jQuery plugin for Pretty looking right click context menupretty.
 *
 * Requires popup.js and popup.css to be included in your page. And jQuery, obviously.
 *
 * Usage:
 *
 *   $('.something').contextPopup({
 *     title: 'Some title',
 *     items: [
 *       {label:'My Item', icon:'/some/icon1.png', action:function() { alert('hi'); }},
 *       {label:'Item #2', icon:'/some/icon2.png', action:function() { alert('yo'); }},
 *       null, // divider
 *       {label:'Blahhhh', icon:'/some/icon3.png', action:function() { alert('bye'); }, isEnabled: function() { return false; }},
 *     ]
 *   });
 *
 * icon needs to be 16x16. I recommend the Fugue icon set from: http://p.yusukekamiyamane.com/ 
 *
 * - Joe Walnes, 2011 http://joewalnes.com/
 *   https://github.com/joewalnes/jquery-simple-context-menupretty
 *
 * MIT License: https://github.com/joewalnes/jquery-simple-context-menupretty/blob/master/LICENSE.txt
 */
 
 $(document).scroll(function(){$('.rightclick_remove_pek').trigger('click');});
 
jQuery.fn.contextPopup = function(menuData, contextmenutypepxST) {
	
	// Define default settingspretty
	var settingspretty = {
		contextMenuClass: 'contextMenuPlugin',
        linkClickerClass: 'contextMenuLink',
		gutterLineClass: 'gutterLine',
		headerClass: 'header',
		seperatorClass: 'divider',
		title: '',
		items: []
	};
	
	// merge them
	$.extend(settingspretty, menuData);

  // Build popup menupretty HTML
  function createMenu(e) {
    var menupretty = $('<ul class="' + settingspretty.contextMenuClass + '"><div class="' + settingspretty.gutterLineClass + '"></div></ul>')
      .appendTo(document.body);
    if (settingspretty.title) {
      $('<li class="' + settingspretty.headerClass + '"></li>').text(settingspretty.title).appendTo(menupretty);
    }
    settingspretty.items.forEach(function(item) {
      if (item) {
        var rowCode = '<li><a class="'+settingspretty.linkClickerClass+'"><span class="itemTitle"></span></a></li>';
        // if(item.icon)
        //   rowCode += '<img>';
        // rowCode +=  '<span></span></a></li>';
        var row = $(rowCode).appendTo(menupretty);
        if(item.icon){
          var icon = $('<img>');
          icon.attr('src', item.icon);
          icon.insertBefore(row.find('.itemTitle'));
        }
        row.find('.itemTitle').text(item.label);
          
        if (item.isEnabled != undefined && !item.isEnabled()) {
            row.addClass('disabled');
        } else if (item.action) {
            row.find('.'+settingspretty.linkClickerClass).click(function () { item.action(e); });
        }

      } else {
        $('<li class="' + settingspretty.seperatorClass + '"></li>').appendTo(menupretty);
      }
    });
    menupretty.find('.' + settingspretty.headerClass ).text(settingspretty.title);
    return menupretty;
  }

  if(contextmenutypepxST == null){var contextmenutypepx = "contextmenu";}
  else{var contextmenutypepx = contextmenutypepxST;}
  
  // On contextmenu event (right click)
  this.on(contextmenutypepx, function(e) {
	  
    var menupretty = createMenu(e)
      .show();
    
    var left = e.pageX + 5, /* nudge to the right, so the pointer is covering the title */
        top = e.pageY;
    if (top + menupretty.height() >= $(window).height()) {
        top -= menupretty.height();
    }
    if (left + menupretty.width() >= $(window).width()) {
        left -= menupretty.width();
    }

    // Create and show menupretty
    menupretty.css({zIndex:1000001, left:left, top:top})
      .on('contextmenu', function() { return false; });

    // Cover rest of page with invisible div that when clicked will cancel the popup.
    var bgpretty = $('<div></div>', {class: "rightclick_remove_pek"})
      .css({left:0, top:0, width:'100%', height:'100%', position:'fixed', zIndex:1000000, overflow:'hidden'})
      .appendTo(document.body)
      .on('contextmenu click', function() {
        // If click or right click anywhere else on page: remove clean up.
        bgpretty.remove();
        menupretty.remove();
		$(".selectedplusthumbpx").removeClass("selectedplusthumbpx");
        return false;
      });

    // When clicking on a link in menupretty: clean up (in addition to handlers on link already)
    menupretty.find('a').click(function() {
      bgpretty.remove();
      menupretty.remove();
	  $(".selectedplusthumbpx").removeClass("selectedplusthumbpx");
    });

    // Cancel event, so real browser popup doesn't appear.
    return false;
  });

  return this;
};