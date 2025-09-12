'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  const MIN_ROWS = 2;
  const MAX_ROWS = 10;
  const MIN_COLUMNS = 2;
  const MAX_COLUMNS = 10;

  const tables = document.querySelector('.field');
  const tbody = tables.querySelector('tbody') || tables;

  function updateButtonsRows() {
    const rowCount = tables.querySelectorAll('tr').length;

    appendRow.disabled = rowCount >= MAX_ROWS;
    removeRow.disabled = rowCount <= MIN_ROWS;
  }

  function updateButtonsColumns() {
    const columns = tables.querySelectorAll('tr');
    const columnCount = columns[0].cells.length;

    appendColumn.disabled = columnCount >= MAX_COLUMNS;
    removeColumn.disabled = columnCount <= MIN_COLUMNS;
  }

  appendRow.addEventListener('click', () => {
    const trTable = tables.querySelectorAll('tr');

    if (trTable.length < MAX_ROWS) {
      const newRow = trTable[trTable.length - 1].cloneNode(true);

      tbody.appendChild(newRow);
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  removeRow.addEventListener('click', () => {
    const trTable = tables.querySelectorAll('tr');

    if (trTable.length > MIN_ROWS) {
      trTable[trTable.length - 1].remove();
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  appendColumn.addEventListener('click', () => {
    const trTable = tables.querySelectorAll('tr');
    const columnCount = trTable[0].cells.length;

    if (columnCount < MAX_COLUMNS) {
      trTable.forEach((column) => {
        const lastCell = column.cells[column.cells.length - 1];
        const newCell = lastCell.cloneNode(true);

        column.appendChild(newCell);
      });
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  removeColumn.addEventListener('click', () => {
    const trTable = tables.querySelectorAll('tr');
    const columnCount = trTable[0].cells.length;

    if (columnCount > MIN_COLUMNS) {
      trTable.forEach((column) => {
        column.cells[column.cells.length - 1].remove();
      });
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  updateButtonsRows();
  updateButtonsColumns();
});
