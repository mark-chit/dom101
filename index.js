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

function mover(moveThis, appendToThis){
  let something = document.querySelector(moveThis);
  let moveTo = document.querySelector(appendToThis);
  moveTo.appendChild(something);
  return moveThis; 
}

function filler(list, candidates){
  
}