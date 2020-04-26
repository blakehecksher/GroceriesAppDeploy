// Example of what mealList should look like
    // var mealList = [{name: "x", groceryItem: ["1", "2"]}, {name: "y", groceryItem: ["3", "4"]}]

// Set Empty variables
var mealList = [];
var groceryList = [];

// Input Meals
$("#mealsInput").keypress(function(event){
    if(event.which === 13){

        // Set meal name to var
        var mealName = $(this).val();
        // Clear input
        $(this).val("");
        // Push value of input to meal list array
        mealList.push({name: mealName, item:[]});
        // console.log(mealList);
        mealListUl = "";
        for (i = 0 ; i < mealList.length ; i++){
            mealListUl += "<li id=" + i + ">" + mealList[i].name + "<br><input class='input mealItemInput' type='text' placeholder='Meal Item'><ul></ul></li>";
            $("ul.meals").html(mealListUl)
        }
        
    };
});

// Input Meal items
$(document).on('keypress', '.mealItemInput', (function(event){
    if(event.which === 13){

        // console.log($(this).val());
        var mealItem = $(this).val();
        var mealItemString = "<li>" + $(this).val() + "</li>";
        $(this).val("");
        mealList[$(this).parent().attr("id")].item.push(mealItem);
        groceryList.push(mealItem);
        // console.log(groceryList);
        $(this).parent("li").find("ul").append(mealItemString);
        console.log($(this).parent("li"));
        $(".groceries").append(mealItemString);

    };
}));

// Input Grocery items
$(document).on('keypress', '#groceryItemInput', (function(event){
    if(event.which === 13){
        var groceryItem = $(this).val();
        var groceryItemString = "<li>" + $(this).val() + "</li>";
        $(this).val("");
        groceryList.push(groceryItem);
        console.log(groceryList);
        $(".groceries").append(groceryItemString);
        groceryItemString = "";
        groceryItem = "";
    };
}));



// ====================================
// Code to be used later on
// ====================================

// // Check off specific todos by clicking
// $("ul").on("click", "li", function(){
//     $(this).toggleClass("completed");
// });

// // Click on X to remove li
// $("ul").on("click", "span", function(){
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

// // Add listener to text form for MEAL
// $("#mealsInput").keypress(function(event){
//     if(event.which === 13){
//         // grabbing new todo text from input
//         var todoText = $(this).val();
//         $(this).val("");
//         // create a new li with input and add to mealul
//         mealList.meal = {name: todoText, groceryItem: []};
//         console.log(mealList);
//         $("ul.meals").append("<li><h3>" + todoText + "</h3><input class='input' type='text' placeholder='Meal Item' id='mealItemInput'><ul class='mealItem'></ul></li>");
//     }
// });

// // Add listener to text form for MEALITEM
// $(document).on('keypress', '#mealItemInput', (function(event){
//     if(event.which === 13){
//         // alert("It worked!")
//         // grabbing new todo text from input
//         var todoText = $(this).val();
//         $(this).val("");
//         // create a new li and add to ul
//         $("ul.groceries").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
//         $("ul.mealItem").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
//     }
// }));