'use strict';

const maxCells = 10;
const minCells = 2;

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removedRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length === maxCells) {
    appendRow.disabled = true;
  }

  if (table.children.length > minCells) {
    removedRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  for (const tr of table.children) {
    tr.append(tr.lastElementChild.cloneNode(true));
  }

  const columnCount = table.lastElementChild.children.length;

  if (columnCount === maxCells) {
    appendColumn.disabled = true;
  }

  if (columnCount > minCells) {
    removeColumn.disabled = false;
  }
});

removedRow.addEventListener('click', () => {
  table.removeChild(table.lastElementChild);

  if (table.children.length === minCells) {
    removedRow.disabled = true;
  }

  if (table.children.length > minCells) {
    appendRow.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  for (const tr of table.children) {
    tr.removeChild(tr.lastElementChild);
  }

  const columnCount = table.lastElementChild.children.length;

  if (columnCount === minCells) {
    removeColumn.disabled = true;
  }

  if (columnCount > minCells) {
    appendColumn.disabled = false;
  }
});
