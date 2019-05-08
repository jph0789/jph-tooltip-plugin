$(function(){
    $(".jTips").each(function(){
        var $ele = $(this);
        $(this).hover(
            function (e) {
                var $tip = $('<div class="_jTips_holder _jTips_blue" id="_jTips"></div>');
                $('body').append($tip);
                var $data = $ele.data('tip');
                $data = $data?$data:'hover me';
                $tip.html($data);
                $tip.css({ position: 'absolute',left: e.clientX+ 'px',top: e.clientY+'px' });
            },
            function () {
                var $tip = $('#_jTips');
                $tip.remove();
        });
    });
});