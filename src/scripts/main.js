'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

let numberOfColumns = 4;
let numberOfRows = 4;

const maxLength = 10;
const minLength = 2;

const disableButtons = () => {
  if (numberOfRows === maxLength) {
    appendRow.setAttribute('disabled', '');
  } else {
    appendRow.removeAttribute('disabled');
  }

  if (numberOfRows === minLength) {
    removeRow.setAttribute('disabled', '');
  } else {
    removeRow.removeAttribute('disabled');
  }

  if (numberOfColumns === maxLength) {
    appendColumn.setAttribute('disabled', '');
  } else {
    appendColumn.removeAttribute('disabled');
  }

  if (numberOfColumns === minLength) {
    removeColumn.setAttribute('disabled', '');
  } else {
    removeColumn.removeAttribute('disabled');
  }
};

appendRow.addEventListener('click', () => {
  if (numberOfRows < 10) {
    const tr = document.createElement('tr');
    for (let i = 0; i < numberOfColumns; i++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
    table.appendChild(tr);
    numberOfRows++;
  }

  disableButtons();
});

appendColumn.addEventListener('click', () => {
  if (numberOfColumns < 10) {
    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach((row) => {
      const td = document.createElement('td');
      row.appendChild(td);
    });
    numberOfColumns++;
  }

  disableButtons();
});

removeRow.addEventListener('click', () => {
  if (numberOfRows > 2) {
    table.deleteRow(table.rows.length - 1);
    numberOfRows--;
  }

  disableButtons();
});

removeColumn.addEventListener('click', () => {
  if (numberOfColumns > 2) {
    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach((row) => {
      row.deleteCell(row.cells.length - 1);
    });
    numberOfColumns--;
  }

  disableButtons();
});
