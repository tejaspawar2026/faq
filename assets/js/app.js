$(document).ready(function() {
    $('.btn').click(function() {
        var icon = $(this).find('.rotate-icon');
        icon.toggleClass('down', $(this).attr('aria-expanded') === 'true');
    });
});