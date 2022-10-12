var mxItBtn = $(".mxItBtn");
var clearBtn = $(".clearBtn");
var addBtn = $(".addBtn");
var allIngredients = $(".allIngredients");


window.onload = function () {
    $('#ingr1').val(localStorage.getItem(1));
    $('#ingr2').val(localStorage.getItem(2));
    $('#ingr3').val(localStorage.getItem(3));
    $('#ingr4').val(localStorage.getItem(4));
}

mxItBtn.on("click", function () {

    var ingredientNumber = $(this).siblings(".allIngredients").attr("data-ingr");
    var input = $(this).siblings(".inputIngredient").val();

    /////STILL EDITING//////
    for (var i = 0; i < data.input.length; i++) {
     /////STILL EDITING//////

        var drinkResultInfo = document.createElement('div');
        var drinkName = document.createElement('h3');
        var drinkImage = document.createElement('img');


        drinkResultInfo.classList.add('drinkResultsInfo');
        drinkName.classList.add('drinkName');
        drinkImage.classList.add('drinkImage');

        drinkName.innerHTML = data.drinks[i].strDrink;
        drinkImage.src = cocktailDBSearch + data.drinks[i].strDrinkThumb;

        drinkResultInfo.append(drinkName, drinkImage);

        /////STILL EDITING//////
        var cocktailDBSearch = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + input + "&i=" +
         /////STILL EDITING//////

            localStorage.setItem(ingredientNumber, input);

        getApi(cocktailDBSearch);

    });

clearBtn.on('click', function () {
    var ingredientNumber = $(this).siblings("allIngredients").attr("data-ingr");
    $(this).siblings(".inputIngredient").val("");

    localStorage.removeItem(ingredientNumber);
});


var responseText = $('#response-text');


fetch(cocktailDBSearch)
    .then(function (response) {
        console.log(response.status);

        if (response.status !== 200) {
            responseText.textContent = response.status;
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var drinkResults = document.createElement('div');

        drinkResults.classList.add('drinkResults');
    });
