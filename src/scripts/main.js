'use strict';

const tableBody = document.querySelector('.field').firstElementChild;
const rows = tableBody.children;
const rowAdder = document.querySelector('.append-row');
const rowRemover = document.querySelector('.remove-row');
const columnAdder = document.querySelector('.append-column');
const columnRemover = document.querySelector('.remove-column');
let rowLength = tableBody.lastElementChild.rowIndex + 1;
let columnLength = tableBody
  .firstElementChild.lastElementChild.cellIndex + 1;

function removeColumn(row) {
  row.lastElementChild.remove();
}

rowAdder.addEventListener('click', () => {
  const rowToClone = tableBody.firstElementChild;
  const newRow = rowToClone.cloneNode(true);

  if (rowLength < 10) {
    rowLength++;
    tableBody.appendChild(newRow);
  }

  if (rowLength > 2) {
    rowRemover.disabled = false;
  }

  if (rowLength === 10) {
    rowAdder.disabled = true;
  }
});

rowRemover.addEventListener('click', () => {
  if (rowLength > 2) {
    rowLength--;
    tableBody.lastElementChild.remove();
  }

  if (rowLength < 10) {
    rowAdder.disabled = false;
  }

  if (rowLength === 2) {
    rowRemover.disabled = true;
  }
});

columnAdder.addEventListener('click', () => {
  if (columnLength < 10) {
    columnLength++;
  }

  for (const row of rows) {
    const newCell = row.firstElementChild.cloneNode(true);

    if (columnLength < 10) {
      row.appendChild(newCell);
    }

    if (columnLength > 2) {
      columnRemover.disabled = false;
    }

    if (columnLength === 10) {
      row.appendChild(newCell);
      columnAdder.disabled = true;
    }
  }
});

columnRemover.addEventListener('click', () => {
  if (columnLength > 2) {
    columnLength--;
  }

  for (const row of rows) {
    if (columnLength > 2) {
      removeColumn(row);
    }

    if (columnLength < 10) {
      columnAdder.disabled = false;
    }

    if (columnLength === 2) {
      removeColumn(row);
      columnRemover.disabled = true;
    }
  }
});
