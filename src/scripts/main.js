'use strict';

const table = document.querySelector('.field');
const MAX = 10;
const MIN = 2;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const rowsCount = (tableItem) => tableItem.rows.length;

const colsCount = (tableItem) => tableItem.rows[0]?.cells.length || 0;

function syncButtons() {
  appendRowBtn.disabled = rowsCount(table) >= MAX;
  removeRowBtn.disabled = rowsCount(table) <= MIN;

  appendColumnBtn.disabled = colsCount(table) >= MAX;
  removeColumnBtn.disabled = colsCount(table) <= MIN;
}

if (
  table &&
  appendRowBtn &&
  removeRowBtn &&
  appendColumnBtn &&
  removeColumnBtn
) {
  appendRowBtn.addEventListener('click', () => {
    if (rowsCount(table) >= MAX) {
      return;
    }

    const cols = colsCount(table) || MIN;

    const row = table.insertRow();

    for (let i = 0; i < cols; i++) {
      const cell = row.insertCell();

      cell.textContent = '';
    }

    syncButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    if (rowsCount(table) <= MIN) {
      return;
    }

    table.deleteRow(rowsCount(table) - 1);

    syncButtons();
  });

  appendColumnBtn.addEventListener('click', () => {
    if (colsCount(table) >= MAX) {
      return;
    }

    const rows = table.rows;

    for (const row of rows) {
      const cell = row.insertCell();

      cell.textContent = '';
    }

    syncButtons();
  });

  removeColumnBtn.addEventListener('click', () => {
    if (colsCount(table) <= MIN) {
      return;
    }

    const rows = table.rows;
    const lastIndex = colsCount(table) - 1;

    for (const row of rows) {
      row.deleteCell(lastIndex);
    }

    syncButtons();
  });
  syncButtons();
}
