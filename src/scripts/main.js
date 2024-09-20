'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const max = 10;
  const min = 2;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= max;
    removeRowBtn.disabled = rowCount <= min;
    appendColumnBtn.disabled = colCount >= max;
    removeColumnBtn.disabled = colCount <= min;
  }

  appendRowBtn.addEventListener('click', () => {
    if (table.rows.length < max) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }

      updateButtons();
    }
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > min) {
      table.deleteRow(-1);
      updateButtons();
    }
  });

  appendColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length < max) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }
      updateButtons();
    }
  });

  removeColumnBtn.addEventListener('click', function () {
    if (table.rows[0].cells.length > min) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtons();
    }
  });

  updateButtons();
});
