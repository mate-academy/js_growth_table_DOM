'use strict';

const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MAX_COLUMN = 10;
const MIN_ROWS = 2;
const MIN_COLUMN = 2;

function updateButtons() {
  const newRows = field.rows.length;
  const columnCount = field.rows[0] ? field.rows[0].cells.length : 0;

  appendRow.disabled = newRows >= MAX_ROWS;
  removeRow.disabled = newRows <= MIN_ROWS;
  appendColumn.disabled = columnCount >= MAX_COLUMN;
  removeColumn.disabled = columnCount <= MIN_COLUMN;
}

appendRow.addEventListener('click', () => {
  if (field.rows.length < MAX_ROWS) {
    const columnCount = field.rows[0] ? field.rows[0].cells.length : MIN_COLUMN;
    const newRow = field.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  field.deleteRow(-1);

  updateButtons();
});

appendColumn.addEventListener('click', () => {
  Array.from(field.rows).forEach((row, index) => {
    row.insertCell();
  });

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  Array.from(field.rows).forEach((row) => {
    row.deleteCell(-1);
  });

  updateButtons();
});
