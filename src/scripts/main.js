'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_ROWS;
  removeRowBtn.disabled = rowCount <= MIN_ROWS;
  appendColumnBtn.disabled = columnCount >= MAX_COLUMNS;
  removeColumnBtn.disabled = columnCount <= MIN_COLUMNS;
}

appendRowBtn.addEventListener('click', () => {
  const newRow = table.insertRow();
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell().style.background = '#0093eb';
  }

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > MIN_ROWS) {
    table.deleteRow(-1);
  }

  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.insertCell().style.background = '#0093eb';
  }

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length > MIN_COLUMNS) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }

  updateButtons();
});

updateButtons();
