$(document).ready(function () {
    var $subtraction = $('#main-calculateMethod-subtraction');
    var $plus = $('#main-calculateMethod-plus');
    var $multiplication = $('#main-calculateMethod-plus-multiplication');
    var $division = $('#main-calculateMethod-division');
    var $history = $('#main-history');
    var $history

    var url = ''

    const url_subtraction = 'http://localhost:8080/subtraction';
    const url_multiply = 'http://localhost:8080/multiply';
    const url_division = 'http://localhost:8080/division';
    const url_plus = 'http://localhost:8080/sum';
    const url_history = 'http://localhost:8080/history';


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

    $history.click(function() {
        clickHistoryButton();
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

    function clickHistoryButton() {
        $.ajax({
            url: url_history,
            type: 'GET',
            success: function(data) {
                $('ul li').remove();
                for(var i=0;i<data.length;i++){
                    $('#main-history-table-list').append('<li><a href="#">' + data[i] + '</a></li> ')
                }
            }
        })
    }

    function clickClearHistoryButton() {
        $('#main-clear-history').click(function() {
            $('ul li').remove()
        })
    }

    // carry out
    clickSubmitButton();
    clickClearHistoryButton();
})