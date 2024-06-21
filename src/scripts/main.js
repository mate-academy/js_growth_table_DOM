'use strict';

const table = document.querySelector('.field').tBodies[0];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const MAX_ROWS_AND_COLS = 10;
const MIN_ROWS_AND_COLS = 2;

function updateButtonsState() {
  const rows = table.rows;
  const cols = rows[0].cells.length;

  appendRow.disabled = rows.length >= MAX_ROWS_AND_COLS;
  removeRow.disabled = rows.length <= MIN_ROWS_AND_COLS;
  appendCol.disabled = cols >= MAX_ROWS_AND_COLS;
  removeCol.disabled = cols <= MIN_ROWS_AND_COLS;
}

appendRow.addEventListener('click', () => {
  const rows = table.rows;
  const newRow = document.createElement('tr');

  for (let i = 0; i < rows[0].cells.length; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  table.appendChild(newRow);

  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  table.removeChild(table.lastChild);

  updateButtonsState();
});

appendCol.addEventListener('click', () => {
  const rows = table.rows;

  [...rows].forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  updateButtonsState();
});

removeCol.addEventListener('click', () => {
  const rows = table.rows;

  [...rows].forEach((row) => {
    row.removeChild(row.lastChild);
  });

  updateButtonsState();
});
