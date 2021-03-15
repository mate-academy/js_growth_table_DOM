'use strict';

// write code here

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');
const tr = document.querySelector('tr');
const field = document.querySelector('.field');
const fieldRows = field.rows;
const firstFieldCells = field.rows[0].cells;
const maxCount = 10;
const minCount = 2;

appendRowButton.addEventListener('click', () => {
  removeRowButton.disabled = false;

  tbody.append(tr.cloneNode(true));

  if (fieldRows.length >= maxCount) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  appendRowButton.disabled = false;

  field.deleteRow(0);

  if (fieldRows.length <= minCount) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  removeColumnButton.disabled = false;

  for (let i = 0; i < fieldRows.length; i++) {
    field.rows[i].insertAdjacentHTML('beforeend', '<td></td>');
  }

  if (firstFieldCells.length >= maxCount) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  appendColumnButton.disabled = false;

  for (let i = 0; i < fieldRows.length; i++) {
    field.rows[i].deleteCell(-1);
  }

  if (firstFieldCells.length <= minCount) {
    removeColumnButton.disabled = true;
  }
});
