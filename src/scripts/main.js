'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const addRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const addColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');
  const table = document.querySelector('.field');

  function updateButtons() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].children.length;

    addRowBtn.disabled = rowCount >= 10;
    removeRowBtn.disabled = rowCount <= 2;
    addColBtn.disabled = colCount >= 10;
    removeColBtn.disabled = colCount <= 2;
  }

  addRowBtn.addEventListener('click', () => {
    const firstRow = table.rows[0];

    if (!firstRow || table.rows.length >= 10) {
      return;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < firstRow.children.length; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    table.append(newRow);
    updateButtons();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > 2) {
      table.rows[table.rows.length - 1].remove();
    }
    updateButtons();
  });

  addColBtn.addEventListener('click', () => {
    const firstRow = table.rows[0];

    if (!firstRow || firstRow.children.length >= 10) {
      return;
    }

    for (const row of table.rows) {
      const newCell = document.createElement('td');

      row.append(newCell);
    }

    updateButtons();
  });

  removeColBtn.addEventListener('click', () => {
    const firstRow = table.rows[0];

    if (!firstRow || firstRow.children.length <= 2) {
      return;
    }

    const lastColIndex = firstRow.children.length - 1;

    for (const row of table.rows) {
      row.removeChild(row.children[lastColIndex]);
    }

    updateButtons();
  });
  updateButtons();
});
