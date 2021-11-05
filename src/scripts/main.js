'use strict';

// write code here
const table = document.querySelector('.container');
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

table.addEventListener('click', (e) => {
  switch (e.target) {
    case appendRow:
      removeRow.disabled = false;
      appendRow.disabled = countOfRows === 10;
      countOfRows++;

      const newRow = document.createElement('tr');
      const row = document.querySelector('tr');
      const tableBody = document.querySelector('tbody');

      [...row.children].forEach(index => {
        const cell = document.createElement('td');

        newRow.append(cell);
        tableBody.append(newRow);
      });
      break;

    case removeRow:
      countOfRows--;
      appendRow.disabled = false;
      removeRow.disabled = countOfRows === 2;
      document.querySelector('tr').remove();
      break;

    case appendColumn:
      countOfColumns++;
      removeColumn.disabled = false;
      appendColumn.disabled = countOfColumns === 10;

      const rows = document.querySelectorAll('tr');

      [...rows].forEach(row => {
        const cell = document.createElement('td');

        row.append(cell);
      });
      break;

    case removeColumn:
      countOfColumns--;
      appendColumn.disabled = false;
      removeColumn.disabled = countOfColumns === 2;

      const rowsLastElement = document.querySelectorAll('tr');

      [...rowsLastElement].forEach(rowsLastElement => {
        rowsLastElement.lastElementChild.remove();
      });
      break;
  }
});
