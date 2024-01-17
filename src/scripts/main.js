'use strict';

// Select the buttons
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

// Select the table
const table = document.querySelector('.field');

// Define the max and min counts
const MAX_COUNT = 10;
const MIN_COUNT = 2;

// Define the functions
function appendRow() {
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }
  checkButtonStatus();
}

function removeRow() {
  table.deleteRow(-1);
  checkButtonStatus();
}

function appendColumn() {
  for (const row of table.rows) {
    row.insertCell();
  }
  checkButtonStatus();
}

function removeColumn() {
  for (const row of table.rows) {
    row.deleteCell(-1);
  }
  checkButtonStatus();
}

function checkButtonStatus() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= MAX_COUNT;
  removeRowButton.disabled = rowCount <= MIN_COUNT;
  appendColumnButton.disabled = columnCount >= MAX_COUNT;
  removeColumnButton.disabled = columnCount <= MIN_COUNT;
}

// Add event listeners
appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
