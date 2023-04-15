'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function control() {
  if (table.rows.length === 10) {
    addRow.disabled = true;
  } else {
    addRow.disabled = false;
  }
  
  if (table.rows.length === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
  
  if (table.rows[0].cells.length === 10) {
    addColumn.disabled = true;
  } else {
    addColumn.disabled = false;
  }
  
  if (table.rows[0].cells.length === 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
}


addRow.addEventListener('click', () => {
  const rowToClone = table.rows[0];
  const newRow = rowToClone.cloneNode(true);

  table.appendChild(newRow);
  control();
});

removeRow.addEventListener('click', () => {
  table.deleteRow(0);
  control();
})

addColumn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    const cellToClone = table.rows[i].cells[0];
    const newCell = cellToClone.cloneNode(true);

    table.rows[i].appendChild(newCell);
    control();
  }
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(0);
    control();
  }
});
