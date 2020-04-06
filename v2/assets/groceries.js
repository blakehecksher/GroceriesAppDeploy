// var mealList = [{name: "x", groceryItem: ["1", "2"]}, {name: "y", groceryItem: ["3", "4"]}]
var mealList = [];

var groceryList = [];

$("#mealsInput").keypress(function(event){
    if(event.which === 13){
        var mealName = $(this).val();
        $(this).val("");
        mealList.push({name: mealName, item:[]});
        // console.log(mealList);
        mealListUl = "";
        for (i = 0 ; i < mealList.length ; i++){
            mealListUl += "<li>" + mealList[i].name + "<br><input class='input' type='text' placeholder='Meal Item' id='mealItemInput'><ol></ol></li>";
            $("ul.meals").html(mealListUl)
        }
    };

});

$(document).on('keypress', '#mealItemInput', (function(event){
    if(event.which === 13){
        console.log(mealList);
        var mealItem = $(this).val();
        $(this).val("");
        mealList[0].item.push(mealItem);
        mealItemUl = "";
        
        for (i = 0 ; i < mealList[0].item.length ; i++){
            mealItemUl += "<li>" + mealList[0].item[i] + "</li>";
            $("ol").html(mealItemUl)
        };
    };

}));


// ====================================
// ====================================
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