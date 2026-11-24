'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const colsCount = table.rows[0].cells.length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < colsCount; i++) {
      const td = document.createElement('td');
      newRow.append(td);
    }

    table.append(newRow);
  }
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > 2) {
    const lastRow = table.rows[table.rows.length - 1];
    lastRow.remove();
  }
});

appendColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    for (const row of table.rows) {
      const td = document.createElement('td');
      row.append(td);
    }
  }
});

removeColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].lastElementChild.remove();
    }
  }
});
