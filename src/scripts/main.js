'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  const updateButtons = () => {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;
    appendColumnBtn.disabled = colCount >= 10;
    removeColumnBtn.disabled = colCount <= 2;
  };

  const appendRow = () => {
    const colCount = table.rows[0].cells.length;
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      const newCell = newRow.insertCell();

      newCell.className = 'cell';
    }

    updateButtons();
  };

  const removeRow = () => {
    if (table.rows.length > 2) {
      table.deleteRow(-1);
      updateButtons();
    }
  };

  const appendColumn = () => {
    const rowCount = table.rows.length;

    for (let i = 0; i < rowCount; i++) {
      const newCell = table.rows[i].insertCell();

      newCell.className = 'cell';
    }

    updateButtons();
  };

  const removeColumn = () => {
    if (table.rows[0].cells.length > 2) {
      const rowCount = table.rows.length;

      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }

      updateButtons();
    }
  };

  appendRowBtn.addEventListener('click', appendRow);
  removeRowBtn.addEventListener('click', removeRow);
  appendColumnBtn.addEventListener('click', appendColumn);
  removeColumnBtn.addEventListener('click', removeColumn);

  updateButtons();
});
