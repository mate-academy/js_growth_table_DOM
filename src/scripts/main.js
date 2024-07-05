'use strict';

const table = document.querySelector('.field');
const newRowBtn = document.querySelector('.append-row');
const deleteRowBtn = document.querySelector('.remove-row');
const newColBtn = document.querySelector('.append-column');
const deleteColBtn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

function updateTable() {
  const rowAmount = table.rows.length;
  const colAmount = table.rows[0].cells.length;

  newRowBtn.disabled = rowAmount >= max;
  deleteRowBtn.disabled = rowAmount <= min;
  newColBtn.disabled = colAmount >= max;
  deleteColBtn.disabled = colAmount <= min;
}

function addRow() {
  const newRow = table.insertRow();
  const colAmount = table.rows[0].cells.length;

  for (let i = 0; i < colAmount; i++) {
    newRow.insertCell();
  }

  updateTable();
}

function removeRow() {
  if (table.rows.length > min) {
    table.deleteRow(-1);
  }

  updateTable();
}

function addCol() {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }

  updateTable();
}

function removeCol() {
  if (table.rows[0].cells.length > min) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  }

  updateTable();
}

newRowBtn.addEventListener('click', addRow);
deleteRowBtn.addEventListener('click', removeRow);
newColBtn.addEventListener('click', addCol);
deleteColBtn.addEventListener('click', removeCol);
