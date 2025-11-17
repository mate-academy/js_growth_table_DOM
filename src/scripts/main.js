'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');

  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const MIN = 2;
  const MAX = 10;

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= MAX;
    removeRowBtn.disabled = rowCount <= MIN;

    appendColBtn.disabled = colCount >= MAX;
    removeColBtn.disabled = colCount <= MIN;
  }

  appendRowBtn.addEventListener('click', () => {
    const colCount = table.rows[0].cells.length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    table.appendChild(newRow);
    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > MIN) {
      table.deleteRow(-1);
    }
    updateButtons();
  });

  appendColBtn.addEventListener('click', () => {
    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      table.rows[i].appendChild(document.createElement('td'));
    }

    updateButtons();
  });

  removeColBtn.addEventListener('click', () => {
    const colCount = table.rows[0].cells.length;

    if (colCount > MIN) {
      const rowCount = table.rows.length;

      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }
    }

    updateButtons();
  });

  updateButtons();
});
