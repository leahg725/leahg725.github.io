$(document).ready(function() {
    $('.Navigation-menu_toggle').on('click', function(e) {
        if($('.Navigation-link_list_wrapper').hasClass('closed')) {
            $('.Navigation-link_list_wrapper').removeClass('closed');
            $('.Navigation-link_list_wrapper').addClass('open');
            $('.Navigation-overlay').addClass('open');
            $('.Navigation-overlay').removeClass('closed');
        }
        else {
            $('.Navigation-link_list_wrapper').addClass('closed');
            $('.Navigation-link_list_wrapper').removeClass('open');
            $('.Navigation-overlay').removeClass('open');
            $('.Navigation-overlay').addClass('closed');
        }
    });
    $('.Navigation-link').on('click', function(e) {
        $('.Navigation-link_list_wrapper').addClass('closed');
        $('.Navigation-link_list_wrapper').removeClass('open');
        $('.Navigation-overlay').removeClass('open');
        $('.Navigation-overlay').addClass('closed');
    });
});
