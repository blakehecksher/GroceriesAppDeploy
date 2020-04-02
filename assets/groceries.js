$("p").on("click", function(){
    console.log("jQuery is installed!");
    $(this).css("color", randomColor());
});