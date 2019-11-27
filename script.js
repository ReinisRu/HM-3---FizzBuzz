console.log('App started')

function generate() {
    console.log('Adding listeners')
    // addListeners();
    document.getElementById('mainContainer');

    let clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    let submitButton = document.getElementById('create');
    submitButton.addEventListener("click", onClickCreate);
    let resetButton = document.getElementById('reset');
    resetButton.addEventListener("click", onClickReset);
}
function onClickClear() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    console.log('Cleared');
}
function onClickReset() {
    startValue.value = 1;
    endValue.value = 100;
    fizzValue.value = 3;
    buzzValue.value = 5;
    console.log('Reset');
}
function onClickCreate() {
    onClickClear();
    console.log('Generate');
    let startValue = parseInt(document.getElementById('startValue').value);
    let endValue = parseInt(document.getElementById('endValue').value);
    let fizzValue = parseInt(document.getElementById('fizzValue').value);
    let buzzValue = parseInt(document.getElementById('buzzValue').value);
    console.log('start value ' + startValue);
    console.log('end value ' + endValue);
    console.log('fizz value ' + fizzValue);
    console.log('buzz value ' + buzzValue);
    for (startValue; startValue <= endValue; startValue++) {
        const element = document.createElement('div');
        element.id = "element";
        mainContainer.appendChild(element);
        if (startValue % fizzValue === 0 && startValue % buzzValue === 0) {
            element.setAttribute("class", "FizzBuzz");
            element.innerText = startValue + " FizzBuzz";
        } else if (startValue % fizzValue === 0) {
            element.setAttribute("class", "Fizz");
            element.innerText = startValue + " Fizz";
        } else if (startValue % buzzValue === 0) {
            element.setAttribute("class", "Buzz");
            element.innerText = startValue + " Buzz ";
        } else {
            element.setAttribute("class", "Empty");
            element.innerText = startValue;
        }
    }
}
generate();
onClickCreate();

