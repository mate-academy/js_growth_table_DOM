'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

let currentRows = 4;
let currentColumns = 4;

const MAX = 10;
const MIN = 2;

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;

  if (currentRows < MAX) {
    const tr = document.querySelector('tr');
    const newRow = tr.cloneNode(true);

    table.append(newRow);
    currentRows++;
  }

  if (currentRows === MAX) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  appendRow.disabled = false;

  if (currentRows > MIN) {
    const tr = document.querySelector('tr');

    table.removeChild(tr);
    currentRows--;
  }

  if (currentRows === MIN) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  if (currentColumns < MAX) {
    document.querySelectorAll('tr').forEach((row) => {
      row.append(document.createElement('td'));
    });

    currentColumns++;
  }

  if (currentColumns === MAX) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  if (currentColumns > MIN) {
    document.querySelectorAll('tr').forEach((row) => {
      row.removeChild(row.querySelector('td'));
    });

    currentColumns--;
  }

  if (currentColumns === MIN) {
    removeColumn.disabled = true;
  }
});
