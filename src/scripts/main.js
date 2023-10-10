'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const buttons = {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
  };

  let rowCount = table.rows.length;
  let columnCount = table.rows[0].cells.length;

  const updateButtonsStatus = () => {
    buttons.removeRow.disabled = rowCount <= 2;
    buttons.appendRow.disabled = rowCount >= 10;
    buttons.removeColumn.disabled = columnCount <= 2;
    buttons.appendColumn.disabled = columnCount >= 10;
  };

  const appendRow = () => {
    if (rowCount < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }
      rowCount++;
      updateButtonsStatus();
    }
  };

  const removeRow = () => {
    if (rowCount > 2) {
      table.deleteRow(-1);
      rowCount--;
      updateButtonsStatus();
    }
  };

  const appendColumn = () => {
    if (columnCount < 10) {
      for (const row of table.rows) {
        row.insertCell();
      }
      columnCount++;
      updateButtonsStatus();
    }
  };

  const removeColumn = () => {
    if (columnCount > 2) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      columnCount--;
      updateButtonsStatus();
    }
  };

  buttons.appendRow.addEventListener('click', appendRow);
  buttons.removeRow.addEventListener('click', removeRow);
  buttons.appendColumn.addEventListener('click', appendColumn);
  buttons.removeColumn.addEventListener('click', removeColumn);

  updateButtonsStatus();
});
