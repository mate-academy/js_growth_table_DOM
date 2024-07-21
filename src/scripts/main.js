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

  if (rows.length === MAX_COUNT) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (rows.length > MIN_COUNT) {
    rows[rows.length - 1].remove();
  }

  if (rows.length === MIN_COUNT) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  if (rows[0].children.length < MAX_COUNT) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].append(document.createElement('td'));
    }
  }

  if (rows[0].children.length === MAX_COUNT) {
    appendColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  if (rows[0].children.length > MIN_COUNT) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].children[rows[i].children.length - 1].remove();
    }
  }

  if (rows[0].children.length === MIN_COUNT) {
    removeColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
});
