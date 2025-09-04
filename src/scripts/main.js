'use strict';

const tAble = document.querySelector('table');
const maxRows = 10;
const minRows = 2;
const maxCells = 10;
const minCells = 2;

function appendRow() {
  const row = document.createElement('tr');
  const colums = tAble.rows[0].cells.length;

  for (let i = 0; i < colums; i++) {
    const cell = document.createElement('td');

    row.appendChild(cell);
  }

  tAble.appendChild(row);
}

function removeRow() {
  if (tAble.rows.length > 0) {
    tAble.deleteRow(-1);
  }
}

function appendColumn() {
  Array.from(tAble.rows).forEach((tr) => {
    const cell = document.createElement('td');

    tr.appendChild(cell);
  });
}

function removeColumn() {
  Array.from(tAble.rows).forEach((row) => {
    row.deleteCell(-1);
  });
}

const addRowBtn = document.querySelector('.append-row.button');
const delRowBtn = document.querySelector('.remove-row.button');
const addColBtn = document.querySelector('.append-column.button');
const delColBtn = document.querySelector('.remove-column.button');

function updateButtons() {
  const rowLength = tAble.rows.length;
  const colLength = tAble.rows[0].cells.length;

  addRowBtn.disabled = rowLength === maxRows;
  delRowBtn.disabled = rowLength === minRows;
  addColBtn.disabled = colLength === maxCells;
  delColBtn.disabled = colLength === minCells;
}

addRowBtn.addEventListener('click', () => {
  appendRow();
  updateButtons();
});

delRowBtn.addEventListener('click', () => {
  removeRow();
  updateButtons();
});

addColBtn.addEventListener('click', () => {
  appendColumn();
  updateButtons();
});

delColBtn.addEventListener('click', () => {
  removeColumn();
  updateButtons();
});
