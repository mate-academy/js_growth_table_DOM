'use strict';

const container = document.querySelector('.container');
const tBody = document.querySelector('tbody');
/* const table = document.querySelector('.field'); */
let columnCount = tBody.firstElementChild.children.length;
let rowsCount = tBody.children.length;
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', ev => {
  if (ev.target.closest('.append-row') && rowsCount < 10) {
    const newRow = tBody.firstElementChild.cloneNode(true);

    tBody.append(newRow);
    rowsCount++;

    if (rowsCount > 2) {
      removeRow.disabled = false;
    };

    if (rowsCount === 10) {
      appendRow.disabled = true;
    };
  };

  if (ev.target.closest('.remove-row')) {
    tBody.deleteRow(0);
    rowsCount--;

    if (rowsCount < 10) {
      appendRow.disabled = false;
    };

    if (rowsCount === 2) {
      removeRow.disabled = true;
    };
  };

  if (ev.target.closest('.append-column') && columnCount < 10) {
    [...tBody.children].forEach(tr => {
      tr.append(document.createElement('td'));
    });
    columnCount++;

    if (columnCount === 10) {
      appendColumn.disabled = true;
    };

    if (columnCount > 2) {
      removeColumn.disabled = false;
    };
  }

  if (ev.target.closest('.remove-column') && columnCount >= 2) {
    [...tBody.children].forEach(tr => {
      tr.children[0].remove();
    });
    columnCount--;

    if (columnCount === 2) {
      removeColumn.disabled = true;
    };

    if (columnCount < 10) {
      appendColumn.disabled = false;
    };
  };
});
