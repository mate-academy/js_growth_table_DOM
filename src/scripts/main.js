'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxRows = 10;
  const minRows = 2;
  let rowCount = table.rows.length;

  const updateButtons = () => {
    appendRowBtn.disabled = rowCount >= maxRows;
    removeRowBtn.disabled = rowCount <= minRows;

    const maxColumns = 10;
    const minColumns = 2;
    const columnCount = rowCount > 0 ? table.rows[0].cells.length : 0;

    appendColumnBtn.disabled = columnCount >= maxColumns;
    removeColumnBtn.disabled = columnCount <= minColumns;
  };

  const appendRow = () => {
    if (rowCount < maxRows) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
      rowCount++;
      updateButtons();
    }
  };

  const removeRow = () => {
    if (rowCount > minRows) {
      table.deleteRow(-1);
      rowCount--;
      updateButtons();
    }
  };

  const appendColumn = () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount < maxRows) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      updateButtons();
    }
  };

  const removeColumn = () => {
    const columnCount = table.rows[0].cells.length;

    if (columnCount > minRows) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtons();
    }
  };

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtons();
});
