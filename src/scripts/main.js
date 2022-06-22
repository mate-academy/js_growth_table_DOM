'use strict';

const table = document.querySelector('table.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

addRowBtn.addEventListener('click', () => {
  const rows = [...table.rows];
  const newRow = rows[0].cloneNode(true);

  rows.push(newRow);
  table.append(...rows);
  addRowBtn.disabled = rows.length === 10;
  removeRowBtn.disabled = false;
});

removeRowBtn.addEventListener('click', () => {
  table.deleteRow(0);
  addRowBtn.disabled = false;
  removeRowBtn.disabled = table.rows.length === 2;
});

addColBtn.addEventListener('click', () => {
  const rows = [...table.rows];

  rows.forEach(row => {
    const cells = [...row.cells];
    const newCell = cells[0].cloneNode(true);

    row.append(...cells, newCell);
  });

  addColBtn.disabled = rows[0].cells.length === 10;
  removeColBtn.disabled = false;
});

removeColBtn.addEventListener('click', () => {
  const rows = [...table.rows];

  rows.forEach(row => {
    row.deleteCell(0);
  });

  addColBtn.disabled = false;
  removeColBtn.disabled = rows[0].cells.length === 2;
});
