const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;
const button = document.querySelector('button')! as HTMLButtonElement;

const add = (number1: number, number2: number) => number1 + number2;

button.addEventListener('click', () => {
  console.log(add(Number(input1.value), Number(input2.value)));
});
