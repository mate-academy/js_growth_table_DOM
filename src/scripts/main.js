'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');

// BUTTONS
const addRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const addColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLS = 10;
const MIN_COLS = 2;

addRow.addEventListener('click', () => {
  const rows = [...tBody.querySelectorAll('tr')];
  const row = tBody.querySelector('tr');

  if (rows.length >= MAX_ROWS) {
    return;
  }

  if (rows.length >= 2) {
    removeRow.disabled = false;
  }

  const tr = document.createElement('tr');

  [...row.cells].forEach((cell) => {
    const newCell = cell.cloneNode(true);

    tr.append(newCell);
  });

  tBody.append(tr);

  addRow.disabled = tBody.querySelectorAll('tr').length >= MAX_ROWS;
});

removeRow.addEventListener('click', () => {
  const rows = [...tBody.querySelectorAll('tr')];

  if (rows.length <= MIN_ROWS) {
    return;
  }

  if (rows.length <= MAX_ROWS) {
    addRow.disabled = false;
  }

  if (rows.length <= MIN_ROWS + 1) {
    removeRow.disabled = true;
  }

  tBody.lastElementChild.remove();
});

addColumn.addEventListener('click', () => {
  const rows = [...tBody.querySelectorAll('tr')];

  const currentCols = rows[0] ? rows[0].children.length : 0;

  if (currentCols >= MAX_COLS) {
    return;
  }

  rows.forEach((row) => {
    if (row.children.length >= 2) {
      removeColumn.disabled = false;
    }

    row.append(row.firstElementChild.cloneNode(true));
  });

  addColumn.disabled = rows[0].children.length >= MAX_COLS;
});

removeColumn.addEventListener('click', () => {
  const rows = [...tBody.querySelectorAll('tr')];

  const currentCols = rows[0] ? rows[0].children.length : 0;

  if (currentCols <= MIN_COLS) {
    return;
  }

  rows.forEach((row) => {
    if (row.children.length <= MAX_COLS) {
      addColumn.disabled = false;
    }

    if (row.children.length <= MIN_COLS + 1) {
      removeColumn.disabled = true;
    }

    row.lastElementChild.remove();
  });
});
