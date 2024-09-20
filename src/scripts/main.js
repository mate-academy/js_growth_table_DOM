'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;
    appendColumnBtn.disabled = colCount >= 10;
    removeColumnBtn.disabled = colCount <= 2;
  }

  appendRowBtn.addEventListener('click', () => {
    if (table.rows.length < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < table.rows[0].cells.length; i++) {
        newRow.insertCell();
      }

      updateButtons();
    }
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > 2) {
      table.deleteRow(-1);
      updateButtons();
    }
  });

  appendColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length < 10) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }
      updateButtons();
    }
  });

  removeColumnBtn.addEventListener('click', function () {
    if (table.rows[0].cells.length > 2) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
      updateButtons();
    }
  });

  updateButtons();
});
