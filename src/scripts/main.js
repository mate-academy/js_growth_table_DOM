'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtons() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = colsCount >= 10;
  removeColumn.disabled = colsCount <= 2;
}

appendRow.addEventListener('click', (e) => {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  if (rowsCount === 10) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < colsCount; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  table.append(tr);

  updateButtons();
});

removeRow.addEventListener('click', (e) => {
  const rowsCount = table.rows.length;

  if (rowsCount <= 2) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];

  lastRow.remove();

  updateButtons();
});

appendColumn.addEventListener('click', (e) => {
  const colsCount = table.rows[0].cells.length;

  if (colsCount === 10) {
    return;
  }

  for (const tr of table.rows) {
    const td = document.createElement('td');

    tr.append(td);
  }

  updateButtons();
});

removeColumn.addEventListener('click', (e) => {
  const colsCount = table.rows[0].cells.length;

  if (colsCount <= 2) {
    return;
  }

  for (const tr of table.rows) {
    tr.cells[colsCount - 1].remove();
  }

  updateButtons();
});

updateButtons();
