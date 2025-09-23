'use strict';

const table = document.querySelector('.field');

const btnAddRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAddCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

const getRowCount = () => table.rows.length;
const getColCount = () => table.rows[0]?.cells.length ?? 0;

function addRow() {
  if (getRowCount() >= MAX) {
    return;
  }

  const cols = getColCount();
  const row = table.insertRow(-1);

  for (let i = 0; i < cols; i++) {
    row.insertCell(-1);
  }
}

function removeRow() {
  if (getRowCount() <= MIN) {
    return;
  }
  table.deleteRow(-1);
}

function addColumn() {
  if (getColCount() >= MAX) {
    return;
  }

  for (let r = 0; r < table.rows.length; r++) {
    table.rows[r].insertCell(-1);
  }
}

function removeColumn() {
  if (getColCount() <= MIN) {
    return;
  }

  for (let r = 0; r < table.rows.length; r++) {
    table.rows[r].deleteCell(-1);
  }
}

function updateButtons() {
  const rows = getRowCount();
  const cols = getColCount();

  btnAddRow.disabled = rows >= MAX;
  btnRemoveRow.disabled = rows <= MIN;

  btnAddCol.disabled = cols >= MAX;
  btnRemoveCol.disabled = cols <= MIN;
}

btnAddRow.addEventListener('click', () => {
  addRow();
  updateButtons();
});

btnRemoveRow.addEventListener('click', () => {
  removeRow();
  updateButtons();
});

btnAddCol.addEventListener('click', () => {
  addColumn();
  updateButtons();
});

btnRemoveCol.addEventListener('click', () => {
  removeColumn();
  updateButtons();
});

updateButtons();
