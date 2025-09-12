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

  const table = document.querySelector('.field');

  if (!table) {
    return;
  }

  const tbody = table.querySelector('tbody') || table;

  function updateButtonsRows() {
    const rows = tbody.querySelectorAll('tr');
    const rowCount = rows.length;

    if (appendRow) {
      appendRow.disabled = rowCount >= MAX_ROWS;
    }

    if (removeRow) {
      removeRow.disabled = rowCount <= MIN_ROWS;
    }
  }

  function updateButtonsColumns() {
    const rows = tbody.querySelectorAll('tr');

    if (!rows.length) {
      if (appendColumn) {
        appendColumn.disabled = true;
      }

      if (removeColumn) {
        removeColumn.disabled = true;
      }

      return;
    }

    const columnCount = rows[0].cells.length;

    if (appendColumn) {
      appendColumn.disabled = columnCount >= MAX_COLUMNS;
    }

    if (removeColumn) {
      removeColumn.disabled = columnCount <= MIN_COLUMNS;
    }
  }

  appendRow?.addEventListener('click', () => {
    const rows = tbody.querySelectorAll('tr');

    if (rows.length < MAX_ROWS && rows.length) {
      const newRow = rows[rows.length - 1].cloneNode(true);

      tbody.appendChild(newRow);
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  removeRow?.addEventListener('click', () => {
    const rows = tbody.querySelectorAll('tr');

    if (rows.length > MIN_ROWS) {
      rows[rows.length - 1].remove();
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  appendColumn?.addEventListener('click', () => {
    const rows = tbody.querySelectorAll('tr');

    if (!rows.length) {
      return;
    }

    const columnCount = rows[0].cells.length;

    if (columnCount < MAX_COLUMNS) {
      rows.forEach((row) => {
        const lastCell = row.cells[row.cells.length - 1];
        const newCell = lastCell.cloneNode(true);

        row.appendChild(newCell);
      });

      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  removeColumn?.addEventListener('click', () => {
    const rows = tbody.querySelectorAll('tr');

    if (!rows.length) {
      return;
    }

    const columnCount = rows[0].cells.length;

    if (columnCount > MIN_COLUMNS) {
      rows.forEach((row) => row.cells[row.cells.length - 1].remove());
      updateButtonsRows();
      updateButtonsColumns();
    }
  });

  updateButtonsRows();
  updateButtonsColumns();
});
