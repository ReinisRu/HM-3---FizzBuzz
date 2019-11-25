console.log('App started')

function generate() {
    console.log('Adding listeners')
    // addListeners();
    document.getElementById('mainContainer');

    let clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
    let submitButton = document.getElementById('create');
    submitButton.addEventListener("click", onClickCreate);
}
function onClickClear() {
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    console.log('Cleared');
}
function onClickCreate() {
    onClickClear();
    console.log('Cleared');
    console.log('Generate');
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    console.log('start value - ' + startValue);
    console.log('end value - ' + endValue);
    console.log('fizz value - ' + fizzValue);
    console.log('buzz value - ' + buzzValue);
    for (startValue; startValue <= endValue; startValue++) {
        const element = document.createElement('div');
        element.id = "element";

        mainContainer.appendChild(element);
        if (startValue % fizzValue === 0 && startValue % buzzValue === 0) {
            element.setAttribute("id", "element");
            element.setAttribute("class", "FizzBuzz");
            element.innerText = startValue + " FizzBuzz";
        } else if (startValue % fizzValue === 0) {
            element.setAttribute("id", "element");
            element.setAttribute("class", "Fizz");
            element.innerText = startValue + " Fizz";
        } else if (startValue % buzzValue === 0) {
            element.setAttribute("id", "element");
            element.setAttribute("class", "Buzz");
            element.innerText = startValue + " Buzz ";
        } else {
            element.setAttribute("id", "element");
            element.setAttribute("class", "Empty");
            element.innerText = startValue;
        }
    }
}
generate();
onClickClear();

