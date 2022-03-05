'use strict';

let rows = 4;
let cols = 4;

const addRowButton = document.getElementsByClassName('append-row button')[0];
const removeRowButton = document.getElementsByClassName('remove-row button')[0];
const addColumnButton = document.getElementsByClassName(
  'append-column button')[0];
const removeColumnButton = document.getElementsByClassName(
  'remove-column button')[0];
const tBody = document.querySelector('tbody');

addRowButton.addEventListener('click', addRow);

function addRow() {
  if (rows < 10) {
    removeRowButton.disabled = false;
    rows++;

    const clone = tBody.children[0].cloneNode(true);

    tBody.appendChild(clone);
  }

  if (rows === 10) {
    addRowButton.disabled = true;
  }
}
removeRowButton.addEventListener('click', removeRow);

function removeRow() {
  if (rows > 2) {
    addRowButton.disabled = false;
    rows--;
    tBody.removeChild(tBody.children[0]);
  }

  if (rows === 2) {
    removeRowButton.disabled = true;
  }
}

addColumnButton.addEventListener('click', addColumn);

function addColumn() {
  if (cols < 10) {
    cols++;

    for (let i = 0; i < rows; i++) {
      const tr = tBody.children[i];
      const clone = tr.children[0].cloneNode(true);

      tr.appendChild(clone);
    }
  }

  if (cols === 10) {
    addColumnButton[0].disabled = true;
  }
}

removeColumnButton.addEventListener('click', removeColumn);

function removeColumn() {
  if (cols > 2) {
    addColumnButton.disabled = false;
    cols--;

    for (let i = 0; i < rows; i++) {
      const tr = tBody.children[i];

      tr.removeChild(tr.children[0]);
    }
  }

  if (cols === 2) {
    removeColumnButton.disabled = true;
  }
}
