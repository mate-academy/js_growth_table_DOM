'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function getRows() {
  return table.rows.length;
}

function getCols() {
  return table.rows[0].cells.length;
}

function updateButtons() {
  const rows = getRows();
  const cols = getCols();

  appendRow.disabled = rows >= MAX;
  removeRow.disabled = rows <= MIN;
  appendCol.disabled = cols >= MAX;
  removeCol.disabled = cols <= MIN;
}

appendRow.addEventListener('click', () => {
  if (getRows() >= MAX) return;

  const cols = getCols();
  const row = table.insertRow();

  for (let i = 0; i < cols; i++) {
    row.insertCell();
  }
  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (getRows() <= MIN) return;
  table.deleteRow(table.rows.length - 1);
  updateButtons();
});

appendCol.addEventListener('click', () => {
  if (getCols() >= MAX) return;

  for (const row of table.rows) {
    row.insertCell();
  }
  updateButtons();
});

removeCol.addEventListener('click', () => {
  if (getCols() <= MIN) return;

  const cols = getCols();

  for (const row of table.rows) {
    row.deleteCell(cols - 1);
  }
  updateButtons();
});

updateButtons();
