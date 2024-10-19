let screenValue = '';

function clearScreen() {
    screenValue = '';
    document.getElementById('result').value = screenValue;
}

function appendNumber(number) {
    screenValue += number;
    document.getElementById('result').value = screenValue;
}

function appendOperator(operator) {
    screenValue += operator;
    document.getElementById('result').value = screenValue;
}

function calculate() {
    try {
        screenValue = eval(screenValue);
        document.getElementById('result').value = screenValue;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

function deleteLast() {
    screenValue = screenValue.slice(0, -1);
    document.getElementById('result').value = screenValue;
}
