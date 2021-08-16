function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting funtion name 

const blueButton = document.getElementById('make-blue-button');
console.log(blueButton);
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// handle event using anonymous function   
const greenButton = document.getElementById('make-green-button');
// anonymous function 
greenButton.onclick = function() {
    document.body.style.backgroundColor = 'green';
}

// handle by using add eventlistener 
const goldenButton = document.getElementById('make-goldenrod-button');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener 
const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('make-lightBlue-button').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightBlue';
})