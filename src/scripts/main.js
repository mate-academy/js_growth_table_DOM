'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const maxSize = 10;
  const minSize = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= maxSize;
    removeRowBtn.disabled = rowCount <= minSize;
    appendColumnBtn.disabled = colCount >= maxSize;
    removeColumnBtn.disabled = colCount <= minSize;
  }

  appendRowBtn.addEventListener('click', () => {
    if (table.rows.length >= maxSize) {
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
    if (table.rows.length <= minSize) {
      return;
    }
    table.deleteRow(-1);
    updateButtons();
  });

  appendColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length >= maxSize) {
      return;
    }

    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtons();
  });

  removeColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length <= minSize) {
      return;
    }

    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtons();
  });

  updateButtons();
});
