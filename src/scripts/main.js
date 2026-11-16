'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function updateButtons() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= MAX_SIZE;
  removeRowButton.disabled = rowsCount <= MIN_SIZE;

  appendColumnButton.disabled = columnsCount >= MAX_SIZE;
  removeColumnButton.disabled = columnsCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  if (table.rows.length >= MAX_SIZE) {
    return;
  }

  const columnsCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < columnsCount; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= MIN_SIZE) {
    return;
  }

  table.deleteRow(-1);

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length >= MAX_SIZE) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.insertCell();
  });

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length <= MIN_SIZE) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.deleteCell(-1);
  });

  updateButtons();
});

updateButtons();
