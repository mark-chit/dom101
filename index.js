/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

// add your functions here
function replaceText(elem, str) {
  document.querySelector(elem);
}

function setId(elem, str) {
  elem.id = str;
  return elem;
}

function setClass(elem, str) {
  elem.className = str;
  return elem;
}

function addAClass(elem, str) {
  elem.classList.add(str);
  return elem;
}

function removeAClass(elem, str) {
  elem.classList.remove(str);
  return elem;
}

function newElement(name) {
  return document.createElement(name);
}

function findElementById(id) {
  return document.getElementById(id);
}

function findElementsByQuery(query) {
  return document.querySelectorAll(query);
}

function reverseList(query) {
  let list = document.querySelector(query);

  if (list) {
    let items = Array.from(list.children);
    items.reverse();

    //remove the items
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    for (let i = 0; i < items.length; i++) {
      list.appendChild(items[i]);
    }
  }
  return list;
}

function mover(moveThis, appendToThis) {
  let something = document.querySelector(moveThis);
  let moveTo = document.querySelector(appendToThis);
  moveTo.appendChild(something);
  return moveThis;
}

// Write a function `filler` that accepts two parameters, the first is a list element that should be added to, the second is an array of candidate strings that will be turned into list items. The function should add a list item for each string in the array to the list element. The function should return the list element.

function filler(list, candidates) {
  candidates.forEach((candidate) => {
    let item = document.createElement("li");
    item.textContent = candidate;
    list.appendChild(item);
  });
  return list;
}

function dupe(selector) {
  let original = document.querySelector(selector);
  let copy = original.cloneNode(true);
  original.parentElement.appendChild(copy);
  return copy;
}

function removeAll(selector) {
  let all = document.querySelectorAll(selector);
  all.forEach((elem) => {
    elem.remove();
  });
  return all;
}

function getUserData() {
  let name = document.querySelector("#username");
  let speed = document.querySelector("#speed");
  let student = document.querySelector("#student");
  let data = {
    name: name.value,
    speed: parseInt(speed.value, 10), // parse the string to an integer of base 10
    student: student.checked,
  };
  return data;
}

