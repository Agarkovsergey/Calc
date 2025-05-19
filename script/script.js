const result = document.getElementById('result');
const firstInput = document.getElementById('input1');
const secondInput = document.getElementById('input2');
const submit = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

plusBtn.onclick = function () {
  action = '+';
  console.log(action);
};
minusBtn.onclick = function () {
  action = '-';
  console.log(action);
};

submit.onclick = function () {
  if (action === '+') {
    const sum = Number(firstInput.value) + Number(secondInput.value);
    result.textContent = sum;
  } else if (action === '-') {
    const sum = Number(firstInput.value) - Number(secondInput.value);
    result.textContent = sum;
  }
};

console.log(typeof sum);
