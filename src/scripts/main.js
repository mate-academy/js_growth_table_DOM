'use strict';

// write code here

const table = document.querySelector('tbody');

const addColumnButton = document.querySelector('.append-column');
const deleteColumnButton = document.querySelector('.remove-column');
const addRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');

const newPart = table.children[0].children[3];

addColumnButton.addEventListener('click', () => addColumn());
deleteColumnButton.addEventListener('click', () => deleteColumn());
addRowButton.addEventListener('click', () => addRow());
deleteRowButton.addEventListener('click', () => deleteRow());

function addColumn() {
  for (let i = 0; i < table.children.length; i++) {
    const table2 = document.querySelectorAll('tr');

    if (table2[i].children.length < 10) {
      table.children[i].insertBefore(
        newPart.cloneNode(true), table.children[i].children[3]);
      deleteColumnButton.disabled = false;
    }

    if (table2[i].children.length === 10) {
      addColumnButton.setAttribute('disabled', true);
    }
  }
}

function deleteColumn() {
  for (let i = 0; i < table.children.length; i++) {
    const table2 = document.querySelectorAll('tr');

    if (table2[i].children.length > 2) {
      table2[i].removeChild(table2[i].children[0]);
      addColumnButton.disabled = false;
    }

    if (table2[i].children.length === 2) {
      deleteColumnButton.setAttribute('disabled', true);
    }
  }
}

function addRow() {
  if (table.children.length < 10) {
    const newRow = table.children[1];

    table.insertBefore(newRow.cloneNode(true), table.children[1]);
    deleteRowButton.disabled = false;
  }

  if (table.children.length === 10) {
    addRowButton.setAttribute('disabled', true);
  }
}

function deleteRow() {
  if (table.children.length > 2) {
    table.removeChild(table.children[0]);
    addRowButton.disabled = false;
  }

  if (table.children.length === 2) {
    deleteRowButton.setAttribute('disabled', true);
  }
}
