'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttonAppendRow = document.querySelector('.append-row');
  const buttonRemoveRow = document.querySelector('.remove-row');
  const buttonAppendColumn = document.querySelector('.append-column');
  const buttonRemoveColumn = document.querySelector('.remove-column');

  const table = document.querySelector('.field');
  const tbody = table.querySelector('tbody');

  function updateButtons() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    buttonAppendRow.disabled = rowCount >= 10;
    buttonRemoveRow.disabled = rowCount <= 2;
    buttonAppendColumn.disabled = columnCount >= 10;
    buttonRemoveColumn.disabled = columnCount <= 2;
  }

  buttonAppendRow.addEventListener('click', () => {
    const newRow = document.createElement('tr');
    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < cellCount; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tbody.appendChild(newRow);

    updateButtons();
  });

  buttonRemoveRow.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > 2) {
      tbody.deleteRow(rowCount - 1);

      updateButtons();
    }
  });

  buttonAppendColumn.addEventListener('click', () => {
    const rowCount = table.rows.length;

    if (rowCount > 0) {
      for (let i = 0; i < rowCount; i++) {
        const newCellCol = document.createElement('td');

        table.rows[i].appendChild(newCellCol);
      }
    }

    updateButtons();
  });

  buttonRemoveColumn.addEventListener('click', () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(columnCount - 1);
      }
      updateButtons();
    }
  });
});
