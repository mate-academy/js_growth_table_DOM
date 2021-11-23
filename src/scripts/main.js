'use strict';

const maxRow = 10;
const minRow = 2;
const maxColumn = 10;
const minColumn = 2;

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const container = document.querySelector('.container');
const table = document.querySelector('table').tBodies[0];

container.addEventListener('click', (e) => {
  const target = e.target.closest('.button');

  if (!container.contains(target)) {
    return;
  }

  if (target.classList.contains('append-row')) {
    table.append(table.firstElementChild.cloneNode(true));
  }

  if (target.classList.contains('remove-row')) {
    table.lastElementChild.remove();
  }

  if (target.classList.contains('append-column')) {
    for (const i of table.children) {
      i.append(document.createElement('td'));
    }
  }

  if (target.classList.contains('remove-column')) {
    for (const i of table.children) {
      i.lastElementChild.remove();
    }
  }

  const countRow = table.childElementCount;
  const countColumn = table.firstElementChild.childElementCount;

  addRow.disabled = countRow >= maxRow;
  removeRow.disabled = countRow <= minRow;

  addColumn.disabled = countColumn >= maxColumn;
  removeColumn.disabled = countColumn <= minColumn;
});
