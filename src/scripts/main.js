'use strict';

// write code here
let rowCount = 4;
let columnCount = 4;

const field = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row.button');
const removeRowButton = document.querySelector('.remove-row.button');
const appendColumnButton = document.querySelector('.append-column.button');
const removeColumnButton = document.querySelector('.remove-column.button');

appendRowButton.addEventListener('click', (e) => {
  if (rowCount < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnCount; i++) {
      newRow.append(document.createElement('td'));
    }

    field.append(newRow);
    rowCount++;
    removeRowButton.disabled = false;
  }

  if (rowCount === 10) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (e) => {
  if (rowCount > 2) {
    field.querySelector('tr').remove();
    rowCount--;
    appendRowButton.disabled = false;
  }

  if (rowCount === 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', (e) => {
  if (columnCount < 10) {
    for (const row of field.querySelectorAll('tr')) {
      row.append(document.createElement('td'));
    }

    columnCount++;
    removeColumnButton.disabled = false;
  }

  if (columnCount === 10) {
    appendColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  if (columnCount > 2) {
    for (const row of field.querySelectorAll('tr')) {
      row.querySelector('td').remove();
    }

    columnCount--;
    appendColumnButton.disabled = false;
  }

  if (columnCount === 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
});
