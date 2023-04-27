'use strict';

const maxRows = 10;
const maxColumns = maxRows;
const minRows = 2;
const minColumns = minRows;

const appendRowBtn = document.querySelector('.append-row');
const appendColBtn = document.querySelector('.append-column');
const removeRowBtn = document.querySelector('.remove-row');
const removeColBtn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');

let currentRowNumber = tableBody.children.length;
let currentColNumber = tableBody.children[0].children.length;

function appendRow() {
  if (currentRowNumber < maxRows) {
    removeRowBtn.disabled = false;

    const tr = document.createElement('tr');

    for (let i = 0; i < currentColNumber; i++) {
      tr.appendChild(document.createElement('td'));
    }
    tableBody.appendChild(tr);
    currentRowNumber++;

    if (currentRowNumber === maxRows) {
      appendRowBtn.disabled = true;
    }
  }
}

function removeRow() {
  if (currentRowNumber > minRows) {
    appendRowBtn.disabled = false;

    const lastRow = tableBody.querySelector('tr');

    tableBody.removeChild(lastRow);
    currentRowNumber--;

    if (currentRowNumber === minRows) {
      removeRowBtn.disabled = true;
    }
  }
}

function appendCol() {
  if (currentColNumber < maxColumns) {
    removeColBtn.disabled = false;

    const tableRows = tableBody.querySelectorAll('tr');

    [...tableRows].forEach(tableRow => {
      tableRow.appendChild(document.createElement('td'));
    });

    currentColNumber++;

    if (currentColNumber === maxColumns) {
      appendColBtn.disabled = true;
    }
  }
}

function removeCol() {
  if (currentColNumber > minColumns) {
    appendColBtn.disabled = false;

    const tableRows = tableBody.querySelectorAll('tr');

    [...tableRows].forEach(tableRow => {
      tableRow.removeChild(tableRow.querySelector('td'));
    });

    currentColNumber--;

    if (currentColNumber === minColumns) {
      removeColBtn.disabled = true;
    }
  }
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColBtn.addEventListener('click', appendCol);
removeColBtn.addEventListener('click', removeCol);
