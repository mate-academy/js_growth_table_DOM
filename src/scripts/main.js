'use strict';

const tableArea = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const addColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', (e) => {
  const newRow = document.createElement('tr');
  const cellRowCount = tableArea.rows[0].cells.length;

  if (tableArea.rows.length >= 10) {
    addRow.disabled = true;

    return false;
  } else {
    for (let i = 0; i < cellRowCount; i++) {
      const newRowCell = document.createElement('td');

      newRow.appendChild(newRowCell);
    }

    tableArea.appendChild(newRow);
  }

  if (tableArea.rows.length >= 10) {
    addRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', (e) => {
  if (tableArea.rows.length <= 2) {
    removeRow.disabled = true;

    return false;
  } else {
    tableArea.rows[tableArea.rows.length - 1].remove();
  }

  if (tableArea.rows.length <= 2) {
    removeRow.disabled = true;
  }
  addRow.disabled = false;
});

addColumn.addEventListener('click', (e) => {
  if (tableArea.rows[0].cells.length >= 10) {
    addColumn.disabled = true;

    return false;
  } else {
    for (let i = 0; i < tableArea.rows.length; i++) {
      const newColumnCell = document.createElement('td');

      tableArea.rows[i].appendChild(newColumnCell);
    }
  }

  if (tableArea.rows[0].cells.length >= 10) {
    addColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', (e) => {
  if (tableArea.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;

    return false;
  } else {
    for (let i = 0; i < tableArea.rows.length; i++) {
      tableArea.rows[i].cells[tableArea.rows[i].cells.length - 1].remove();
    }
  }

  if (tableArea.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  }

  addColumn.disabled = false;
});
