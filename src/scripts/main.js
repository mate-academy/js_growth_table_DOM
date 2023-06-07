'use strict';

const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

let currentRowNumber = table.rows.length;
let currentColNumber = table.rows[0].cells.length;

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

function appendRow() {
  if (currentRowNumber < MAX_COUNT) {
    removeRowBtn.disabled = false;

    const newRow = document.createElement('tr');

    for (let i = 0; i < currentColNumber; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    tBody.appendChild(newRow);
    currentRowNumber++;

    if (currentRowNumber === MAX_COUNT) {
      appendRowBtn.disabled = true;
    }
  }
}

function removeRow() {
  if (currentRowNumber > MIN_COUNT) {
    appendRowBtn.disabled = false;

    const rowToRemove = tBody.querySelector('tr');

    tBody.removeChild(rowToRemove);
    currentRowNumber--;

    if (currentRowNumber === MIN_COUNT) {
      removeRowBtn.disabled = true;
    }
  }
}

function appendColumn() {
  if (currentColNumber < MAX_COUNT) {
    removeColumnBtn.disabled = false;

    const rows = tBody.querySelectorAll('tr');

    rows.forEach((row) => {
      row.appendChild(document.createElement('td'));
    });

    currentColNumber++;

    if (currentColNumber === MAX_COUNT) {
      appendColumnBtn.disabled = true;
    }
  }
}

function removeColumn() {
  if (currentColNumber > MIN_COUNT) {
    appendColumnBtn.disabled = false;

    const rows = tBody.querySelectorAll('tr');

    rows.forEach((row) => {
      row.removeChild(row.querySelector('td'));
    });

    currentColNumber--;

    if (currentColNumber === MIN_COUNT) {
      removeColumnBtn.disabled = true;
    }
  }
}
