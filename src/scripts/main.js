'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const fieldTable = document.querySelector('.field');
const maxCount = 10;
const minCount = 2;
let rowCount = fieldTable.rows.length;
let columnCount = fieldTable.rows[0].cells.length;

function handleButton(button, value) {
  button.disabled = value;
}

function updateButtonStates() {
  handleButton(appendRowButton, rowCount === maxCount);
  handleButton(removeRowButton, rowCount === minCount);
  handleButton(appendColumnButton, columnCount === maxCount);
  handleButton(removeColumnButton, columnCount === minCount);
};

function appendRow() {
  const row = fieldTable.insertRow();

  for (let i = 0; i < columnCount; i++) {
    row.insertCell();
  }

  rowCount++;
  updateButtonStates();
}

function removeRow() {
  fieldTable.deleteRow(-1);
  rowCount--;
  updateButtonStates();
}

function appendColumn() {
  for (let i = 0; i < rowCount; i++) {
    fieldTable.rows[i].insertCell();
  }

  columnCount++;
  updateButtonStates();
}

function removeColumn() {
  for (let i = 0; i < rowCount; i++) {
    fieldTable.rows[i].deleteCell(-1);
  }

  columnCount--;
  updateButtonStates();
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

updateButtonStates();
