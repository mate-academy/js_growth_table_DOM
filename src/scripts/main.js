'use strict';

const table = document.querySelector('.field');
const tbody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  tbody.append(newRow);

  if (table.rows.length >= 10) {
    appendRow.setAttribute('disabled', true);
  } else {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  const lastTr = table.rows[table.rows.length - 1];

  lastTr.remove();

  if (table.rows.length <= 2) {
    removeRow.setAttribute('disabled', true);
  } else {
    appendRow.removeAttribute('disabled');
  }
});

appendColumn.addEventListener('click', () => {
  Array.from(tbody.rows).forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);

    if (row.cells.length >= 10) {
      appendColumn.setAttribute('disabled', true);
    } else {
      removeColumn.removeAttribute('disabled');
    }
  });
});

removeColumn.addEventListener('click', () => {
  Array.from(table.rows).forEach((row) => {
    const lastTd = row.cells[row.cells.length - 1];

    lastTd.remove();

    if (row.cells.length <= 2) {
      removeColumn.setAttribute('disabled', true);
    } else {
      appendColumn.removeAttribute('disabled');
    }
  });
});
