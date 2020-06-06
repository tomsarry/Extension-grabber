let btnSubmit = document.getElementById('btnSubmit');
let formInput = document.getElementById('formInput');

//find the "link"
var reLink = /(\w+\.\w+)+/g;

// regex to find the extension
var reDot = /(\.\w+)+/g;

var links, extensions, userInput;

btnSubmit.addEventListener('click', validate);
// btnSubmit.onclick = getExtension;

function validate() {
    userInput = formInput.value;
    if (! userInput.includes(".")) { 
        // error message
        return; 
    }

    // valide email adresses !!

    // if string validated ; get the extension
    getExtension(userInput);
    
}

function getExtension(userInput) {

    // get each file/link
    links = userInput.match(reLink);

    // display to the user what he typed
    links.forEach(function(name) {
        original.innerHTML += name + '\n';
    })

    
 

    extensions = userInput.match(reDot);

    extensions.forEach(function(item) {
        result.innerHTML += item + '\n'; 
    });
}