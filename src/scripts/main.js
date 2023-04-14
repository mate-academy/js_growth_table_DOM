'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const remoweRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  if(table.rows.length === 10) {
    return;
  }
  const rowToClone = table.rows[0];
  const newRow = rowToClone.cloneNode(true);
  table.appendChild(newRow);
});

remoweRow.addEventListener('click', () => {
  if(table.rows.length === 2) {
    return;
  }
  table.deleteRow(0);
});

addColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length === 10) {
    return;
  }
    for (let i = 0; i < table.rows.length; i++) {
      const cellToClone = table.rows[i].cells[0];
      const newCell = cellToClone.cloneNode(true);
      table.rows[i].appendChild(newCell);
    }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length === 2) {
    return;
  };

  for (let i = 0; i < table.rows.length; i++) {
    const lastCellIndex = table.rows[i].cells.length - 1;
    table.rows[i].deleteCell(0);
  }
});
