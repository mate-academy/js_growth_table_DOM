'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const MAX_COUNT = 10;
  const MIN_COUNT = 2;

  const updateButtonStates = () => {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= MAX_COUNT;
    removeRowBtn.disabled = rowCount <= MIN_COUNT;

    appendColumnBtn.disabled = colCount >= MAX_COUNT;
    removeColumnBtn.disabled = colCount <= MIN_COUNT;
  };

  const appendRow = () => {
    const newRow = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }

    updateButtonStates();
  };

  const removeRow = () => {
    if (table.rows.length > MIN_COUNT) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  };

  const appendColumn = () => {
    if (table.rows[0].cells.length < MAX_COUNT) {
      for (const row of table.rows) {
        row.insertCell();
      }
      updateButtonStates();
    }
  };

  const removeColumn = () => {
    if (table.rows[0].cells.length > MIN_COUNT) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtonStates();
    }
  };

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtonStates();
});
