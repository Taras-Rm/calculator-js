let inputField = document.querySelector('.textview');
let preInputField = document.querySelector('.pre_textview');

function input(sumbol) {
    inputField.value = 
    inputField.value + sumbol;
}

function clearInput() {
    inputField.value = "";
    preInputField.value = "";
}

function calculate() {
    let expression = inputField.value;
    // calculate expression string
    inputField.value = eval(expression);

    preInputField.value = expression + '=';
}

function inputBack() {
    let inputText = inputField.value;
    let inputTextArr = [];
    inputTextArr = inputText.split('');
    inputTextArr.pop();
    inputField.value = inputTextArr.join('');

}