'use strict';

// write code here
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rowAppend = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const newColum = document.querySelector('.append-column');
const colRemove = document.querySelector('.remove-column');

const max = 10;
const min = 2;

function getCell() {
  const cell = document.createElement('td');

  cell.textContent = '';

  return cell;
}

function getRowCount() {
  return tbody.rows.length;
}

function getColumCount() {
  if (tbody.rows.length > 0) {
    return tbody.rows[0].cells.length;
  } else {
    return 0;
  }
}

function updateButtons() {
  rowAppend.disabled = getRowCount() >= max;
  rowRemove.disabled = getRowCount() <= min;
  newColum.disabled = getColumCount() >= max;
  colRemove.disabled = getColumCount() <= min;
}

rowAppend.addEventListener('click', () => {
  const colCount = getColumCount();
  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i++) {
    newRow.appendChild(getCell());
  }
  tbody.appendChild(newRow);
  updateButtons();
});

rowRemove.addEventListener('click', () => {
  if (getRowCount() > min) {
    table.deleteRow(-1);
    updateButtons();
  }
});

newColum.addEventListener('click', () => {
  if (getColumCount() < max) {
    for (const r of table.rows) {
      r.appendChild(getCell());
    }
  }
  updateButtons();
});

colRemove.addEventListener('click', () => {
  if (getColumCount() > min) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtons();
  }
});
