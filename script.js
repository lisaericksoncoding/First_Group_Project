var generateBtn = $(".generateBtn");
var clearBtn = $(".clearBtn");
var addBtn = $(".addBtn");


window.onload = function () {
    $('#ingr1').val(localStorage.getItem(1));
    $('#ingr2').val(localStorage.getItem(2));
    $('#ingr3').val(localStorage.getItem(3));
    $('#ingr4').val(localStorage.getItem(4));
}
generateBtn.on("click", function () {

    var ingredientNumber = $(this).siblings(".allIngredients").attr("data-ingr");
    var input = $(this).siblings(".inputIngredient").val();

    localStorage.setItem(ingredientNumber, input);

    getApi(cocktailDBSearch);

});

clearBtn.on('click', function () {
    var ingredientNumber = $(this).siblings("allIngredients").attr("data-ingr");
    $(this).siblings(".inputIngredient").val("");

    localStorage.removeItem(ingredientNumber);
});

    var cocktailDBSearch = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

    var responseText = $('#response-text');

    // **NEED TO REWORK THIS to make sense for this project** function getApi(cocktailDBSearch) {
    fetch(#placeholder)
        .then(function (response) {
            console.log(response.status);

            if (response.status !== 200) {
                responseText.textContent = response.status;
            }
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
    //




});