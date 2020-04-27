function clear(i){
    $(i).val("");
};

function grabInput(i){
    input = $(i).val();
    return input
}

// function checkDuplicate(x){
//     if($("ul.groceryList").text().length > 0){
//         alert("if statement triggered!");
//         console.log(x);
//     } else {
        
//     };
// };

// Add Number input
// <input type="number" id="points" name="points" step="1" value=1>

$(document).on("keypress",'input#meal', function(){
    if(event.which === 13){

        var input = '<li><i class="far fa-window-close delete meal"></i>'
        + grabInput(this)
        + ' <br> <input type="text" class="mealItemInput" placeholder="meal item"> <ul class="mealItems"></ul></li>';
        clear(this);
        $("ul.mealList").append(input);

    };
});

$(document).on('keypress','input.mealItemInput',function(){
    if(event.which === 13){

        var input = '<li> <i class="far fa-window-close delete"></i>'
        + grabInput(this)
        + ' </li>';
        $(this).parent().find("ul").append(input);
        $("ul.groceryList").append(input);
        clear(this);
        
    };
});
    
$(document).on("keypress",'input#grocery', function(){
    if(event.which === 13){

        var input = '<li> <i class="far fa-window-close delete"></i>' + $(this).val() + ' </li>';
        clear(this);
        $("ul.groceryList").append(input);

    };
})

$(document).on("click", "i.delete", function(){

    var del = $(this).parent().text();
    // console.log($("ul.mealItems > li:contains('" + del + "'), ul.groceryList > li:contains('" + del + "')"))
    $("ul.groceryList > li:contains('" + del + "')").last().remove();
    $("ul.mealItems > li:contains('" + del + "')").last().remove();

});

$(document).on("click", "i.meal, i.delete", function(){

    $(this).parent().remove();

});

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

// $(document).on("click", "li", function(){
//     $(this).toggleClass("completed")
//     });