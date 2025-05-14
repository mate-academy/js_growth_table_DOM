'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const rows = table.rows;

  const minLength = 2;
  const maxLength = 10;

  const addRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const addColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  addRow.addEventListener('click', () => {
    if (rows.length < maxLength) {
      table.tBodies[0].append(rows[0].cloneNode(true));
    }

    if (rows.length === maxLength) {
      addRow.disabled = true;
    } else {
      removeRow.disabled = false;
    }
  });

  removeRow.addEventListener('click', () => {
    if (rows.length > minLength) {
      rows[0].remove();
    }

    if (rows.length === minLength) {
      removeRow.disabled = true;
    } else {
      addRow.disabled = false;
    }
  });

  addColumn.addEventListener('click', () => {
    const columns = rows[0].cells;

    if (columns.length < maxLength) {
      for (const tr of rows) {
        const newItem = tr.cells[0];

        tr.append(newItem.cloneNode(true));
      }
    }

    if (columns.length === maxLength) {
      addColumn.disabled = true;
    } else {
      removeColumn.disabled = false;
    }
  });

  removeColumn.addEventListener('click', () => {
    const columns = rows[0].cells;

    if (columns.length > minLength) {
      for (const tr of rows) {
        const cellItem = tr.cells[0];

        cellItem.remove();
      }
    }

    if (columns.length === minLength) {
      removeColumn.disabled = true;
    } else {
      addColumn.disabled = false;
    }
  });
});
