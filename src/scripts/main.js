'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const maxCount = 10;
  const minCount = 2;

  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const updateButtonState = () => {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= maxCount;
    removeRowBtn.disabled = rowCount <= minCount;
    appendColumnBtn.disabled = columnCount >= maxCount;
    removeColumnBtn.disabled = columnCount <= minCount;
  };

  appendRowBtn.addEventListener('click', () => {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = newRow.insertCell();

      newCell.style.width = '50px';
      newCell.style.height = '50px';
      newCell.style.background = '#0093eb';
      newCell.style.borderRadius = '10px';
      newCell.style.padding = '0';
    }

    updateButtonState();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > minCount) {
      table.deleteRow(-1);
    }
    updateButtonState();
  });

  appendColumnBtn.addEventListener('click', () => {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = table.rows[i].insertCell();

      newCell.style.width = '50px';
      newCell.style.height = '50px';
      newCell.style.background = '#0093eb';
      newCell.style.borderRadius = '10px';
      newCell.style.padding = '0';
    }
    updateButtonState();
  });

  removeColumnBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length > minCount) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
      }
    }
    updateButtonState();
  });

  updateButtonState();
});
