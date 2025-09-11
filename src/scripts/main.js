'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const addRowBtn = document.querySelector('.append-row');     
  const removeRowBtn = document.querySelector('.remove-row'); 
  const addColBtn = document.querySelector('.append-column');    
  const removeColBtn = document.querySelector('.remove-column')
  const table = document.querySelector('.field');

  addRowBtn.addEventListener('click', () => {
    const firstRow = table.rows[0];
    if (!firstRow || table.rows.length >= 10) return;

    const newRow = document.createElement('tr');
    for (let i = 0; i < firstRow.children.length; i++) {
      const newCell = document.createElement('td');
      newRow.append(newCell);
    }
    table.append(newRow);
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > 2) {
      table.rows[table.rows.length - 1].remove();
    }
  });

  addColBtn.addEventListener('click', () => {
    const firstRow = table.rows[0];
    if (!firstRow || firstRow.children.length >= 10) return; // максимум 10 колонок

    for (let row of table.rows) {
      const newCell = document.createElement('td');
      row.append(newCell);
    }
  });

  removeColBtn.addEventListener('click', () => {
    const firstRow = table.rows[0];
    if (!firstRow || firstRow.children.length <= 2) return; // минимум 2 колонки

    const lastColIndex = firstRow.children.length - 1;
    for (let row of table.rows) {
      row.removeChild(row.children[lastColIndex]);
    }
  });
});
