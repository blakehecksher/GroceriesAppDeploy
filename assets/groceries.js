function clear(i){
    $(i).val("");
};

function grabInput(i){
    input = $(i).val();
    return input
}

$(document).on("keypress", 'input#meal', function(){
    if(event.which === 13){

        var input = '<li><i class="far fa-window-close delete meal"></i>'
        + grabInput(this)
        + ' <br> <input type="text" class="mealItemInput" placeholder="meal item"> <ul class="mealItems"></ul></li>';
        clear(this);
        $("ul.mealList").append(input);

    };
});

$(document).on('keypress', 'input.mealItemInput',function(){
    if(event.which === 13){

        // var copies = 1;

        var inputValue = grabInput(this)
        
        // Add to Meal Item List
        var input = '<li><i class="far fa-window-close delete mealItem"></i>'
        + inputValue
        + '</li>';
        $(this).parent().find("ul").append(input);

        // // Check duplicate value
        // function checkDuplicate(x) {
    
        //     // Check if item is in grocery list. If it is add a "x" + var amount to end of item.
        //     if(Boolean($("ul.groceryList li p:contains('" + x + "')").text()) == true){

        //         copies += 1;
        
        //     } else {
                
        //             }
        // };
        // checkDuplicate(grabInput(this));

        // Add to Grocery List
        var grocInput = '<li><i class="far fa-window-close delete groceryItem"></i><p>'
        + inputValue
        + '</p>'
        // + '<p class="counter">x' + copies + '</p>'
        + '</li>';

        $("ul.groceryList").append(grocInput);
        clear(this);
        
    };
});
    
$(document).on("keypress", 'input#grocery', function(){
    if(event.which === 13){

        // Add to Grocery List
        var input = '<li> <i class="far fa-window-close delete groceryItem"></i> <p>' + $(this).val() + '</p> </li>';
        clear(this);
        $("ul.groceryList").append(input);

    };
})

$(document).on("click", "i.delete", function(){
    if ($(this).hasClass("groceryItem")) {

        var del = $(this).parent().text();
        console.log(del)
        $("ul.mealItems > li:contains('" + del + "')").last().remove();
        $(this).parent().remove();

    } else if ($(this).hasClass("mealItem")) {

        var del = $(this).parent().text();
        console.log(del)
        $("ul.groceryList > li:contains('" + del + "')").last().remove()
        $(this).parent().remove();

    } else {

        $(this).parent().remove();

    }
});

$(document).on("click", "button.save", function(){

    localStorage.setItem("mealList1", JSON.stringify($("ul.mealList").html()));
    localStorage.setItem("groceryList1", JSON.stringify($("ul.groceryList").html()));

});

$(document).on("click", "button.list", function(){

    mealItem = JSON.parse(localStorage.getItem("mealList1"));
    $("ul.mealList").append(mealItem);

    groceryItem = JSON.parse(localStorage.getItem("groceryList1"));
    $("ul.groceryList").append(groceryItem);

});

// ===============================================================================
// ===============================================================================
// ===============================================================================

// localStorage stuff
    // localStorage.setItem("key", "value") <--- Value be turned into a String.
    // localStorage.getItem("key")
    // localStorage.removeItem("key")

    // Use JSON.stringify() to turn an object or array into a string.
    // Use JSON.parse() to return a value back into a object or array.

// Add Number input
//     <input type="number" id="amount" name="amount" step="1" value="1" >

// // Drop down menu
//     function myFunction() {
//         document.getElementById("myDropdown").classList.toggle("show");
//     }

// // Line through item
//     $(document).on("click", "li", function(){
//         $(this).toggleClass("completed")
//         });