$(document).ready(function() {

    let firstNumber = '';
    let secondNumber = '';
    let calcOperation = '';
    let total = '';

    $('button').on('click', function(e) {
        let button = e.target.innerHTML; //assign clicked button value
        if (button >= '0' && button <= 9) {
            handleNumber(button);
            console.log('number')
        } else {
            handleOperator(button);
            console.log('operator')
        }
        console.log(e.target.innerHTML);
    });

    function handleNumber(number) {
        if (firstNumber === '') {
            firstNumber = number;
        } else {
            secondNumber = number;
        }
        displayButton(number) //puts value to display
    }
    
    function handleOperator(operator) {
        if (operator !== 'C'){
             if (calcOperation === '') {
                calcOperation = operator
            } else {
            handleTotal();
            calcOperation = operator;
            }
        } else {
            clearValues()
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

    function clearValues() { //C
        if (firstNumber !== '' && secondNumber === '') {
            firstNumber = '0';
            displayButton(firstNumber);
            updateVariables();
        } else if (firstNumber !== '' && secondNumber !== '') {
            secondNumber = '0';
            displayButton(secondNumber);
        }
    }

});