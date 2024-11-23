'use strict';

// write code here
function updateRowButtons() {
  rowRemoveBtn.disabled = rows.length <= 2;
  rowAppendBtn.disabled = rows.length >= 10;
}

function updateColumnButtons() {
  columnRemoveBtn.disabled = columnCount <= 2;
  columnAppendBtn.disabled = columnCount >= 10;
}

function updateRows() {
  rows = Array.from(table.rows);
}

const table = document.querySelector('tbody');
let rows = Array.from(table.rows);
let columnCount = 4;

const tableCellHTML = `<td></td>`;

const rowAppendBtn = document.querySelector('.append-row');
const rowRemoveBtn = document.querySelector('.remove-row');
const columnAppendBtn = document.querySelector('.append-column');
const columnRemoveBtn = document.querySelector('.remove-column');

rowAppendBtn.addEventListener('click', (e) => {
  if (rows.length >= 10) {
    return;
  }

  const insertTr = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    insertTr.insertAdjacentHTML('beforeend', tableCellHTML);
  }

  table.appendChild(insertTr);
  updateRows();
  updateRowButtons();
});

rowRemoveBtn.addEventListener('click', (e) => {
  const lastTr = table.lastElementChild;

  lastTr.remove();
  updateRows();
  updateRowButtons();
});

columnAppendBtn.addEventListener('click', (e) => {
  if (columnCount >= 10) {
    return;
  }

  rows.forEach((row) => {
    row.insertAdjacentHTML('beforeend', tableCellHTML);
    columnCount = row.cells.length;
    updateColumnButtons();
  });
});

columnRemoveBtn.addEventListener('click', (e) => {
  columnCount--;

  rows.forEach((row) => {
    const lastCell = row.cells[columnCount - 1];

    lastCell.remove();
    updateColumnButtons();
  });
});
