$(document).ready(function () {
    var $subtraction = $('#main-calculateMethod-subtraction');
    var $plus = $('#main-calculateMethod-plus');
    var $multiplication = $('#main-calculateMethod-plus-multiplication');
    var $division = $('#main-calculateMethod-division');

    var url = ''

    const url_subtraction = 'http://localhost:8080/subtraction';
    const url_multiply = 'http://localhost:8080/multiply';
    const url_division = 'http://localhost:8080/division';
    const url_plus = 'http://localhost:8080/sum';


    $plus.click(function() {
        url = url_plus;
    });

    $subtraction.click(function() {
        url = url_subtraction;
    });

    $multiplication.click(function() {
        url = url_multiply;
    });

    $division.click(function() {
        url = url_division;
    });

    function clickSubmitButton() {
        $('#submit-submitButton').click(function () {
            var num1 = $('#main-numberInput-num1').val()
            var num2 = $('#main-numberInput-num2').val()
      
            var body = {
                "num1":num1,
                "num2":num2
            }
            
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'Json',
                data: body,
                success: function(data) {
                    showResult(data.result)
                }
            });
        });
    }

    function showResult(result) {
        $('#main-screen').text(result);
    }

    clickSubmitButton();
})