$(document).ready(function() {

    matrix();

    setInterval(opacityMatrix, 3500);
    setInterval(endMatrix, 5000);

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
        let button = e.target.innerHTML;
        if (button == "AC") {
            clearAllValues();
        } else if (button == "C") {
            clearValues();
        } else if (button == "=") {
            handleTotal();
        } else {
            $(this).addClass("active");
        }
    });
  
    function clearAllValues() {
        firstNumber = '';
        secondNumber = '';
        total = '0';
        calcOperation = null;
        displayButton(total);
    }

    function clearValues() {
        if (firstNumber !== '' && secondNumber === '') {
            firstNumber = '';
            displayButton(firstNumber);
            updateVariables();
        } else if (firstNumber !== '' && secondNumber !== '') {
            secondNumber = '';
            displayButton(secondNumber);
        }
    }

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

function matrix() {
    $("#c").css("height", "100%");
    let c = document.getElementById("c");
    let ctx = c.getContext("2d");
    c.height = window.innerHeight;
    c.width = window.innerWidth;
    let digits = "0123456789+-*/=";
    digits = digits.split("");
    let font_size = 28;
    let columns = c.width / font_size;
    let drops = [];
    for (let x = 0; x < columns; x++) drops[x] = 1;

    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = "#31ABAA";
        ctx.font = font_size + "px Courier New, sans-serif";
        for (let i = 0; i < drops.length; i++) {
            let text = digits[Math.floor(Math.random() * digits.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(draw, 33);
};

function opacityMatrix() {
  $( "#c" ).animate({opacity: 0}, 1500);
}

function endMatrix() {
  $("#c").css("display", "none");
}
