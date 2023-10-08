// Chapter 46, 48 (Events)

// question 01



  document.getElementById("clickMe").addEventListener("click", function() {
    console.log("Element clicked!");
  });



// question 02

var clickTrigger = document.getElementById('click-trigger');
var elementToHide = document.getElementById('element-to-hide');


clickTrigger.addEventListener('click', function () {
    
    elementToHide.style.display = 'none';
});
// question 03
// question 04

var scrollToTopLink = document.getElementById('scrollToTop');

        
scrollToTopLink.addEventListener('click', function (e) {
   
    e.preventDefault();

    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// question 05

var playSoundLink = document.getElementById('playSoundLink');

       
var audioElement = new Audio('no audio'); 
playSoundLink.addEventListener('click', function (e) {
   
    e.preventDefault();

   
    audioElement.play();
});

// question 06

<a href="https://www.example.com" target="_blank">Open New Window</a>
// question 07

 
var alertButton = document.getElementById('alertButton');

        
alertButton.addEventListener('click', function () {
    
    alert('Button clicked! This is the alert message.');
});
// question 08

<button>Hover Over Me</button>

// question 09


var playSoundButton = document.getElementById('playSoundButton');

       
var audioElement = new Audio('sound.mp3'); 


playSoundButton.addEventListener('click', function () {
   
    audioElement.play();
});
// question 10
   
const elementToHover = document.getElementById('element-to-hover');

      
elementToHover.addEventListener('mouseover', function () {
    
    alert('Mouse is over the element!');
});

// question 11

const elementToHide = document.getElementById('element-to-hide');

       
elementToHide.addEventListener('mouseout', function () {
   
    elementToHide.style.display = 'none';
});
// question 12


function Window() {}
   
    var windowWidth = window.innerWidth / 2;
    var windowHeight = window.innerHeight / 2;


    var newWindow = window.open('', '_blank', `width=${windowWidth}, height=${windowHeight}`);

    function closeDynamicWindow() {
            
      window.close();
  }

// Chapter 46, 48 (Events) 

// completed


// Chapter 49, 50 (Reading and Setting

//   field values)

// question 01

    
const userInput = document.getElementById('userInput');

        
userInput.addEventListener('input', function () {
   
    const inputValue = userInput.value;

   
    console.log('User input:', inputValue);
});
// question 02

const checkbox = document.getElementById('myCheckbox');

       
checkbox.addEventListener('change', function () {
   
    const isChecked = checkbox.checked;

   
    console.log('Checkbox is checked:', isChecked);
});
// question 03

const selectBox = document.getElementById('mySelect');

        
selectBox.addEventListener('change', function () {
   
    const selectedValue = selectBox.value;

   
    console.log('Selected value:', selectedValue);
});
// question 04

// <input type="text" id="myCustomField" value="This is some text in the field with a custom ID">


// question 05


const marriedYes = document.getElementById('marriedYes');
const marriedNo = document.getElementById('marriedNo');
const statusField = document.getElementById('status');


marriedYes.addEventListener('change', updateStatus);
marriedNo.addEventListener('change', updateStatus);


function updateStatus() {
    
    const married = marriedYes.checked;
    
  
    if (!married) {
        statusField.value = 'available';
    } else {
    
        statusField.value = '';
    }
}



// question 06
function fillInput() {
         
  const inputField = document.getElementById('myInput');

  
  if (inputField.value.trim() === '') {
     
      inputField.value = 'Default Text';
  }
}

// question 07
function validateForm() {
  var nameField = document.getElementById('name');
  var emailField = document.getElementById('email');
  var passwordField = document.getElementById('password');

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  var isValid = true;

  if (nameField.value.trim() === '') {
      nameError.textContent = 'Name is required';
      isValid = false;
  }

  

  return isValid;
}

// completed
