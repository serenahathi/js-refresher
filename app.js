$(document).ready(function() {

    let firstNumber = '';
    let secondNumber = '';
    let calcOperation = '';
    let total = '';
  
      $(".numbers button").on("click", function(e) {
        let button = e.target.innerHTML;
        if ($(".active").length == 0) {
          handleFirstNumber(button);
        } else {
          handleSecondNumber(button);
        }
      });
  
      $(".operators button").on("click", function(e) {
        let operator = e.target;
        let button = e.target.innerHTML;
        if (button !== "=") {
          $(this).addClass("active");
        } else if (button == "=") {
          handleTotal();
        }
      });
  
      function handleFirstNumber(number) {
        firstNumber = firstNumber + number;
        displayButton(firstNumber)
      };
  
      function handleSecondNumber(number) {
        secondNumber = secondNumber + number;
        displayButton(secondNumber)
      };
  
      function handleTotal() {
      calcOperation = $(".active").html();
        switch (calcOperation) {
          case '+':
            total = +firstNumber + +secondNumber;
            total = total.toFixed(2);
            displayButton(total);
            break;
          case '-':
            total = +firstNumber - +secondNumber;
            total = total.toFixed(2);
            displayButton(total);
            break;
          case '/':
            total = +firstNumber / +secondNumber;
            total = total.toFixed(2);
            displayButton(total);
            break;
          case '*':
            total = +firstNumber * +secondNumber;
            total = total.toFixed(2);
            displayButton(total);
            break;
          }
          updateVariables();
      };
  
      function displayButton(button) {
        $('.calculator-result-input').text(button);
      };
  
      function updateVariables() {
          firstNumber = total;
          secondNumber = '';
          $(".active").removeClass()
      };
  });
  