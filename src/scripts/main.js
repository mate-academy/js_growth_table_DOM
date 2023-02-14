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

function disableButton(button) {
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}

function updateButtonStates() {
  if (rowCount === maxCount) {
    disableButton(appendRowButton);
  } else {
    enableButton(appendRowButton);
  }

  if (rowCount === minCount) {
    disableButton(removeRowButton);
  } else {
    enableButton(removeRowButton);
  }

  if (columnCount === maxCount) {
    disableButton(appendColumnButton);
  } else {
    enableButton(appendColumnButton);
  }

  if (columnCount === minCount) {
    disableButton(removeColumnButton);
  } else {
    enableButton(removeColumnButton);
  }
}

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
