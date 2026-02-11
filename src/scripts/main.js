'use strict';

const table = document.querySelector('.field');
const tbody = table.tBodies[0];

const appRow = document.querySelector('.append-row');
const appCol = document.querySelector('.append-column');
const remRow = document.querySelector('.remove-row');
const remCol = document.querySelector('.remove-column');

const MIN_ROWS = 2;
const MAX_ROWS = 10;
const MIN_COLS = 2;
const MAX_COLS = 10;

// ---------- helpers ----------

const getNumRows = () => tbody.rows.length;
const getNumCols = () => tbody.rows[0].cells.length;

const buttonCheck = () => {
  const numRows = getNumRows();
  const numCols = getNumCols();

  appRow.disabled = numRows >= MAX_ROWS;
  remRow.disabled = numRows <= MIN_ROWS;

  appCol.disabled = numCols >= MAX_COLS;
  remCol.disabled = numCols <= MIN_COLS;
};

// ---------- row operations ----------

const appendRow = () => {
  if (getNumRows() >= MAX_ROWS) {
    return;
  }

  const row = document.createElement('tr');

  for (let i = 0; i < getNumCols(); i++) {
    row.appendChild(document.createElement('td'));
  }

  tbody.appendChild(row);
  buttonCheck();
};

const removeRow = () => {
  if (getNumRows() <= MIN_ROWS) {
    return;
  }

  tbody.lastElementChild.remove();
  buttonCheck();
};

// ---------- column operations ----------

const appendCol = () => {
  if (getNumCols() >= MAX_COLS) {
    return;
  }

  [...tbody.rows].forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  buttonCheck();
};

const removeCol = () => {
  if (getNumCols() <= MIN_COLS) {
    return;
  }

  [...tbody.rows].forEach((row) => {
    row.lastElementChild.remove();
  });

  buttonCheck();
};

// ---------- events ----------

appRow.addEventListener('click', appendRow);
remRow.addEventListener('click', removeRow);
appCol.addEventListener('click', appendCol);
remCol.addEventListener('click', removeCol);

// ---------- init ----------

buttonCheck();
