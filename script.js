const submitButton = 
document.getElementById("submit-user");

 const removeDiv = 
 document.getElementById("reimbursement-main-container");
 
const rSubmitButton = document.getElementById("submit-reimbursement");

rSubmitButton.addEventListener("click", () => {
  removeElement("user-main-container")
}); 


submitButton.addEventListener("click", () => {
  removeElement("reimbursement-main-container")
}); 

function removeElement(elementId) {
    // Removes an element from the document
   console.log(elementId);
    var element = document.getElementById(elementId);
   
  console.log(element);
   console.log(element.parentNode);
  
   element.parentNode.removeChild(element);
}





// const submitButton = 
//     document.getElementById('submit-user');

// submitButton.addEventListener('click', (e) => {
//         const input = getUserInfoDiv();   
//         if (!input) {
//             e.stopPropagation();
//             return;
//         }

// function getUserInfoDiv() {
//     document.getElementById("reimbursement-main-container").style.display="none";
// };



// const submitButton = getUserInfoDiv()
//     document.getElementById('submit-user');

// submitButton.addEventListener('click', (e) => {
//     getUserInfoDiv();
// }




// function getUserInfoDiv() {
//     document.getElementById("reimbursement-main-container").style.display="none";
//     document.getElementById("user-main-container").style.display="block";
// };

// function getUserInfoDiv() {
//     document.getElementById("welcome-content-area").style.display="none";
//     document.getElementById("get-user-content-area").style.display="none";
//     document.getElementById("user-content-area").style.display="block";
// };

    
// const submitButton = 
// document.getElementById('submit-user');

//removeElement("reimbursement-main-container"); 
// function removeElement(elementId) {
//         // Removes an element from the document
//         var element = document.getElementById(elementId);
//         element.parentNode.removeChild(element);
//     }



// const submitButton = document.getElementById('submit');

// submitButton.addEventListener('click', (e) => {
//     const input = getInputData();    
    
//     // confirm that there is a value
//     if (!input) {
//         e.stopPropagation();
//         return;
//     }

//     // construct a url from that field value
//     const url = 
//         `https://pokeapi.co/api/v2/pokemon/${input}`;

//     // send an http request
//     sendFetch(url);
// });


// function getInputData() {
//     // get the value of the input field
//     const inputElement = document.getElementById('submit-input');

// const inputValue = inputElement.value;
// return inputValue.trim();
// }

// function sendXHR(url) {

// const xhr = new XMLHttpRequest();

// // Register my event handlers
// xhr.addEventListener('readystatechange', () => {
//     if (xhr.readyState === 4) {
//         const payload = JSON.parse(xhr.response);
//         updateView(payload.sprites.front_default,
//             payload.name);
//     }
// });

// // Open the request
// xhr.open('get', url);

// // Send request
// xhr.send();
// }

// async function sendFetch(url) {
// const response = await fetch(url);
// const payload = await response.json();
// updateView(payload.sprites.front_default,
//     payload.name);
// }


// function updateView(spriteUrl, name) {
// const imageE = document.getElementById('poke-img');
// const nameE = document.getElementById('poke-name');

// imageE.src = spriteUrl;
// nameE.innerText = name;
// }