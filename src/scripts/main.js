'use strict';

const table = document.querySelector('table');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = newRow.insertCell();
    }

    if (rowCount + 1 === 10) {
      appendRow.disabled = true;
    }

    if (rowCount === 2) {
      removeRow.disabled = false;
    }
  }
});

removeRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount > 2) {
    table.deleteRow(rowCount - 1);

    if (rowCount - 1 === 2) {
      removeRow.disabled = true;
    }

    if (rowCount === 10) {
      appendRow.disabled = false;
    }
  }
});

appendColumn.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = table.rows[i].insertCell();
    }

    if (columnCount + 1 === 10) {
      appendColumn.disabled = true;
    }

    if (columnCount === 2) {
      removeColumn.disabled = false;
    }
  }
});

removeColumn.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(columnCount - 1);
    }

    if (columnCount - 1 === 2) {
      removeColumn.disabled = true;
    }

    if (columnCount === 10) {
      appendColumn.disabled = false;
    }
  }
});
