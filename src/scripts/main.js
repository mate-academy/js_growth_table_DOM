'use strict';

// write code here
const table = document.querySelector('table');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColBtn.disabled = colCount >= MAX;
  removeColBtn.disabled = colCount <= MIN;
}

appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount >= MAX) {
    return;
  }

  const colCount = rowCount > 0 ? table.rows[0].cells.length : MIN;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > MIN) {
    table.deleteRow(-1);
  }
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  if (table.rows.length === 0) {
    return;
  }

  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  if (table.rows.length === 0) {
    return;
  }

  if (table.rows[0].cells.length > MIN) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }
  updateButtons();
});

updateButtons();
