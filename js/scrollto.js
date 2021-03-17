$(document).ready(function() {

    //https://jsfiddle.net/cse_tushar/Dxtyu/141/
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.Navigation-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#menu-center ul li a').removeClass("active");
                currLink.addClass("active");
                console.log(currLink);
            }
            else{
                currLink.removeClass("active");
            }
        });
    }


    $('[data-smoothscroll]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top + 20;

            $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
    onScroll();
    $(document).on("scroll", onScroll);
});
