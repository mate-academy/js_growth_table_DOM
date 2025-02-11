'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tableBody = table.tBodies[0];
const rows = tableBody.rows;
const row = document.querySelector('tr');

console.log(tableBody.rows);


let rowCounter = 4;
let columnCounter = 4;

appendRow.addEventListener('click', () => {
  if (rowCounter < 10) {
    rowCounter++;

    removeRow.removeAttribute('disabled');

    const newRow = row.cloneNode(true);

    tableBody.appendChild(newRow);
  }

  if (rowCounter === 10) {
    appendRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  if (rowCounter > 2) {
    rowCounter--;
    appendRow.removeAttribute('disabled');

    const deletedRow = tableBody.rows[table.rows.length - 1];

    deletedRow.remove();
  }

  if (rowCounter === 2) {
    removeRow.setAttribute('disabled', true);
  }
});

appendColumn.addEventListener('click', () => {
  if (columnCounter < 10) {
    columnCounter++;
    removeColumn.removeAttribute('disabled');

    [...rows].forEach((line) => {
      const newColumn = line.lastElementChild.cloneNode(true);

      line.insertAdjacentElement('beforeend', newColumn);
    });
  }

  if (columnCounter === 10) {
    appendColumn.setAttribute('disabled', true);
  }
});

removeColumn.addEventListener('click', () => {
  if (columnCounter > 2) {
    columnCounter--;
    appendColumn.removeAttribute('disabled');

    [...rows].forEach((line) => {
      const deletedColumn = line.lastElementChild;

      deletedColumn.remove();
    });
  }

  if (columnCounter === 2) {
    removeColumn.setAttribute('disabled', true);
  }
});
