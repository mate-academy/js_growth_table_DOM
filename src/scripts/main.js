'use strict';

const table = document.querySelector('table');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function updateButtons() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  addRow.disabled = rows >= MAX;
  removeRow.disabled = rows <= MIN;

  addColumn.disabled = columns >= MAX;
  removeColumn.disabled = columns <= MIN;
}

addRow.addEventListener('click', (e) => {
  if (table.rows.length >= MAX) {
    return;
  }

  const row = document.createElement('tr');
  const columns = table.rows[0].cells.length;

  for (let i = 0; i < columns; i++) {
    const cell = document.createElement('td');

    row.append(cell);
  }

  table.tBodies[0].append(row);
  updateButtons();
});

removeRow.addEventListener('click', (e) => {
  if (table.rows.length <= MIN) {
    return;
  }

  table.tBodies[0].lastElementChild.remove();

  updateButtons();
});

addColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length >= MAX) {
    return;
  }

  for (const row of table.rows) {
    const cell = document.createElement('td');

    row.append(cell);
  }

  updateButtons();
});

removeColumn.addEventListener('click', (e) => {
  if (table.rows[0].cells.length <= MIN) {
    return;
  }

  for (const row of table.rows) {
    row.lastElementChild.remove();
  }

  updateButtons();
});

updateButtons();
