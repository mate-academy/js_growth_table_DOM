'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
const rows = field.rows;

const minLength = 2;
const maxLength = 10;

appendRow.addEventListener('click', () => {
  if (rows.length < maxLength) {
    const row = field.insertRow(-1);

    for (let i = 0; i < field.rows[0].cells.length; i++) {
      row.insertCell(i);
    }
  }

  if (rows.length === maxLength) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (rows.length > minLength) {
    field.deleteRow(-1);
  }

  if (rows.length === minLength) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length < maxLength) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell(-1);
    }
  }

  if (field.rows[0].cells.length === maxLength) {
    appendColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length > minLength) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(-1);
    }
    removeColumn.disabled = false;
  }

  if (field.rows[0].cells.length === minLength) {
    removeColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
});
