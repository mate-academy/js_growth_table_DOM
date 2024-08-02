'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  updateButton();

  function updateButton() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= maxRows;
    removeRowBtn.disabled = rowCount <= minRows;
    appendColumnBtn.disabled = columnCount >= maxColumns;
    removeColumnBtn.disabled = columnCount <= minColumns;
  }

  function appendRow() {
    if (table.rows.length < 10) {
      const newRow = table.insertRow();
      const elmentCount = table.rows[0].cells.length;

      for (let i = 0; i < elmentCount; i++) {
        newRow.insertCell();
      }
      updateButton();
    }
  }

  function removeRow() {
    table.deleteRow(-1);

    updateButton();
  }

  function appendColumn() {
    if (table.rows[0].cells.length < 10) {
      const rowCount = table.rows.length;

      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
    }

    updateButton();
  }

  function removeColumn() {
    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }

    updateButton();
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);
});
