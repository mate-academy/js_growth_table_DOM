'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= MAX_SIZE;
  removeRowButton.disabled = rowCount <= MIN_SIZE;

  appendColumnButton.disabled = columnCount >= MAX_SIZE;
  removeColumnButton.disabled = columnCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  if (table.rows.length >= MAX_SIZE) {
    return;
  }

  const row = table.insertRow(-1);
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    row.insertCell(-1);
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
    row.insertCell(-1);
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
