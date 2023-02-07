'use strict';

const tableBody = document.querySelector('table > tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');

container.addEventListener('click', e => {
  const item = e.target.closest('.button');

  if (!item) {
    return;
  }

  const rows = document.querySelectorAll('table > tbody > tr');

  const maxRow = 10;
  const minRow = 2;
  const maxColumn = 10;
  const minColumn = 2;

  switch (item) {
    case appendRow:
      tableBody.append(tableBody.children[0].cloneNode(true));

      if (tableBody.children.length === maxRow) {
        appendRow.disabled = true;
      }

      break;

    case removeRow:
      tableBody.deleteRow(0);

      if (tableBody.children.length === minRow) {
        removeRow.disabled = true;
      }

      break;

    case appendColumn:
      for (const row of rows) {
        row.children[0].after(row.children[0].cloneNode(true));

        if (row.children.length === maxColumn) {
          appendColumn.disabled = true;
        }
      }

      break;

    case removeColumn:
      for (const row of rows) {
        row.deleteCell(0);

        if (row.children.length === minColumn) {
          removeColumn.disabled = true;
        }
      }
  }

  if (tableBody.children.length < maxRow) {
    appendRow.disabled = false;
  }

  if (tableBody.children.length > minRow) {
    removeRow.disabled = false;
  }

  for (const cell of rows) {
    if (cell.children.length > minColumn) {
      removeColumn.disabled = false;

      if (cell.children.length < maxColumn) {
        appendColumn.disabled = false;
      }
    }
  }
});
