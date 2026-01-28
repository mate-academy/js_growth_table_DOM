'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let tableRows = table.querySelectorAll('tr');
let columns = tableRows[0].cells.length;

appendRow.disabled = tableRows.length >= 10;
removeRow.disabled = tableRows.length <= 2;

appendColumn.disabled = columns >= 10;
removeColumn.disabled = columns <= 2;

appendRow.addEventListener('click', () => {
  tableRows = table.querySelectorAll('tr');
  columns = tableRows[0].cells.length;

  if (tableRows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < columns; i++) {
      const cell = document.createElement('td');

      newRow.append(cell);
    }

    table.append(newRow);
  }

  tableRows = table.querySelectorAll('tr');

  appendRow.disabled = tableRows.length >= 10;
  removeRow.disabled = tableRows.length <= 2;
});

removeRow.addEventListener('click', () => {
  tableRows = table.querySelectorAll('tr');

  if (tableRows.length > 2) {
    tableRows[tableRows.length - 1].remove();
  }

  tableRows = table.querySelectorAll('tr');

  appendRow.disabled = tableRows.length >= 10;
  removeRow.disabled = tableRows.length <= 2;
});

appendColumn.addEventListener('click', () => {
  tableRows = table.querySelectorAll('tr');

  if (tableRows[0].cells.length < 10) {
    for (const row of tableRows) {
        const newCell = document.createElement('td');
        row.append(newCell);
    }
  }

  columns = tableRows[0].cells.length;

  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
});

removeColumn.addEventListener('click', () => {
  tableRows = table.querySelectorAll('tr');

  if (tableRows[0].cells.length > 2) {
    for (const row of tableRows) {
        row.cells[row.cells.length - 1].remove();
    }
  }

  columns = tableRows[0].cells.length;

  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
});
