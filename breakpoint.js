var YANAGIYA = {};
YANAGIYA.CHANGEBREAKPOINT = {
    BREAKPOINT_SP : 600,
    BREAKPOINT_TABLET : 960,

    init: function() {
        var self = this;

        self.setParameters();
        self.bindEvent();
        self.inspectedBreakPoint();
    },
    setParameters: function() {
        var self = this;

        self.$window = $(window);
        self.thisBreakPoint = "";
    },
    bindEvent: function() {
        var self = this;

        self.$window.on('resize', function() {
            self. inspectedBreakPoint();
        });
    },
    inspectedBreakPoint: function() {
        var self = this;

        var windowWidth = window.innerWidth;
        var tmpBreakPoint = '';

        if(windowWidth < self.BREAKPOINT_SP) {
            tmpBreakPoint = 'sp';
        }else if(windowWidth >= self.BREAKPOINT_SP && windowWidth < self.BREAKPOINT_TABLET) {
            tmpBreakPoint = 'tablet';
        }else{
            tmpBreakPoint = 'pc';
        }

        if(tmpBreakPoint == self.thisBreakPoint) {
            return;
        }

        self.thisBreakPoint = tmpBreakPoint;
        self.$window.trigger('changeBrakPoint', self.thisBreakPoint);
    }
};

$(function() {
    YANAGIYA.CHANGEBREAKPOINT.init();
});