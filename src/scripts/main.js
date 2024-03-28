'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const maxRow = 10;
  const minRow = 2;
  let rowCount = table.rows.length;

  const updateButton = () => {
    appendRowButton.disabled = rowCount >= maxRow;
    removeRowButton.disabled = rowCount <= minRow;

    const maxColumn = 10;
    const minColumn = 2;
    const columnCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    appendColumnButton.disabled = columnCount >= maxColumn;
    removeColumnButton.disabled = columnCount <= minColumn;
  };

  const appendRow = () => {
    if (rowCount < maxRow) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
      rowCount++;
      updateButton();
    }
  };

  const removeRow = () => {
    if (rowCount > minRow) {
      table.deleteRow(-1);
      rowCount--;
      updateButton();
    }
  };

  const appendColumn = () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount < maxRow) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      updateButton();
    }
  };

  const removeColumn = () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount > minRow) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButton();
    }
  };

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButton();
});
