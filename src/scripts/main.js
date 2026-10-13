'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');

const MAX_NUMBER = 10;
const MIN_NUMBER = 2;

const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');

function updateButtons() {
  const rowsCount = table.rows.length;
  const colomnCount = table.rows[0].cells.length;

  appendColumn.disabled = colomnCount >= MAX_NUMBER;
  removeColumn.disabled = colomnCount <= MIN_NUMBER;
  appendRow.disabled = rowsCount >= MAX_NUMBER;
  removeRow.disabled = rowsCount <= MIN_NUMBER;
}

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= MAX_NUMBER) {
    return;
  }

  [...table.rows].forEach((row) => row.insertCell());
  updateButtons();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= MIN_NUMBER) {
    return;
  }

  [...table.rows].forEach((row) => row.deleteCell(-1));
  updateButtons();
});

appendRow.addEventListener('click', () => {
  if (table.rows.length >= MAX_NUMBER) {
    return;
  }

  const cellCount = table.rows[0].cells.length;
  const newRow = tbody.insertRow();

  for (let i = 0; i < cellCount; i++) {
    newRow.insertCell();
  }

  tbody.appendChild(newRow);
  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length <= MIN_NUMBER) {
    return;
  }

  table.deleteRow(-1);
  updateButtons();
});
