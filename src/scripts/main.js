'use strict';

const table = document.querySelector('.field');
const btnAddRow = document.querySelector('.append-row');
const btnDeleteRow = document.querySelector('.remove-row');
const btnAddColumn = document.querySelector('.append-column');
const btnDeleteColumn = document.querySelector('.remove-column');

// Event which add new row to the table

btnAddRow.addEventListener('click', (e) => {
  btnDeleteRow.removeAttribute('disabled');

  if (table.rows.length < 10) {
    const newRow = table.insertRow(-1);

    for (let i = 0; i < table.rows[1].cells.length; i++) {
      newRow.insertCell();
    }
  }

  if (table.rows.length === 10) {
    btnAddRow.setAttribute('disabled', '');
  }
});

// Event that remove row from table.

btnDeleteRow.addEventListener('click', (e) => {
  btnAddRow.removeAttribute('disabled');

  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  if (table.rows.length === 2) {
    btnDeleteRow.setAttribute('disabled', '');
  }
});

// Enent that add new column.

btnAddColumn.addEventListener('click', (e) => {
  const ar = table.rows;

  btnDeleteColumn.removeAttribute('disabled');

  if (ar[1].cells.length < 10) {
    for (const element of ar) {
      element.insertCell();
    }
  }

  if (ar[1].cells.length === 10) {
    btnAddColumn.setAttribute('disabled', '');
  }
});

// Event which delete column from table and disable button.

btnDeleteColumn.addEventListener('click', (e) => {
  btnAddColumn.removeAttribute('disabled');

  const ar = table.rows;

  if (ar[1].cells.length > 2) {
    for (const element of ar) {
      element.deleteCell(-1);
    }
  }

  if (ar[1].cells.length === 2) {
    btnDeleteColumn.setAttribute('disabled', '');
  }
});
