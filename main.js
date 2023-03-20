
// OPEN MENU IN MOBILE
 $(".open_main_menu").click(function(){

    if($(".main_options").hasClass("main_options open"))
        $(".main_options").removeClass("open");
    else
        $(".main_options").addClass("open");

})


let block = false;

$(window).on('scroll', function () {

   // STICKY MENU 
    if ($(window).scrollTop() > 50) 
        $('.top_bar').addClass('menu_sticky');
    else 
    $('.top_bar').removeClass('menu_sticky');

    const scrollValue = $(window).scrollTop() + 600;
    const positionStats = $("#projects_completed").offset().top;

    let i = 0;
    let j = 0;
    let k = 0;
    let z = 0;

    if(scrollValue > positionStats)
    {
        if(block)
            return; 

        block = true;

        setInterval(() => {
            if(i++ >= 1258)
                return;

            $("#projects_completed").text(i)
        }, 1000/240);

        setInterval(() => {
            if(j++ >= 1255)
                return;

            $("#customer_active").text(j)
        }, 1000/200)


        setInterval(() => {
            if(k++ >= 155)
                return;

            $("#awards").text(k)
        }, 1000/40)

        setInterval(() => {
            if(z++ >= 1157)
                return;

            $("#reviews").text(z)
        }, 1000/150)
    }

})


// SLIDER IN STRENGTHS
$('.clientReviews').slick({
    prevArrow: '<button id="preview"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
    },
    {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
    }
    ]
              
});
