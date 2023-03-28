var page_num, win_h, main, total_num, delta, ing, sc, win_w, sc2, s2
var slide_item_index = 0

page_num = 0
s2 = 0

win_h = $(window).height()
total_num = $("section").length - 1;

main()

function main() {
    $("html,body").stop().animate({scrollTop: page_num * win_h}, 1000, header)
}

function indi() {
    $(".indi").removeClass("active")
    $(".indi").eq(page_num).addClass("active")
}

$(window).on("mousewheel", function (event) {
    win_h = $(window).height()
    win_w = $(window).width()
    delta = event.originalEvent.wheelDelta
    ing = $("html,body").is(":animated")

    if (delta < 0 && !ing && page_num < total_num && win_w > 1024) {
        event.preventDefault()
        page_num++

        main()
    } else if (delta > 0 && page_num > 0 && !ing && win_w > 1024) {
        event.preventDefault()
        page_num--

        main()
    }
})

$(window).scroll(function () {
    sc = $(window).scrollTop()

    page_num = Math.round(sc / win_h)
    indi()
})

$(".indi").click(function () {
    page_num = $(this).index()
    main()
})

$("html,body,.main").on("mousewheel", function (event) {
    win_w = $(window).width()
    if (win_w > 1024) {
        event.preventDefault()
    }
})

function header() {
    $("header").removeClass("white")
    $("header").removeClass("black")
    if (page_num == 0) {

    } else if (page_num == 1) {
        $("header").addClass("white")
    } else if (page_num == 2) {

    } else if (page_num == 3) {
        $("header").addClass("black")
    }
}

$("header .menu-li").mouseenter(function () {
    $("header").removeClass("black")
    $("header").addClass("white")
    $("header .menu-bg").stop().slideDown()
    $("header .sub-ul").stop().slideDown()

})
$("header .menu-li").mouseleave(function () {
    $("header").removeClass("white")
    $("header .menu-bg").stop().slideUp()
    $("header .sub-ul").stop().slideUp()

    header()
})

$('.slider-1').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 10000,
})
var swiper = new Swiper(".slider-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slideToClickedSlide: 1,
});

$(".section2 .text-box").eq(0).show()
$(".section2 .text-box").not( $(".section2 .text-box").eq(0)).hide()


swiper.on("slideChange",function(){
    active_i=this.realIndex
    console.log("두번째 슬라이드 순번: "+active_i)
    console.log("두번째 클릭한: "+this.clickedIndex)
    console.log("두번째 액티브인덱스: "+this.activeIndex)
    console.log("두번째 리얼: "+this.realIndex)
    section2_left(active_i)
})
function section2_left(active_i){

    $(".section2 .text-box").eq(active_i).show()
    $(".section2 .text-box").not( $(".section2 .text-box").eq(active_i)).hide()

    $(".section2 .item-1 img").stop().fadeOut()
    $(".section2 .item-1 img").eq(active_i).stop().fadeIn()
}
//슬라이더 변경 되었을때
// $('.slider-2').on("changed.owl.carousel",function(event) {
//     var slide_item_index      = event.page.index;
//     console.log(slide_item_index)

//     $(".section2 .text-box").eq(slide_item_index).show()
//     $(".section2 .text-box").not( $(".section2 .text-box").eq(slide_item_index)).hide()

//     $(".section2 .item-1 img").eq(slide_item_index).show()
//     $(".section2 .item-1 img").not( $(".section2 .item-1 img").eq(slide_item_index)).hide()
// })

$(".section4 .item").mouseenter(function () {
    $(this).addClass("active")
    $(".section4 .item").not(this).removeClass("active")
})

$(".ham-btn").click(function () {
    $("body").toggleClass("site-on")
})
$(".site-map .menu-li").click(function () {

    $(this).find(".sub-ul").stop().slideDown()
    $(".site-map .menu-li").not(this).find(".sub-ul").stop().slideUp()
})