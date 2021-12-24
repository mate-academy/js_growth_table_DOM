'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const field = document.querySelector('.field');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  const item = e.target;
  const maxCount = 10;
  const minCount = 2;
  let rowCount = field.rows.length;
  let columnCount = field.tBodies[0].rows[0].cells.length;

  if ((item.tagName !== 'BUTTON' && rowCount > maxCount)
    || (item.tagName !== 'BUTTON' && columnCount > maxCount)) {
    return;
  }

  const tr = field.tBodies[0].rows[0].cloneNode(true);

  if (item === appendRow && rowCount < maxCount) {
    removeRow.disabled = false;
    rowCount += 1;

    if (rowCount >= maxCount) {
      appendRow.disabled = true;
    }

    field.tBodies[0].append(tr);
  }

  if (item === removeRow) {
    appendRow.disabled = false;
    rowCount -= 1;

    if (rowCount <= minCount) {
      removeRow.disabled = true;
    }

    field.deleteRow(tr);
  }

  if (item === appendColumn && columnCount < maxCount) {
    removeColumn.disabled = false;
    columnCount += 1;

    if (columnCount >= maxCount) {
      appendColumn.disabled = true;
    }

    for (const elem of field.rows) {
      const td = document.createElement('td');

      elem.append(td);
    }
  }

  if (item === removeColumn) {
    appendColumn.disabled = false;
    columnCount -= 1;

    if (columnCount <= minCount) {
      removeColumn.disabled = true;
    }

    for (const elem of field.rows) {
      elem.cells[0].remove();
    }
  }
});
