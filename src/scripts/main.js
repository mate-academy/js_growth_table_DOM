'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX = 10;
const MIN = 2;

function getRowCount() {
  return table.rows.length;
}

function getColumnCount() {
  return table.rows[0].cells.length;
}

function updateButtons() {
  const rowCount = getRowCount();
  const colCount = getColumnCount();

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColumnBtn.disabled = colCount >= MAX;
  removeColumnBtn.disabled = colCount <= MIN;
}

if (appendColumnBtn && appendRowBtn && removeColumnBtn && removeRowBtn) {
  appendRowBtn.addEventListener('click', () => {
    const rowCount = getRowCount();
    const colCount = getColumnCount();

    if (rowCount < MAX) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
      updateButtons();
    }
  });

  removeRowBtn.addEventListener('click', () => {
    const rowCount = getRowCount();

    if (rowCount > MIN) {
      table.deleteRow(rowCount - 1);
      updateButtons();
    }
  });

  appendColumnBtn.addEventListener('click', () => {
    const colCount = getColumnCount();

    if (colCount < MAX) {
      for (const row of table.rows) {
        row.insertCell();
      }
      updateButtons();
    }
  });

  removeColumnBtn.addEventListener('click', () => {
    const colCount = getColumnCount();

    if (colCount > MIN) {
      for (const row of table.rows) {
        row.deleteCell(colCount - 1);
      }
      updateButtons();
    }
  });

  updateButtons();
}


