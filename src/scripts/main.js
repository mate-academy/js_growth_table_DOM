'use strict';

const table = document.body.querySelector('.field');
const tbody = table.tBodies[0];
const tr = document.body.querySelector('tr');
const appendRow = document.body.querySelector('.append-row');
const removeRow = document.body.querySelector('.remove-row');
const appendColumn = document.body.querySelector('.append-column');
const removeColumn = document.body.querySelector('.remove-column');
let rowsCount = tbody.rows.length;
let columnsCount = tr.cells.length;

function disableButton(rows, columns) {
  appendRow.disabled = false;
  removeRow.disabled = false;
  appendColumn.disabled = false;
  removeColumn.disabled = false;

  if (rows >= 10) {
    appendRow.disabled = true;
  }

  if (rows <= 2) {
    removeRow.disabled = true;
  }

  if (columns >= 10) {
    appendColumn.disabled = true;
  }

  if (columns <= 2) {
    removeColumn.disabled = true;
  }
}

appendRow.addEventListener('click', (e) => {
  rowsCount++;

  disableButton(rowsCount, columnsCount);

  tbody.append(tr.cloneNode(true));
});

removeRow.addEventListener('click', () => {
  rowsCount--;

  disableButton(rowsCount, columnsCount);

  tbody.lastElementChild.remove();
});

appendColumn.addEventListener('click', () => {
  columnsCount++;

  disableButton(rowsCount, columnsCount);

  [...tbody.rows].forEach(item => {
    item.append(document.createElement('td'));
  });
});

removeColumn.addEventListener('click', () => {
  columnsCount--;

  disableButton(rowsCount, columnsCount);

  [...tbody.rows].forEach(item => {
    item.lastElementChild.remove();
  });
});
