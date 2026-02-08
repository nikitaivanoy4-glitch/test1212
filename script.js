function calculate() {
  const v1 = parseFloat(document.getElementById('value1').value);
  const v2 = parseFloat(document.getElementById('value2').value);
  if (!isNaN(v1) && !isNaN(v2)) {
    document.getElementById('result').innerText = "Результат: " + (v1 + v2);
  } else {
    document.getElementById('result').innerText = "Введите корректные числа.";
  }
}
