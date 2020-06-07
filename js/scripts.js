var btnSubmit = document.getElementById('btnSubmit');
var formInput = document.getElementById('formInput');
var table = document.getElementById('tableResult');


//find the "link"
var reLink = /(\w+\.[^\/ ]+)+/g;

// regex to find the extension
var reDot = /(\.\w+)$/g;

var links, extension, extensions, userInput;

btnSubmit.addEventListener('click', validate);

function validate() {
    // remove every pre existing table row
    if (table.rows.length > 1) { clearTable(); }

    userInput = formInput.value;
    if (! userInput.includes(".")) { 
        // error message
        displayError();
        return; 
    }

    // if string validated ; get the extension
    getExtension(userInput);  
}

function getExtension(userInput) {

    // get each file/link
    links = userInput.match(reLink);

    links.forEach(function(element) {
        extension = element.match(reDot);
        addRow(element, extension);
    });
}

function addRow(original, extension) {
    let numRows = table.rows.length;
    let newLine = table.insertRow(numRows);
    let firstCell = newLine.insertCell(0);
    let secondCell = newLine.insertCell(1);

    firstCell.innerHTML = original;
    secondCell.innerHTML = extension;
}

//TODO
function displayError() {

}

function clearTable() {
    let numRows = table.rows.length;
    console.log(numRows);
    for (let i = numRows-1; i > 0; i--) {
        table.deleteRow(i);
    }
}