'use strict';

const createRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const createColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtons() {
  const table = document.querySelector('table tbody');
  const countRow = table.querySelectorAll('tr').length;
  const countColumn = table.querySelector('tr').querySelectorAll('td').length;

  createRow.disabled = countRow >= 10;
  removeRow.disabled = countRow <= 2;
  createColumn.disabled = countColumn >= 10;
  removeColumn.disabled = countColumn <= 2;
}

createRow.addEventListener('click', () => {
  const table = document.querySelector('table tbody');

  if (table.querySelectorAll('tr').length < 10) {
    const lastRow = table.querySelector('tr:last-child');
    const row = document.createElement('tr');

    lastRow.querySelectorAll('td').forEach(() => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });

    table.appendChild(row);
    updateButtons();
  }
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('table tbody');

  if (table.querySelectorAll('tr').length > 2) {
    const lastRow = table.querySelector('tr:last-child');

    lastRow.remove();
    updateButtons();
  }
});

createColumn.addEventListener('click', () => {
  const table = document.querySelector('table tbody');

  table.querySelectorAll('tr').forEach((row) => {
    if (row.querySelectorAll('td').length < 10) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
      updateButtons();
    }
  });
});

removeColumn.addEventListener('click', () => {
  const table = document.querySelector('table tbody');

  table.querySelectorAll('tr').forEach((row) => {
    if (row.querySelectorAll('td').length > 2) {
      row.querySelector('td:last-child').remove();
      updateButtons();
    }
  });
});
