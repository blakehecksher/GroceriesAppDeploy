console.log("groceries js is connected!");

function randomColor(){
    // Pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // Pick a "green" from 0-255
    var g =Math.floor(Math.random() * 256);
    // Pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", "+ g +", "+ b + ")"
}

$("p").on("click", function(){
    console.log("jQuery is installed!");
    $(this).css("color", randomColor());
});