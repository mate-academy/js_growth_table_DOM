'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function getRowCount() {
  return table.rows.length;
}

function getColumnCount() {
  return table.rows[0].cells.length;
}

function updateButtons() {
  appendRow.disabled = getRowCount() >= MAX;
  removeRow.disabled = getRowCount() <= MIN;
  appendColumn.disabled = getColumnCount() >= MAX;
  removeColumn.disabled = getColumnCount() <= MIN;
}

appendRow.addEventListener('click', () => {
  if (getRowCount() >= MAX) {
    return;
  }

  const cols = getColumnCount();
  const row = table.insertRow();

  for (let i = 0; i < cols; i++) {
    row.insertCell();
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (getRowCount() <= MIN) {
    return;
  }

  table.deleteRow(table.rows.length - 1);
  updateButtons();
});

appendColumn.addEventListener('click', () => {
  if (getColumnCount() >= MAX) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  if (getColumnCount() <= MIN) {
    return;
  }

  const lastIndex = getColumnCount() - 1;

  for (const row of table.rows) {
    row.deleteCell(lastIndex);
  }

  updateButtons();
});

updateButtons();
