$(document).ready(function() {

    let firstNumber = '';
    let secondNumber = '';
    let calcOperation = '';
    let total = '';

    $('button').on('click', function(e) {
        let button = e.target.innerHTML;
        if (button >= '0' && button <= 9) {
            handleNumber(button);
            console.log('number')
        } else {
            handleOperator(button);
            console.log('operator')
        }
        console.log('e', e.target.innerHTML);
    });

    function handleNumber(number) {
        if (firstNumber === '') {
            firstNumber = number;
        } else {
            secondNumber = number;
        }
        displayButton(number)
    }

    function handleOperator(operator) {
        if (calcOperation === '') {
            calcOperation = operator
        } else {
            handleTotal();
            calcOperation = operator;
        }
    }

    function handleTotal() {
        switch (calcOperation) {
            case '+':
                total = +firstNumber + +secondNumber;
                displayButton(total);
                break;
            case '-':
                total = +firstNumber - +secondNumber;
                displayButton(total);
                break;
            case '/':
                total = +firstNumber / +secondNumber;
                displayButton(total);
                break;
            case '*':
                total = +firstNumber * +secondNumber;
                displayButton(total);
                break;
        }
        updateVariables();
    }

    function displayButton(button) {
        $('.calculator-result-input').text(button);
    }

    function updateVariables() {
        firstNumber = total;
        secondNumber = '';
    }

});
