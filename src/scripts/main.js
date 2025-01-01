'use strict';

const field = document.querySelector('.field');
const cell = document.querySelector('td');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  if (field.rows.length < 10) {
    const clonedRow = field.rows[0].cloneNode(true);

    const newRow = field.insertRow(1);

    newRow.innerHTML = clonedRow.innerHTML;

    removeRow.disabled = false;

    if (field.rows.length === 10) {
      addRow.disabled = true;
    }
  } else {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (field.rows.length > 2) {
    field.deleteRow(1);
    addRow.disabled = false;

    if (field.rows.length === 2 || field.rows.length === 10) {
      removeRow.disabled = true;
    }
  } else {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length < 10) {
    for (let i = 0; i < field.rows.length; i++) {
      const clonedCell = cell.cloneNode(true);

      field.rows[i].appendChild(clonedCell);
      removeColumn.disabled = false;
    }

    if (field.rows[0].cells.length === 10) {
      addColumn.disabled = true;
    }
  } else {
    addColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length > 2) {
    for (let i = 0; i < field.rows.length; i++) {
      field.rows[i].deleteCell(1);
      addColumn.disabled = false;
    }

    if (field.rows[0].cells.length === 2) {
      removeColumn.disabled = true;
    }
  } else {
    removeColumn.disabled = true;
  }
});
