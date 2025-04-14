'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function calculateColumns() {
  const firstRow = document.querySelector('.field tr');

  return firstRow.querySelectorAll('td').length;
}

function calculateRows() {
  const firstRow = document.querySelectorAll('.field tr');

  return firstRow.length;
}

function updateButton() {
  const rows = calculateRows();
  const columns = calculateColumns();

  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;
  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
}

document.addEventListener('DOMContentLoaded', () => {
  updateButton();

  appendRow.addEventListener('click', () => {
    const newRow = table.insertRow();

    for (let i = 0; i < calculateColumns(); i++) {
      newRow.insertCell();
    }
    updateButton();
  });

  removeRow.addEventListener('click', () => {
    const row = document.querySelector('.field tr');

    for (let i = calculateColumns() - 1; (i = 0); i--) {
      row.deleteCell();
    }
    table.deleteRow(0);
    updateButton();
  });

  appendColumn.addEventListener('click', () => {
    const rows = document.querySelectorAll('.field tr');

    rows.forEach((row) => {
      row.insertCell();
    });
    updateButton();
  });

  removeColumn.addEventListener('click', () => {
    const rows = document.querySelectorAll('.field tr');

    rows.forEach((row) => {
      row.deleteCell(0);
    });
    updateButton();
  });
});
