'use strict';

// write code here
const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

// Допоміжні функції винесені у "корінь програми"
function getRowCount(tbl) {
  return tbl && tbl.rows ? tbl.rows.length : 0;
}

function getColCount(tbl) {
  if (!tbl || !tbl.rows || tbl.rows.length === 0) {
    return 0;
  }

  const firstRow = tbl.rows[0];

  return firstRow && firstRow.cells ? firstRow.cells.length : 0;
}

function updateButtons(tbl, addRow, remRow, addCol, remCol) {
  const rowCount = getRowCount(tbl);
  const colCount = getColCount(tbl);

  addRow.disabled = rowCount >= MAX || colCount === 0;
  remRow.disabled = rowCount <= MIN;
  addCol.disabled = colCount >= MAX;
  remCol.disabled = colCount <= MIN;
}

// Основна ініціалізація
if (table && appendRowBtn && removeRowBtn && appendColBtn && removeColBtn) {
  appendRowBtn.addEventListener('click', () => {
    const rowCount = getRowCount(table);
    const colCount = getColCount(table);

    if (rowCount < MAX && colCount > 0) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
    }

    updateButtons(
      table,
      appendRowBtn,
      removeRowBtn,
      appendColBtn,
      removeColBtn,
    );
  });

  removeRowBtn.addEventListener('click', () => {
    const rowCount = getRowCount(table);

    if (rowCount > MIN) {
      table.deleteRow(rowCount - 1);
    }

    updateButtons(
      table,
      appendRowBtn,
      removeRowBtn,
      appendColBtn,
      removeColBtn,
    );
  });

  appendColBtn.addEventListener('click', () => {
    const colCount = getColCount(table);
    const rowCount = getRowCount(table);

    if (colCount < MAX && rowCount > 0) {
      for (let i = 0; i < rowCount; i++) {
        const row = table.rows[i];

        if (row) {
          row.insertCell();
        }
      }
    }

    updateButtons(
      table,
      appendRowBtn,
      removeRowBtn,
      appendColBtn,
      removeColBtn,
    );
  });

  removeColBtn.addEventListener('click', () => {
    const colCount = getColCount(table);
    const rowCount = getRowCount(table);

    if (colCount > MIN && rowCount > 0) {
      for (let i = 0; i < rowCount; i++) {
        const row = table.rows[i];

        if (row && row.cells && row.cells.length > 0) {
          row.deleteCell(row.cells.length - 1);
        }
      }
    }

    updateButtons(
      table,
      appendRowBtn,
      removeRowBtn,
      appendColBtn,
      removeColBtn,
    );
  });

  // Початкова ініціалізація стану кнопок
  updateButtons(table, appendRowBtn, removeRowBtn, appendColBtn, removeColBtn);
} else {
  // console.warn ('Growth table script: required DOM elements missing
  // — initialization skipped.');
}
