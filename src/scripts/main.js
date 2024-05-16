'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const rows = [...tbody.rows];

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (removeRow.disabled) {
    removeRow.disabled = false;
  }

  const row = tbody.lastElementChild.cloneNode(true);

  tbody.append(row);

  if (table.rows.length === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (appendRow.disabled) {
    appendRow.disabled = false;
  }

  const lastRow = tbody.lastElementChild;

  lastRow.remove();

  if (table.rows.length === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  if (removeColumn.disabled) {
    removeColumn.disabled = false;
  }

  rows.forEach((row) => {
    const newCell = row.insertCell();

    newCell.textContent = '';
  });

  if (table.rows[0].cells.length === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  if (appendColumn.disabled) {
    appendColumn.disabled = false;
  }

  rows.forEach((row) => row.deleteCell(row.cells.length - 1));

  if (table.rows[0].cells.length === 2) {
    removeColumn.disabled = true;
  }
});
