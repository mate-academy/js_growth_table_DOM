'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const rows = table.rows;

appendRow.addEventListener('click', () => {
  if (rows.length < 10) {
    const newRow = table.insertRow(rows.length);

    for (let i = 0; i < rows[0].cells.length; i++) {
      newRow.insertCell();
    }
  }

  if (rows.length > 2) {
    removeRow.disabled = false;
  }

  if (rows.length < 10) {
    appendRow.disabled = false;
  } else {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (rows.length > 2) {
    table.deleteRow(-1);

    if (rows.length > 2) {
      removeRow.disabled = false;
    } else {
      removeRow.disabled = true;
    }
  }

  if (rows.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  if (rows[0].cells.length < 10) {
    for (const row of rows) {
      row.insertCell();
    }
  }

  if (rows[0].cells.length < 10) {
    appendColumn.disabled = false;
  } else {
    appendColumn.disabled = true;
  }

  if (rows[0].cells.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  for (const row of rows) {
    row.deleteCell(-1);
  }

  if (rows[0].cells.length > 2) {
    removeColumn.disabled = false;
  } else {
    removeColumn.disabled = true;
  }

  if (rows[0].cells.length < 10) {
    appendColumn.disabled = false;
  }
});
