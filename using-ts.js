var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.querySelector('button');
var add = function (number1, number2) { return number1 + number2; };
button.addEventListener('click', function () {
    console.log(add(Number(input1.value), Number(input2.value)));
});
