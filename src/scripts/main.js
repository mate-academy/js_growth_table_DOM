'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

function updateColumnButtons() {
  const currentColCount = table.rows[0]?.cells.length || 0;

  appendColumn.disabled = currentColCount >= MAX_COLUMNS;
  removeColumn.disabled = currentColCount <= MIN_COLUMNS;
}

function updateRowButtons() {
  const rowCount = table.rows.length;

  appendRow.disabled = rowCount >= MAX_ROWS;
  removeRow.disabled = rowCount <= MIN_ROWS;
}

appendRow.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (rowCount >= MAX_ROWS) {
    return;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
    updateRowButtons();
  }
});

appendColumn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX_COLUMNS) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.insertCell();
    updateColumnButtons();
  });
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
    updateRowButtons();
  }

  if (table.rows.length <= MIN_ROWS) {
    return 0;
  }
});

removeColumn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > 2) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });

    updateColumnButtons();
  }

  if (colCount <= MIN_COLUMNS) {
    return 0;
  }
});
