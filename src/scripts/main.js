'use strict';

const table = document.querySelector('table');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxCols = 10;
const minCols = 2;

const updateButtonsState = () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0] ? table.rows[0].cells.length : 0;

  appendRowBtn.disabled = rowCount >= maxRows;
  removeRowBtn.disabled = rowCount <= minRows;

  appendColumnBtn.disabled = colCount >= maxCols;
  removeColumnBtn.disabled = colCount <= minCols;
};

appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount < maxRows) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell(i);
    }
    updateButtonsState();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > minRows) {
    table.deleteRow(-1);
    updateButtonsState();
  }
});

appendColumnBtn.addEventListener('click', () => {
  const colCount = table.rows[0] ? table.rows[0].cells.length : 0;

  if (colCount < maxCols) {
    for (const row of table.rows) {
      row.insertCell(-1);
    }
    updateButtonsState();
  }
});

removeColumnBtn.addEventListener('click', () => {
  const colCount = table.rows[0] ? table.rows[0].cells.length : 0;

  if (colCount > minCols) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtonsState();
  }
});

updateButtonsState();
