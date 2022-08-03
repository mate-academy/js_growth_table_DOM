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

  btnAppendRow.disabled = rows.length >= 10;
  btnRemovedRow.disabled =  rows.length <= 2;
}

function checkCol(rows) {

  btnAppendCol.disabled = rows[0].children.length >= 10;
  btnRemovedCol.disabled = rows[0].children.length <= 2;
}
