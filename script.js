var generateBtn = $(".generateBtn");
//var clearBtn = $('.clearBtn');
var addBtn = $(".addBtn");
var inputIngredient = $(".inputIngredient")
var ingrForm = $('#ingr-form')
var ingUl = $('#ingUl')

function handleFormSubmit(event) {
    event.preventDefault();

    var ingrItem = $('input[name="ingrInput"]').val();

    if (!ingrItem) {
        console.log('no ingredient item entered.');
        return;
    }

    ingUl.append('<li id="ingredient">' + ingrItem + '<button class="clearBtn">' + "X" + '</button>' + '</li>');

    $('input[name="ingrInput"]').val('')
}

ingrForm.on('submit', handleFormSubmit);
ingUl.on('click', '.clearBtn', function(){
    $(this).parent().remove();
})


window.onload = function () {
    $('#ingr1').val(localStorage.getItem(1));
    $('#ingr2').val(localStorage.getItem(2));
    $('#ingr3').val(localStorage.getItem(3));
    $('#ingr4').val(localStorage.getItem(4));
}
// //generateBtn.on("click", function () {

//     var ingredientNumber = $(this).siblings(".allIngredients").attr("data-ingr");
//     var input = $(this).siblings(".inputIngredient").val();

//     localStorage.setItem(ingredientNumber, input);

//     getApi(cocktailDBSearch);

// });