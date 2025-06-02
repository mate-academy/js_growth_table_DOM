'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  if (!table || !appendRow || !removeRow || !appendColumn || !removeColumn) {
    return;
  }

  appendRow.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    const columnCount = table.rows[0]?.cells.length || 1;

    for (let i = 0; i < columnCount; i++) {
      const newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
    updateButtons();
  });

  removeRow.addEventListener('click', () => {
    if (table.rows.length > 1) {
      table.deleteRow(-1);
    }

    updateButtons();
  });

  appendColumn.addEventListener('click', () => {
    for (const row of table.rows) {
      const newCell = document.createElement('td');
      row.appendChild(newCell);
    }

    updateButtons();
  });

  removeColumn.addEventListener('click', () => {
    const columnCount = table.rows[0]?.cells.length || 0;

    if (columnCount > 1) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }

    updateButtons();
  });

  function updateButtons() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0]?.cells.length || 0;

    appendRow.disabled = rowCount >= 10;
    removeRow.disabled = rowCount <= 2;

    appendColumn.disabled = columnCount >= 10;
    removeColumn.disabled = columnCount <= 2;
  }

  updateButtons();
});
