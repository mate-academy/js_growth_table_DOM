'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('tbody');

const maxLength = 10;
const minLength = 2;

appendColumn.addEventListener('click', () => {
  if ([...table.rows[0].cells].length < maxLength) {
    appendColumn.setAttribute('enabled', true);

    [...table.rows].forEach((row) => {
      const cloneColumn = document.createElement('td');

      row.append(cloneColumn);
    });
  }

  if ([...table.rows[0].cells].length >= maxLength) {
    appendColumn.setAttribute('disabled', true);
  }

  if ([...table.rows[0].cells].length > minLength) {
    removeColumn.removeAttribute('disabled', true);
  }
});

removeColumn.addEventListener('click', () => {
  if ([...table.rows[0].cells].length > minLength) {
    [...table.rows].forEach((row) => {
      row.deleteCell(table.rows[0].cells.length - 1);
    });
  }

  if ([...table.rows[0].cells].length <= minLength) {
    removeColumn.setAttribute('disabled', true);
  }

  if ([...table.rows[0].cells].length < maxLength) {
    appendColumn.removeAttribute('disabled', true);
  }
});

appendRow.addEventListener('click', () => {
  if ([...table.rows].length < maxLength) {
    table.append(table.rows[0].cloneNode(true));
  }

  if ([...table.rows].length >= maxLength) {
    appendRow.setAttribute('disabled', true);
  }

  if ([...table.rows].length > minLength) {
    removeRow.removeAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  if ([...table.rows].length > minLength) {
    table.deleteRow(table.rows[0]);
  }

  if ([...table.rows].length < maxLength) {
    appendRow.removeAttribute('disabled', true);
  }

  if ([...table.rows].length <= minLength) {
    removeRow.setAttribute('disabled', true);
  }
});
