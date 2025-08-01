'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const rows = table.querySelectorAll('tr');
  const columnCount = rows[0].children.length;

  if (rows.length >= 10) {
    appendRow.disabled = true;

    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  table.tBodies[0].appendChild(newRow);

  const newRows = table.querySelectorAll('tr');

  if (newRows.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  const rows = table.querySelectorAll('tr');

  rows[rows.length - 1].remove();

  const newRows = table.querySelectorAll('tr');

  if (newRows.length <= 2) {
    removeRow.disabled = true;

    return;
  }

  if (newRows.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', (e) => {
  const rows = table.querySelectorAll('tr');

  if (rows[0].children.length >= 10) {
    appendColumn.disabled = true;

    return;
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });

  const newRows = table.querySelectorAll('tr');

  if (newRows[0].children.length > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', (e) => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    row.lastChild.remove();
  });

  if (rows[0].children.length <= 2) {
    removeColumn.disabled = true;

    return;
  }

  const newRows = table.querySelectorAll('tr');

  if (newRows[0].children.length < 10) {
    appendColumn.disabled = false;
  }
});
