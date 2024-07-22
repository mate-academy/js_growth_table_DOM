'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const tableBody = document.querySelector('tbody');
const rows = tableBody.children;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (rows.length < MAX_COUNT) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < rows[0].children.length; i++) {
      newRow.append(document.createElement('td'));
    }

    tableBody.append(newRow);
  }

  appendRow.disabled = rows.length === MAX_COUNT;
});

removeRow.addEventListener('click', () => {
  if (rows.length > MIN_COUNT) {
    rows[rows.length - 1].remove();
  }

  removeRow.disabled = rows.length === MIN_COUNT;
});

appendColumn.addEventListener('click', () => {
  if (rows[0].children.length < MAX_COUNT) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].append(document.createElement('td'));
    }
  }

  appendColumn.disabled = rows[0].children.length === MAX_COUNT;
});

removeColumn.addEventListener('click', () => {
  if (rows[0].children.length > MIN_COUNT) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].children[rows[i].children.length - 1].remove();
    }
  }

  removeColumn.disabled = rows[0].children.length === MIN_COUNT;
});
