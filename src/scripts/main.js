'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function state() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  if (rowsCount >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (rowsCount <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (colsCount >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (colsCount <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
}

appendRow.addEventListener('click', () => {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  state();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 1) {
    table.deleteRow(table.rows.length - 1);
    state();
  }
});

appendColumn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }
  state();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 1) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    state();
  }
});

state();
