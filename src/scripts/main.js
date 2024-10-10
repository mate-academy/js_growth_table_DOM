'use strict';

const TBODY = document.querySelector('.field tbody');
const ROWS = TBODY.rows;

const APPEND_ROW_BUTTON = document.querySelector('.append-row');
const REMOVE_ROW_BUTTON = document.querySelector('.remove-row');
const APPEND_COLUMN_BUTTON = document.querySelector('.append-column');
const REMOVE_COLUMN_BUTTON = document.querySelector('.remove-column');

const getTableSize = () => {
  const rows = TBODY.rows;
  const cells = rows[0].cells;

  return {
    rows: rows.length,
    cells: cells.length,
  };
};

const createRow = (cellsSize, rowSize) => {
  // Next line for test, disabled button works correctly
  if (rowSize === 10) {
    return;
  }

  if (rowSize === 9) {
    APPEND_ROW_BUTTON.disabled = true;
  }

  if (rowSize === 2) {
    REMOVE_ROW_BUTTON.disabled = false;
  }

  const row = document.createElement('tr');

  for (let i = 0; i < cellsSize; i++) {
    row.insertCell();
  }

  TBODY.append(row);
};
const removeRow = (rowSize) => {
  if (rowSize === 3) {
    REMOVE_ROW_BUTTON.disabled = true;
  }

  if (rowSize === 10) {
    APPEND_ROW_BUTTON.disabled = false;
  }
  TBODY.deleteRow(rowSize - 1);
};

const createColumn = (cellsSize, rowSize) => {
  // Next line for test, disabled button works correctly
  if (cellsSize === 10) {
    return;
  }

  if (cellsSize === 9) {
    APPEND_COLUMN_BUTTON.disabled = true;
  }

  if (cellsSize === 2) {
    REMOVE_COLUMN_BUTTON.disabled = false;
  }

  for (let i = 0; i < rowSize; i++) {
    ROWS[i].insertCell();
  }
};

const removeColumn = (cellsSize) => {
  if (cellsSize === 3) {
    REMOVE_COLUMN_BUTTON.disabled = true;
  }

  if (cellsSize === 10) {
    APPEND_COLUMN_BUTTON.disabled = false;
  }

  for (let i = 0; i < ROWS.length; i++) {
    TBODY.rows[i].deleteCell(cellsSize - 1);
  }
};

REMOVE_COLUMN_BUTTON.addEventListener('click', () => {
  const { cells } = getTableSize();

  removeColumn(cells);
});

REMOVE_ROW_BUTTON.addEventListener('click', () => {
  const { rows } = getTableSize();

  removeRow(rows);
});

APPEND_ROW_BUTTON.addEventListener('click', () => {
  const { cells, rows } = getTableSize();

  createRow(cells, rows);
});

APPEND_COLUMN_BUTTON.addEventListener('click', () => {
  const { cells, rows } = getTableSize();

  createColumn(cells, rows);
});
