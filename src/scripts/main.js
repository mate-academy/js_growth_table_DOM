'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MIN_LIMIT = 2;
const MAX_LIMIT = 10;

if (table) {
  const getTableBody = () => table.tBodies[0] || table;

  const updateButtonState = () => {
    const rowCount = table.rows.length;
    const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    appendRowBtn.disabled = rowCount >= MAX_LIMIT;
    removeRowBtn.disabled = rowCount <= MIN_LIMIT;

    appendColBtn.disabled = colCount >= MAX_LIMIT;
    removeColBtn.disabled = colCount <= MIN_LIMIT;
  };

  appendRowBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;
    const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    if (rowCount < MAX_LIMIT) {
      const newRow = document.createElement('tr');

      for (let i = 0; i < colCount; i++) {
        const newCell = document.createElement('td');

        newRow.append(newCell);
      }

      getTableBody().append(newRow);
      updateButtonState();
    }
  });

  removeRowBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > MIN_LIMIT) {
      const lastRow = table.rows[rowCount - 1];

      if (lastRow) {
        lastRow.remove();
      }

      // table.lastElementChild.remove();
      updateButtonState();
    }
  });

  appendColBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;
    const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    if (colCount < MAX_LIMIT) {
      Array.from(table.rows).forEach((row) => {
        const newCell = document.createElement('td');

        row.append(newCell);
      });

      updateButtonState();
    }
  });

  removeColBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;
    const colCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    if (colCount > MIN_LIMIT) {
      Array.from(table.rows).forEach((row) => {
        if (row.lastElementChild) {
          row.lastElementChild.remove();
        }
      });

      updateButtonState();
    }
  });

  updateButtonState();
}
