'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxCount = 10;
  const minCount = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0]?.cells.length || 0;

    appendRowBtn.disabled = rowCount >= maxCount;
    removeRowBtn.disabled = rowCount <= minCount;
    appendColumnBtn.disabled = colCount >= maxCount;
    removeColumnBtn.disabled = colCount <= minCount;
  }

  appendRowBtn.addEventListener('click', () => {
    if (table.rows.length >= maxCount) {
      return;
    }

    const newRow = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > minCount) {
      table.deleteRow(-1);
      updateButtons();
    }
  });

  appendColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length >= maxCount) {
      return;
    }

    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtons();
  });

  removeColumnBtn.addEventListener('click', () => {
    const colCount = table.rows[0]?.cells.length;

    if (colCount > minCount) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtons();
    }
  });

  updateButtons();
});
