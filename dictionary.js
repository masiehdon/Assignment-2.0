"use strict";

/* Dictionary:  english/klingon and an array with output if there is no translation*/

let eng = ["me", "SoH", "country", "fight", "die"];
let kling = ["i", "SoH", "Hatlh", "vay", "Hegh"];
let notFound = [
  "We work on it...",
  "The guy in charge for this word was fired.",
  "Oooooops, that was not in our list",
  "Try it again in some years.",
];

/* I prefer an inputfield over prompt */

const searchField = document.getElementById("word");
const translation = document.getElementById("translation");
const search = document.getElementById("translate");
const clear = document.getElementById("clear");

let translate = function () {
  let index = eng.indexOf(searchField.value);

  eng.indexOf(searchField.value) === -1
    ? (translation.value =
        notFound[Math.floor(Math.random() * notFound.length)])
    : (translation.value = `${kling[index]}`);
};
search.addEventListener("click", function () {
  !searchField.value
    ? alert("Ooops, seems like you forgot the word.")
    : translate();
});

clear.addEventListener("click", function () {
  searchField.value = "";
  translation.value = "";
});

/* ------------------------------------------------------------ */
/* make a wordlist out of the translated words */

let wordContainer = document.getElementById("wordlist-container");
let deleteBtn = document.getElementById("delete");
let addBtn = document.getElementById("add");
let paragraph = document.getElementById("paragraph-element");

let remBtn = document.createElement("button");

addBtn.addEventListener("click", () => {
  let newPElement = document.createElement("p");
  kling.includes(translation.value) === true
    ? (newPElement.innerText = translation.value)
    : alert("There is no word to add in the list.");
  translation.value = "";
  searchField.value = "";
  wordContainer.appendChild(newPElement);
  newPElement.classList.add("cursor");

  /* line through by clicking */

  newPElement.addEventListener("click", () => {
    newPElement.classList.add("line-through");
  });

  /* Dubbleclick on the word will remove it from the list. 
  I chose to remove them instead of "display: none" */

  newPElement.addEventListener("dblclick", () => {
    newPElement.remove();
  });
});

/* --------------------------------------------- */
/* Check if the word is a palindrome */

let palChecker = document.getElementById("palinCheckerBtn");
let alertP = document.getElementById("alert");

let validation = function (str) {
  if (/^[A-Za-z\s]*$/.test(str) === true) return str;
};

//------------------------------------------------------------------------------------

palChecker.addEventListener("click", () => {
  let str = prompt("Enter a word.");

  let reversed = str.toLowerCase().split("").reverse().join("");

  if (!str || str !== validation(str)) {
    alert("Please enter only letters!");
  } else if (str === reversed) {
    alert("Plaindrome");
  } else {
    alert("No Plaindrome");
  }
});
