'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows.length < 10) {
    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
  }

  if (table.rows.length === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows.length > 2) {
    table.deleteRow(-1);

    if (table.rows.length === 2) {
      removeRow.disabled = true;
    }
  }
});

appendColumn.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }
  }

  if (table.rows[0].cells.length === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }

    if (table.rows[0].cells.length === 2) {
      removeColumn.disabled = true;
    }
  }
});
