console.log('App started')


const app = document.querySelector('#mainContainer');

const newDiv = document.createElement('div');
newDiv.innerText = "Im a new div";
newDiv.id = "myDiv";
app.appendChild(newDiv);

const newPar = document.createElement('p')
newPar.innerText = "jāaizvieto ar ciparu vai Fizz, vai Buzz vai FizzBuzz"
newPar.id = "myPar";
newPar.classList.add("kastas");
newDiv.appendChild(newPar);



function addElement(parent, id, tag = 'p', content = null, classList = null) {
    const elem = document.createElement(tag);
    elem.id = id;
    if (content) elem.innerText = content;
    if (classList) elem.classList.add(...classList);
    parent.appendChild(elem);
}

addElement(app, "mycoolid", "p", "Lorems", ["stils", "numurs"]);

for (let i = 0; i < 100; i++) {
    addElement(app, "element", "div", i);
}

