var generateBtn = $(".generateBtn");
var addBtn = $(".addBtn");
var ingrForm = $('#ingr-form')
var ingUl = $('#ingUl')

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





window.onload = function () {
    $('ingri').val(localStorage.getItem());

}



ingrForm.on('submit', handleFormSubmit);
ingUl.on('click', '.clearBtn', function () {
    $(this).parent().remove();
})
