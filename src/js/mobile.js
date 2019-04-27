var mobileGlobal = mobileGlobal || {};

$(function(){

    var ns =  mobileGlobal;

    ns.TouchMenu = {

        init : function()
        {
            this.attachMenu();
        },

        attachMenu : function()
        {
            this.currentPage = 0;
            var self = this;
            this.filter_button = $(".header-menu-link");
            this.menu = $("#menu");
            this.menu_overlay = $(".overlay");
            this.filter_button.click(function() {
                if(ns.teamMenu.isVisible) {
                    ns.teamMenu.close();
                }
                self.toggleMenu();
            });
            this.menu_overlay.click(function() {
                self.close();
            });
        },
        update : function(){
          var w = $(window).width();
          this.main_menu.width(w);
          this.sub_menu.width(w);
          this.container.width(4*w + 100);
        },
        toggleMenu : function(){
            if(this.menuOpen) {
                this.filter_button.find('img').removeClass("header-menu-active");
                this.menu_overlay.addClass("hidden");
                this.menuOpen = false;
                this.menu.slideUp(300);
            } else {
                this.filter_button.find('img').addClass("header-menu-active");
                this.menu_overlay.removeClass("hidden");
                this.menu.slideDown(300);
                this.menuOpen = true;
            }
        },
        close : function() {
            if(this.menuOpen) {
                this.filter_button.find('img').removeClass("header-menu-active");
                this.menu_overlay.addClass("hidden");
                this.menuOpen = false;
                this.menu.slideUp(300);
            }
        }
    }
    // Initing
    ns.TouchMenu.init();
    
    /**/
    
    ns.TeamMenu = function() {};
    
    ns.teamMenu = new ns.TeamMenu("#teams-menu",
        {
            menuButton:   "#header > .header-right > .header-teams-link",
            menuViews:  ".teams-menu-items"
        }
    );
});