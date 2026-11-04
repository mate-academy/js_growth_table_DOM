'use strict';

const table = document.querySelector('table.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN_LIMIT = 2;
const MAX_LIMIT = 10;

const updateButtons = () => {
  const rowCount = table.rows.length;
  const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

  removeRowBtn.disabled = rowCount <= MIN_LIMIT;
  appendRowBtn.disabled = rowCount >= MAX_LIMIT;
  removeColBtn.disabled = colCount <= MIN_LIMIT;
  appendColBtn.disabled = colCount >= MAX_LIMIT;
};

updateButtons();

appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount >= MAX_LIMIT) {
    return;
  }

  const colCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount <= MIN_LIMIT) {
    return;
  }

  table.deleteRow(rowCount - 1);
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX_LIMIT) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }

  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount <= MIN_LIMIT) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];

    row.deleteCell(row.cells.length - 1);
  }

  updateButtons();
});
