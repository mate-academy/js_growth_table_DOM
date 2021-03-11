'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
const fieldRows = field.rows;
const firstFieldCells = field.rows[0].cells;
const maxValue = 10;
const minValue = 2;

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;

  field.insertRow();

  for (let i = 0; i < firstFieldCells.length; i++) {
    field.rows[field.rows.length - 1].insertCell();
  }

  if (fieldRows.length >= maxValue) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  appendRow.disabled = false;

  field.deleteRow(0);

  if (fieldRows.length <= minValue) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  for (let i = 0; i < fieldRows.length; i++) {
    field.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
  }

  if (firstFieldCells.length >= maxValue) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  for (let i = 0; i < fieldRows.length; i++) {
    field.rows[i].deleteCell(i - 1);
  }

  if (firstFieldCells.length <= minValue) {
    removeColumn.disabled = true;
  }
});
