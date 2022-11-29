/* Dictionary:  english/klingon and an array with output if there is no translation*/

let eng = ['me', 'SoH', 'country', 'fight', 'die'];
let kling = ['i', 'SoH', 'Hatlh', 'vay', 'Hegh'];
let notFound = [
  'We work on it...',
  'The guy in charge for this word was fired.',
  'Oooooops, that was not in our list',
  'Try it again in some years.',
];

/* I prefered an inputfield over prompt */

let searchField = document.getElementById('word');
let translation = document.getElementById('translation');
let search = document.getElementById('translate');

let translate = function () {
  let index = eng.indexOf(searchField.value);

  eng.indexOf(searchField.value) === -1
    ? (translation.value = notFound[Math.floor(Math.random() * 4)])
    : (translation.value = `${kling[index]}`);
};
search.addEventListener('click', function () {
  !searchField.value ? alert('There is nothing to search.') : translate();
});

/* --------------------------------------------- */
/* Receive a word by user promt and check if the word is a palindrome */


let palChecker = document.getElementById("palinCheckerBtn");

palChecker.addEventListener("click", () => {
  let str = prompt("Enter a word.");

  let reversed = str.toLowerCase().split("").reverse().join("");
  if (!str) {
    alert("Please enter a word!");
  } else if (str === reversed) {
    alert("Plaindrome");
  } else {
    alert("No palindrome");
  }
});


/* ----------------------------------------------*/

/* make a wordlist out of the translated words */

let wordContainer = document.getElementById('wordlist-container');
let deleteBtn = document.getElementById('delete');
let addBtn = document.getElementById('add');
let paragraph = document.getElementById('paragraph-element');

let remBtn = document.createElement('button');

addBtn.addEventListener('click', () => {
  let newPElement = document.createElement('p');
  kling.includes(translation.value) === true
    ? (newPElement.innerText = translation.value)
    : alert('Try it with a klingon word.');
  translation.value = '';
  searchField.value = '';
  wordContainer.appendChild(newPElement);
  newPElement.classList.add('cursor');

  /* line through by clicking */

  newPElement.addEventListener('click', () => {
    newPElement.classList.add('line-through');
  });

  /* Dubbleclick on the word will remove it from the list. 
  I chose to remove them instead of "display: none" */

  newPElement.addEventListener('dblclick', () => {
    newPElement.remove();
  });
});
