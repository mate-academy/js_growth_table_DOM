'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.growth-table');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const maxCount = 10;
  const minCount = 2;

  const updateButtons = () => {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    appendRowButton.disabled = rowCount >= maxCount;
    removeRowButton.disabled = rowCount <= minCount;
    appendColumnButton.disabled = colCount >= maxCount;
    removeColumnButton.disabled = colCount <= minCount;
  };

  const appendRow = () => {
    const newRow = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      const newCell = newRow.insertCell();

      newCell.textContent = 'New cell';
    }
    updateButtons();
  };

  const removeRow = () => {
    if (table.rows.length > minCount) {
      table.deleteRow(-1);
      updateButtons();
    }
  };

  const appendColumn = () => {
    Array.from(table.rows).forEach((row) => {
      const newCell = row.insertCell();

      newCell.textContent = 'New cell';
    });
    updateButtons();
  };

  const removeColumn = () => {
    if (table.rows[0].cells.length > minCount) {
      Array.from(table.rows).forEach((row) => row.deleteCell(-1));
      updateButtons();
    }
  };

  appendRowButton.addEventListener('click', appendRow);
  removeRowButton.addEventListener('click', removeRow);
  appendColumnButton.addEventListener('click', appendColumn);
  removeColumnButton.addEventListener('click', removeColumn);

  updateButtons(); // Initial state update
});
