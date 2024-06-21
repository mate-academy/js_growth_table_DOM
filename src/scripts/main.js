'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const maxCount = 10;
  const minCount = 2;
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= maxCount;
    removeRowButton.disabled = rowCount <= minCount;
    appendColumnButton.disabled = colCount >= maxCount;
    removeColumnButton.disabled = colCount <= minCount;
  }

  function appendRow() {
    if (table.rows.length >= maxCount) {
      return;
    }

    const newRow = table.insertRow();
    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < cellCount; i++) {
      newRow.insertCell();
    }

    updateButtons();
  }

  function removeRow() {
    if (table.rows.length <= minCount) {
      return;
    }

    table.deleteRow(-1);
    updateButtons();
  }

  function appendColumn() {
    if (table.rows[0].cells.length >= maxCount) {
      return;
    }

    [...table.rows].forEach((row) => {
      row.insertCell();
    });

    updateButtons();
  }

  function removeColumn() {
    if (table.rows[0].cells.length <= minCount) {
      return;
    }

    [...table.rows].forEach((row) => {
      row.deleteCell(-1);
    });

    updateButtons();
  }

  updateButtons();
});
