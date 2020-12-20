$(document).ready(function () {

    for (var i = 0; i < 0; i++) {
        $(".lego").append("<div class='box'><div class='circle'></div></div>")
    }

    $(".box").on("mouseenter", function () {
        console.log($("click"))
        $(this).addClass("white")

    })


    $(".block").on("mouseenter", function () {
        console.log($("click"))
        $(this).css("opacity", "0")

    })

})