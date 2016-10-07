$.fn.touchMenu = function(options){
  var tMenu = {};
  var temp = {
    inmenu: true,
    open: false,
    clickTime: 0
  };
  var menu = $(this);
  var settings = $.extend({
      fadeAway: 1000,
      fadeAwayStart: 200,
      startClick: 50,
      openMenu: 600,
      fullscreen: false
  }, options );
  
  menu.addClass('touchMenu');

  tMenu.closeMenu = function(direct) {
      temp.inmenu = false;
      if (menu.hasClass('open')) {
          if(direct){
            menu.removeClass('closing open');
            temp.open = false;
          } else {
            setTimeout(function() {
                menu.removeClass('noclose').addClass('closing');
                settings.remover = setTimeout(function() {
                    menu.removeClass('closing open');
                    temp.open = false;
                }, (settings.fadeAway - settings.fadeAwayStart));
            }, settings.fadeAwayStart);
          }
      }
  };

  tMenu.stopCloseMenu = function(e) {
      temp.inmenu = true;
      if (menu.hasClass('closing')) {
          clearTimeout(settings.remover);
          menu.removeClass('closing').addClass('noclose');
      }
  };

  tMenu.startMenu = function(e) {
      menu.addClass('clicking');
      temp.openMenu = setTimeout(function() {
          menu.removeClass('clicking').addClass('open');
          temp.open = true;
      }, settings.openMenu);
  };
  tMenu.moveMenu = function(e) {
      if (!menu.hasClass('open')) {
          menu.css({
              left: e.pageX,
              top: e.pageY
          });
      }
  };
  tMenu.stopMenu = function(e) {
    //  show(temp.clickTime);
      // if (temp.clickTime > 99) {
          menu.removeClass('clicking');
          clearTimeout(settings.initClick);
          clearTimeout(temp.openMenu);
      // }
      clearInterval(settings.interval);
  };


  menu.on('mouseenter', function(e) {
      tMenu.stopCloseMenu();
  });

  menu.on('mouseleave', function(e) {
      tMenu.closeMenu();
  });

  $(window).on('mousedown', function(e) {
    temp.clickTime = 0;
    settings.interval = setInterval(function() {
        temp.clickTime++;
        if (temp.clickTime > settings.startClick) {
          //show(temp.clickTime + ' > ' +  settings.startClick);
          tMenu.startMenu(e);
        }
    }, 1);
  });

  $(window).on('mousemove', function(e) {
    // alert('hoi');
    tMenu.moveMenu(e);
  });

  // // While clicking, moveup;
  $(window).on('mouseup', function(e) {
    tMenu.stopMenu(e);
  });

  $(window).on('click',function(){
    if(temp.open && !temp.inmenu){
      tMenu.closeMenu(true);
    }
  });






};
