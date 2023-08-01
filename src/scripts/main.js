'use strict';

const container = document.querySelector('.container');
const tBody = document.querySelector('.field').firstElementChild;
const rows = tBody.children;

const appendRowBtn = document.querySelector('append-row, button');
const removeRowBtn = document.querySelector('remove-row, button');
const appendColumnBtn = document.querySelector('append-column, button');
const removeColumnBtn = document.querySelector('remove-column, button');

container.addEventListener('click', e => {
  let rowLength = tBody.lastElementChild.rowIndex + 1;
  let columnLength = tBody.firstElementChild.lastElementChild.cellIndex + 1;

  if (e.target.className === 'append-row button') {
    rowLength++;

    const rowToClone = tBody.firstElementChild;
    const newRow = rowToClone.cloneNode(true);

    if (rowLength === 10) {
      appendRowBtn.disabled = true;
    }

    tBody.appendChild(newRow);
  } else if (e.target.className === 'remove-row button') {
    rowLength--;

    if (rowLength === 2) {
      removeRowBtn.disabled = true;
    }
    tBody.lastElementChild.remove();

    if (rowLength < 10) {
      appendRowBtn.disabled = false;
    }
  } else if (e.target.className === 'append-column button') {
    columnLength++;

    if (columnLength === 10) {
      appendColumnBtn.disabled = true;
    }

    for (const row of rows) {
      const newCell = row.firstElementChild.cloneNode();

      row.appendChild(newCell);
    }
  } else {
    columnLength--;

    if (columnLength === 2) {
      removeColumnBtn.disabled = true;
    }

    for (const row of rows) {
      row.lastElementChild.remove();
    }

    if (columnLength < 10) {
      appendColumnBtn.disabled = false;
    }
  }
});
