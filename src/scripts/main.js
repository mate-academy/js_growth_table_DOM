'use strict';

const MAX_COL = 10;
const MAX_ROW = 10;
const MIN_COL = 2;
const MIN_ROW = 2;

// write code here
function addRow(e) {
  if (numRows >= MAX_ROW) {
    return;
  }

  const tempTr = document.createElement('tr');

  for (let i = 0; i < numColumns; i++) {
    tempTr.appendChild(document.createElement('td'));
  }

  tbody.appendChild(tempTr);
  numRows += 1;

  if (numRows >= MAX_ROW) {
    e.currentTarget.disabled = true;
  }

  if (numRows > MIN_ROW) {
    removeRowButt.disabled = false;
  }
}

function removeRow(e) {
  tbody.removeChild(tbody.lastElementChild);

  numRows -= 1;

  if (numRows <= MIN_ROW) {
    e.currentTarget.disabled = true;
  }

  if (numRows < MAX_ROW) {
    addRowButt.disabled = false;
  }
}

function addCol(e) {
  if (numColumns >= MAX_COL) {
    return;
  }

  for (const tr of tbody.rows) {
    tr.appendChild(document.createElement('td'));
  }

  numColumns += 1;

  if (numColumns >= MAX_COL) {
    e.currentTarget.disabled = true;
  }

  if (numColumns > MIN_COL) {
    removeColButt.disabled = false;
  }
}

function removeCol(e) {
  for (const tr of tbody.rows) {
    tr.removeChild(tr.lastElementChild);
  }

  numColumns -= 1;

  if (numColumns <= MIN_COL) {
    e.currentTarget.disabled = true;
  }

  if (numColumns < MAX_COL) {
    addColButt.disabled = false;
  }
}

const tbody = document.querySelector('tbody');

const addRowButt = document.querySelector('.append-row.button');
const removeRowButt = document.querySelector('.remove-row.button');
const addColButt = document.querySelector('.append-column.button');
const removeColButt = document.querySelector('.remove-column.button');

let numColumns = tbody.rows[0].cells.length;
let numRows = tbody.rows.length;

addRowButt.addEventListener('click', addRow);
removeRowButt.addEventListener('click', removeRow);
addColButt.addEventListener('click', addCol);
removeColButt.addEventListener('click', removeCol);
