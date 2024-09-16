'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxLength = 10;
const minLength = 2;

addRow.addEventListener('click', () => {
  if (table.rows.length < maxLength) {
    table.insertAdjacentHTML('afterbegin', table.rows[0].outerHTML);

    if (table.rows.length === maxLength) {
      addRow.setAttribute('disabled', true);
    }

    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > minLength) {
    table.deleteRow(0);

    if (table.rows.length === minLength) {
      removeRow.setAttribute('disabled', true);
    }

    addRow.removeAttribute('disabled');
  }
});

addColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < maxLength) {
    const tr = table.querySelectorAll('tr');

    for (let i = 0; i < table.rows.length; i++) {
      const td = document.createElement('td');

      tr[i].append(td);
    }

    if (table.rows[0].cells.length === maxLength) {
      addColumn.setAttribute('disabled', true);
    }

    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > minLength) {
    const row = table.rows;

    for (let i = 0; i < row.length; i++) {
      row[i].deleteCell(0);
    }

    if (table.rows[0].cells.length === minLength) {
      removeColumn.setAttribute('disabled', true);
    }

    addColumn.removeAttribute('disabled');
  }
});
