$(function () {
    // init bootstrap collapse for elements with panel-collapse class
    $('.panel-collapse').collapse(
      {toggle: false}
    );

    // accordian collapse logic
    $('body').on('click', '[data-toggle=collapse-next]', function (e) {
        // Try to close all of the collapse areas first
        var parent_id = $(this).data('parent');
        $(parent_id+' .panel-collapse').collapse('hide');

        // ...then open just the one we want
        var $target = $(this).parents('.panel').find('.panel-collapse');
        $target.collapse('toggle');

        return false;
    });
});
