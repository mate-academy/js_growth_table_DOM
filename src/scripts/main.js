'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;
    appendColumnBtn.disabled = columnCount >= 10;
    removeColumnBtn.disabled = columnCount <= 2;
  }

  function appendRow() {
    if (table.rows.length < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }
      updateButtonStates();
    }
  }

  function removeRow() {
    if (table.rows.length > 2) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  }

  function appendColumn() {
    if (table.rows[0].cells.length < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }
      updateButtonStates();
    }
  }

  function removeColumn() {
    if (table.rows[0].cells.length > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtonStates();
    }
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtonStates();
});
