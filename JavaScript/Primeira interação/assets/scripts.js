var number = document.getElementById("currentNumber");
var numberAtual = 0;


function increment() {
    numberAtual = numberAtual + 1;
    number.innerHTML = numberAtual;
}

function decrement() {
    numberAtual = numberAtual -1;
    number.innerHTML = numberAtual;
}