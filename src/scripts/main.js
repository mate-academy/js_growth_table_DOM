'use strict';

const btnAppendRow = document.querySelector('.append-row');
const btnRemovedRow = document.querySelector('.remove-row');
const btnAppendCol = document.querySelector('.append-column');
const btnRemovedCol = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

btnAppendRow.addEventListener('click', () => {
  const row = table.lastElementChild.cloneNode(true);

  table.appendChild(row);
  checkRow();
});

btnRemovedRow.addEventListener('click', () => {
  table.lastElementChild.remove();
  checkRow();
});

btnAppendCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => {
    const col = row.lastElementChild.cloneNode(true);

    row.append(col);
  });
  checkCol(rows);
});

btnRemovedCol.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach(row => row.lastElementChild.remove());
  checkCol(rows);
});

function checkRow() {
  const rows = document.querySelectorAll('tr');

  rows.length >= 10
    ? btnAppendRow.disabled = true
    : btnAppendRow.disabled = false;

  rows.length <= 2
    ? btnRemovedRow.disabled = true
    : btnRemovedRow.disabled = false;
}

function checkCol(rows) {
  rows[0].children.length >= 10
    ? btnAppendCol.disabled = true
    : btnAppendCol.disabled = false;

  rows[0].children.length <= 2
    ? btnRemovedCol.disabled = true
    : btnRemovedCol.disabled = false;
}
