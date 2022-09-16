'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    table.insertAdjacentHTML('afterbegin', table.rows[0].outerHTML);

    if (table.rows.length === 9) {
      addRow.setAttribute('disabled', true);
    }

    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(0);

    if (table.rows.length === 2) {
      removeRow.setAttribute('disabled', true);
    }

    addRow.removeAttribute('disabled');
  }
});

addColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    const tr = table.querySelectorAll('tr');

    for (let i = 0; i < table.rows.length; i++) {
      const td = document.createElement('td');

      tr[i].append(td);
    }

    if (table.rows[0].cells.length === 9) {
      addColumn.setAttribute('disabled', true);
    }

    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    const row = table.rows;

    for (let i = 0; i < row.length; i++) {
      row[i].deleteCell(0);
    }

    if (table.rows[0].cells.length === 2) {
      removeColumn.setAttribute('disabled', true);
    }

    addColumn.removeAttribute('disabled');
  }
});
