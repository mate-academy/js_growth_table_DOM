'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtonsState() {
  const rowsCount = table.rows.length;
  const columnsCount = rowsCount > 0 ? table.rows[0].cells.length : 0;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = rowsCount === 0 || columnsCount >= 10;
  removeColumn.disabled = rowsCount === 0 || columnsCount <= 2;
}

appendRow.addEventListener('click', () => {
  const rowsCount = table.rows.length;

  const columnsCount = rowsCount > 0 ? table.rows[0].cells.length : 2;

  if (rowsCount < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < columnsCount; i++) {
      newRow.insertCell();
    }
  }

  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  const rowsCount = table.rows.length;

  if (rowsCount > 2) {
    table.deleteRow(rowsCount - 1);
  }

  updateButtonsState();
});

appendColumn.addEventListener('click', () => {
  const rowsCount = table.rows.length;

  if (rowsCount === 0) {
    updateButtonsState();

    return;
  }

  const columnsCount = table.rows[0].cells.length;

  if (columnsCount < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }
  }

  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  const rowsCount = table.rows.length;

  if (rowsCount === 0) {
    updateButtonsState();

    return;
  }

  const columnsCount = table.rows[0].cells.length;

  if (columnsCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }

  updateButtonsState();
});

updateButtonsState();
