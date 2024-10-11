'use strict';

const tbody = document.querySelector('table tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const rows = [...tbody.querySelectorAll('tr')];
let rowsCurrent = rows.length;
let columnsCurrent = rows[0].childElementCount;

const max = 10;
const min = 2;

const setButton = (el, state) => (el.disabled = state);

appendRow.addEventListener('click', (e) => {
  const newRow = rows[1].cloneNode(true);

  tbody.appendChild(newRow);
  rowsCurrent++;

  if (rowsCurrent >= max) {
    setButton(e.target, true);
  } else {
    setButton(removeRow, false);
  }
});

removeRow.addEventListener('click', (e) => {
  rowsCurrent--;

  if (rowsCurrent) {
    tbody.removeChild(tbody.lastElementChild);
  }

  if (rowsCurrent <= min) {
    setButton(e.target, true);
  } else {
    setButton(appendRow, false);
  }
});

appendColumn.addEventListener('click', (e) => {
  columnsCurrent++;

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
    rowsCurrent++;
  });

  if (columnsCurrent === max) {
    setButton(e.target, true);
  } else {
    setButton(removeColumn, false);
  }
});

removeColumn.addEventListener('click', (e) => {
  columnsCurrent--;

  rows.forEach((row) => {
    if (row.hasChildNodes()) {
      row.removeChild(row.lastElementChild);
      rowsCurrent--;
    }
  });

  if (columnsCurrent <= min) {
    setButton(e.target, true);
  } else {
    setButton(appendColumn, false);
  }
});
