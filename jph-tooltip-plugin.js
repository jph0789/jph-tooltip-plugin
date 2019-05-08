/****************************
 *
 * A basic jquery tooltip plugin with tutorial step by step
 *
 * @author          JPH
 * @version			2.3
 * @copyright       Copyright (c) 2018 JPH.
 * @license         licensed under the MIT licenses.
 * @link            https://www.jquerypluginhub.com
 * @github          https://github.com/jph0789/jph-tooltip-plugin
 *
 ****************************/

(function($){
    function jphToolTip(options,$elem){
        this.options= options; // add options
        this.$elem = $elem; // hovered element
        this.$tooltip = null; // tooltip element
        return this;
    }
    
    jphToolTip.prototype = {
        run : function(){
            var _jphToolTip_ = this;
            if(_jphToolTip_.$tooltip) return _jphToolTip_.$tooltip; // prevent hover many times when user call jphToolTip.run() many times.
            _jphToolTip_.$tooltip=$('<div class="_jTips_holder _jTips_blue" id="_jTips"></div>');
            $(_jphToolTip_.$elem).hover(
                function (e) {
                    $('body').append(_jphToolTip_.$tooltip);
                    _jphToolTip_.setText();
                    _jphToolTip_.setTheme(_jphToolTip_.options.theme);
                    _jphToolTip_.setPosition(e.clientX,e.clientY);
                },
                function () {
                    var $tooltip = $('#_jTips');
                    $tooltip.remove();
            });
        },
        setText: function(){
            var $data = this.$elem.attr('title')||this.$elem.data('tip');
            $data = $data?$data:'Pls set the title  or data-tip atrribute!';
            this.$tooltip.html($data);
        },
        setTheme: function(theme){
            this.options.theme = theme;
            this.$tooltip.attr('class','_jTips_holder _jTips_'+theme);
        },
        setPosition: function(x,y){
            this.$tooltip.css({ position: 'absolute',left: x+ 'px',top: y+'px' });
        }
    }
    
    $.fn.jphToolTip = function(options){
        // for each selected element
        return this.each(function(){
            var $elem = $(this);
            // merge the options
            var _options_ = $.extend({}, $.fn.jphToolTip.defaultOptions, options || {});
            var _jphToolTip_ = new jphToolTip(_options_,$elem);
            _jphToolTip_.run();
        });
    }

    $.fn.jphToolTip.defaultOptions = {
        theme : 'blue',
    }
})(jQuery);