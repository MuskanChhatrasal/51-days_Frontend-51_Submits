//to show and hide the box
$(".btn").click(function(){
    $(".box").toggleClass("box-show");
});

//to have a preview of color
$("#hex").keyup(function(){
    $(".prev").css("background",$("#hex").val());
});

//to apply color
$(".apply").click(function(){
    $("body").css("background",$("#hex").val());
    //to hide the box after aapplying the color
    $(".box").toggleClass("box-show");
})