'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  function appendRow() {
    const rowCount = table.rows.length;

    if (rowCount < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }

      updateButtonStates();
    }
  }

  function removeRow() {
    const rowCount = table.rows.length;

    if (rowCount > 2) {
      table.deleteRow(rowCount - 1);

      updateButtonStates();
    }
  }

  function appendColumn() {
    const columnCount = table.rows[0].cells.length;

    if (columnCount < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }

      updateButtonStates();
    }
  }

  function removeColumn() {
    const columnCount = table.rows[0].cells.length;

    if (columnCount > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(columnCount - 1);
      }

      updateButtonStates();
    }
  }

  function updateButtonStates() {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    if (rowCount === 10) {
      appendRowBtn.disabled = true;
    } else if (rowCount === 2) {
      removeRowBtn.disabled = true;
    } else {
      appendRowBtn.disabled = false;
      removeRowBtn.disabled = false;
    }

    if (columnCount === 10) {
      appendColumnBtn.disabled = true;
    } else if (columnCount === 2) {
      removeColumnBtn.disabled = true;
    } else {
      appendColumnBtn.disabled = false;
      removeColumnBtn.disabled = false;
    }
  }

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtonStates();
});
