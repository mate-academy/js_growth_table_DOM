'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const maxCount = 10;
  const minCount = 2;
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  const updateButtons = () => {
    const rows = table.rows.length;
    const columns = table.rows[0].cells.length;

    appendRow.disabled = rows >= maxCount;
    removeRow.disabled = rows <= minCount;
    appendColumn.disabled = columns >= maxCount;
    removeColumn.disabled = columns <= minCount;
  };

  const addRow = () => {
    const rows = table.rows.length;

    if (rows < maxCount) {
      const columns = table.rows[0].cells.length;
      const newRow = table.insertRow();

      for (let i = 0; i < columns; i++) {
        newRow.insertCell();
      }

      updateButtons();
    }
  };

  const remRow = () => {
    if (table.rows.length > minCount) {
      table.deleteRow(-1);

      updateButtons();
    }
  };

  const addColumn = () => {
    const columns = table.rows[0].cells.length;

    if (columns < maxCount) {
      const rows = table.rows;

      for (const row of rows) {
        row.insertCell();
      }

      updateButtons();
    }
  };

  const remColumn = () => {
    const rows = table.rows;

    if (rows[0].cells.length > minCount) {
      for (const row of rows) {
        row.deleteCell(-1);
      }

      updateButtons();
    }
  };

  appendRow.addEventListener('click', addRow);
  removeRow.addEventListener('click', remRow);
  appendColumn.addEventListener('click', addColumn);
  removeColumn.addEventListener('click', remColumn);
});
