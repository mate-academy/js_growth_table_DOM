'use strict';

// write code here
'use strict';

const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function getRowsCount() {
  return table.rows.length;
}

function getColumnsCount() {
  return table.rows[0].cells.length;
}

function updateButtons() {
  const rowsCount = getRowsCount();
  const columnsCount = getColumnsCount();

  appendRowButton.disabled = rowsCount >= MAX_SIZE;
  removeRowButton.disabled = rowsCount <= MIN_SIZE;

  appendColumnButton.disabled = columnsCount >= MAX_SIZE;
  removeColumnButton.disabled = columnsCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  if (getRowsCount() >= MAX_SIZE) {
    return;
  }

  const columnsCount = getColumnsCount();
  const row = table.insertRow();

  for (let i = 0; i < columnsCount; i++) {
    row.insertCell();
  }

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (getRowsCount() <= MIN_SIZE) {
    return;
  }

  table.deleteRow(getRowsCount() - 1);

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  if (getColumnsCount() >= MAX_SIZE) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (getColumnsCount() <= MIN_SIZE) {
    return;
  }

  const lastColumnIndex = getColumnsCount() - 1;

  for (const row of table.rows) {
    row.deleteCell(lastColumnIndex);
  }

  updateButtons();
});

updateButtons();
