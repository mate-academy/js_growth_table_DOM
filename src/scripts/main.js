'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row.button');
const removeRow = document.querySelector('.remove-row.button');
const appendColumn = document.querySelector('.append-column.button');
const removeColumn = document.querySelector('.remove-column.button');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLS = 10;
const MIN_COLS = 2;

function updateButtonStates() {
  appendRow.disabled = table.rows.length >= MAX_ROWS;
  removeRow.disabled = table.rows.length <= MIN_ROWS;

  appendColumn.disabled = table.rows[0].cells.length >= MAX_COLS;
  removeColumn.disabled = table.rows[0].cells.length <= MIN_COLS;
}

appendRow.addEventListener('click', (e) => {
  if (table.rows.length < MAX_ROWS) {
    // table.insertRow().innerHTML = '<td/>'.repeat(table.rows[0].cells.length);
    const row = table.insertRow();
    const cols = table.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
      row.insertCell();
    }
    updateButtonStates();
  }
});

removeRow.addEventListener('click', (e) => {
  if (table.rows.length > MIN_ROWS) {
    table.deleteRow(-1);
    updateButtonStates();
  }
});

appendColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length < MAX_COLS) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }
    updateButtonStates();
  }
});

removeColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length > MIN_COLS) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtonStates();
  }
});
