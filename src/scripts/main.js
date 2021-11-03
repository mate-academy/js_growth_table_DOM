'use strict';

// write code here
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const numberOfRows = document.querySelectorAll('tr');
let countOfRows = 0;

[...numberOfRows].forEach(item => {
  countOfRows++;
});

const numberOfColumns = document.querySelector('tr');
let countOfColumns = 0;

[...numberOfColumns.children].forEach(item => {
  countOfColumns++;
});

appendRow.addEventListener('click', (e) => {
  if (countOfRows < 10) {
    removeRow.disabled = false;

    const newRow = document.createElement('tr');

    countOfRows++;

    const row = document.querySelector('tr');

    [...row.children].map(item => {
      const cell = document.createElement('td');

      newRow.append(cell);

      if (countOfRows === 10) {
        appendRow.disabled = true;
      }
    });
    table.append(newRow);
  }
});

removeRow.addEventListener('click', (e) => {
  if (countOfRows > 2) {
    appendRow.disabled = false;
    countOfRows--;
    document.querySelector('tr').remove();

    if (countOfRows === 2) {
      removeRow.disabled = true;
    }
  }
});

appendColumn.addEventListener('click', (e) => {
  if (countOfColumns < 10) {
    removeColumn.disabled = false;
    countOfColumns++;

    const rows = document.querySelectorAll('tr');

    [...rows].forEach(row => {
      const cell = document.createElement('td');

      row.append(cell);

      if (countOfColumns === 10) {
        appendColumn.disabled = true;
      }
    });
  }
});

removeColumn.addEventListener('click', (e) => {
  if (countOfColumns > 2) {
    countOfColumns--;
    appendColumn.disabled = false;

    const rows = document.querySelectorAll('tr');

    [...rows].forEach(row => {
      row.lastElementChild.remove();
    });

    if (countOfColumns === 2) {
      removeColumn.disabled = true;
    }
  }
});
