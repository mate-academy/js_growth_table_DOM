'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const MAX_COUNT = 10;
  const MIN_COUNT = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    appendColumnBtn.disabled = colCount >= MAX_COUNT;
    removeColumnBtn.disabled = colCount <= MIN_COUNT;
    appendRowBtn.disabled = rowCount >= MAX_COUNT;
    removeRowBtn.disabled = rowCount <= MIN_COUNT;
  }

  appendRowBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    if (rowCount < MAX_COUNT) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
    }

    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > MIN_COUNT) {
      table.deleteRow(rowCount - 1);
    }

    updateButtons();
  });

  appendColumnBtn.addEventListener('click', () => {
    const colCount = table.rows[0]?.cells.length || 0;

    if (colCount < MAX_COUNT) {
      Array.from(table.rows).forEach((row) => {
        row.insertCell();
      });
    }

    updateButtons();
  });

  removeColumnBtn.addEventListener('click', () => {
    const colCount = table.rows[0]?.cells.length || 0;

    if (colCount > MIN_COUNT) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(colCount - 1);
      });
    }

    updateButtons();
  });

  updateButtons();
});
