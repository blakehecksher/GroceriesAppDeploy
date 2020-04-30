function clear(i){
    $(i).val("");
};

function grabInput(i){
    input = $(i).val();
    return input
}

// localStorage stuff
    // localStorage.setItem("key", "value") <--- Value be turned into a String.
    // localStorage.getItem("key")
    // localStorage.removeItem("key")

    // Use JSON.stringify() to turn an object or array into a string.
    // Use JSON.parse() to return a value back into a object or array.



// function checkDuplicate(x){
//     if($("ul.groceryList li:contains('" + x + "')") == true ){
//         alert("does exist!");
//         // $("ul.groceryList").append("<li>" + x + "</li>")
    
//     }   else {

//         item = $("ul.groceryList li:contains('" + x + "')").text();
//         var counter = 1
//         $("ul.groceryList li:contains('" + x + "')").text(item + " x" + counter);
//         console.log(item)

//     };
// };

function checkDuplicate(x) {
    
    Check if item is in grocery list
    if(){

    } 
    Add it to grocery list
    else {

    }
};



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

        // Add to Meal Item List
        var input = '<li> <i class="far fa-window-close delete mealItem"></i>'
        + grabInput(this)
        + ' </li>';
        $(this).parent().find("ul").append(input);

        // Add to Grocery List
        var grocInput = '<li> <i class="far fa-window-close delete groceryItem"></i>'
        + grabInput(this)
        + ' </li>';
        $("ul.groceryList").append(grocInput);
        clear(this);
        
    };
});
    
$(document).on("keypress", 'input#grocery', function(){
    if(event.which === 13){

        // Add to Grocery List
        var input = '<li> <i class="far fa-window-close delete groceryItem"></i>' + $(this).val() + ' </li>';
        clear(this);
        $("ul.groceryList").append(input);

    };
})

$(document).on("click", "i.delete", function(){
    if ($(this).hasClass("groceryItem")) {

        var del = $(this).parent().text();
        $(this).parent().remove();
        $("ul.mealItems > li:contains('" + del + "')").last().remove();

    } else if ($(this).hasClass("mealItem")) {

        var del = $(this).parent().text();
        $(this).parent().remove();
        $("ul.groceryList > li:contains('" + del + "')").last().remove()

    } else {

        $(this).parent().remove()

    }
});

// Add Number input
//     <input type="number" id="amount" name="amount" step="1" value="1" >

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

// $(document).on("click", "li", function(){
//     $(this).toggleClass("completed")
//     });