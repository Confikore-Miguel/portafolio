
function menuFixed(){

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 40){
            $('.menu').addClass('fixed-top') ;
            $('.menu').css("background","white");
            $('.selec').addClass("text-primary");
            $('.nombre').addClass("text-primary")
            $('.text-light').removeClass("text-light")
            $('.text-light').addClass("text-primary")
        } else {
            $('.menu').removeClass('fixed-top');
            $('.menu').css("background","transparent");
            $('.selec').removeClass("text-primary");
            $('.nombre').removeClass("text-primary")
            $('.text-light').addClass("text-light")
            $('.text-light').removeClass("text-primary")
        }
    })
}

menuFixed();


