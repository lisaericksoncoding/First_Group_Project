var generateBtn = $(".generateBtn");
var addBtn = $(".addBtn");
var ingrForm = $('#ingr-form')
var ingUl = $('#ingUl')
var ingrItem = $('input[name="ingrInput"]').val();

function handleFormSubmit(event) {
    event.preventDefault();

    var ingrItem = $('input[name="ingrInput"]').val();

    if (!ingrItem) {
        console.log('no ingredient item entered.');
        return;
    }

    ingUl.append('<li>' + ingrItem + '<button class="clearBtn">' + "X" + '</button>' + '</li>');

    $('input[name="ingrInput"]').val('')

    //$().ready(function () {

    $(".ingrUl li").each(function (n) {
        $(this).attr("id", "ingr" + n);
        console.log(ingrItem)


    });
    // var ingrNumber = $(this).(".ingrUl").attr("data-ingr");
    // var input = $(this).sibling(".input").val();
    // localStorage.setItem(ingrNumber, input);
    localStorage.setItem('ingrInput', ingrItem);


}





// //window.onload = function () {
//     $('ingri').val(localStorage.getItem());

// //}



ingrForm.on('submit', handleFormSubmit);
ingUl.on('click', '.clearBtn', function () {
    $(this).parent().remove();
})





// clearBtn.on('click', function () {
//     var ingredientNumber = $(this).siblings("allIngredients").attr("data-ingr");
//     $(this).siblings(".inputIngredient").val("");

//     localStorage.removeItem(ingredientNumber);
// });

var cocktailDBSearch = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingrItem;

var responseText = $('#response-text');

generateBtn.on("click", function () {

    var ingredientNumber = $(this).siblings(".allIngredients").attr("data-ingr");
    var input = $(this).siblings(".inputIngredient").val();

    localStorage.setItem(ingredientNumber, input);

    var drinkResultInfo = document.createElement('div');
    var drinkName = document.createElement('h3');
    var drinkImage = document.createElement('img');
    drinkResultInfo.classList.add('drinkResultsInfo');
    drinkName.classList.add('drinkName');
    drinkImage.classList.add('drinkImage');
    drinkName.innerHTML = data.drinks[i].strDrink;
    drinkImage.src = cocktailDBSearch + data.drinks[i].strDrinkThumb;
    drinkResultInfo.append(drinkName, drinkImage);
    
    getApi(cocktailDBSearch);

});
fetch(cocktailDBSearch)
    .then(function (response) {
        //console.log(response.status);

        //if (response.status !== 200) {
           // responseText.textContent = response.status;
       // }
        return response.json();
    })
    .then(function (data) {
        console.log(data)

        drinkResults.classList.add('drinkResults')
    });