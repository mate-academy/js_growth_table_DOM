'use strict';

const table = document.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minRows = 2;
const maxRows = 10;
const minColumns = 2;
const maxColumns = 10;
const enableDisableThreshold = maxRows - 1;

addRowButton.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));

  if (allRows.length >= maxRows) {
    return;
  }

  const example = table.querySelector('tr');
  const copy = example.cloneNode(true);

  table.appendChild(copy);

  if (allRows.length >= enableDisableThreshold) {
    addRowButton.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));

  if (allRows.length <= minRows) {
    return;
  }

  table.removeChild(table.lastElementChild);

  if (allRows.length <= minRows + 1) {
    removeRow.disabled = true;
  } else {
    addRowButton.disabled = false;
  }
});

addColumn.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));
  const firstEl = allRows[0];
  const allCells = Array.from(firstEl.cells);

  if (allCells.length >= maxColumns) {
    return;
  }

  allRows.forEach((x) => {
    const example = x.cells[0];
    const copy = example.cloneNode(true);

    x.appendChild(copy);
  });

  if (allCells.length >= enableDisableThreshold) {
    addColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));
  const firstEl = allRows[0];
  const allCells = Array.from(firstEl.cells);

  if (allCells.length <= minColumns) {
    return;
  }

  allRows.forEach((x) => {
    x.removeChild(x.lastElementChild);
  });

  if (allCells.length <= minColumns + 1) {
    removeColumn.disabled = true;
  } else {
    addColumn.disabled = false;
  }
});
