'use strict';

const table = document.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRowButton.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));

  if (allRows.length >= 10) {
    return;
  }

  const example = table.querySelector('tr');
  const copy = example.cloneNode(true);

  table.appendChild(copy);

  if (allRows.length >= 9) {
    addRowButton.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));

  if (allRows.length <= 2) {
    return;
  }

  table.removeChild(table.lastElementChild);

  if (allRows.length <= 3) {
    removeRow.disabled = true;
  } else {
    addRowButton.disabled = false;
  }
});

addColumn.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));
  const firstEl = allRows[0];
  const allCells = Array.from(firstEl.cells);

  if (allCells.length >= 10) {
    return;
  }

  const checkCeil = Array.from(allRows[0].cells);

  allRows.forEach((x) => {
    const allBlocks = x.cells;
    const example = allBlocks[0];
    const copy = example.cloneNode(true);

    x.appendChild(copy);
  });

  if (checkCeil.length >= 9) {
    addColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const allRows = Array.from(table.querySelectorAll('tr'));

  const firstEl = allRows[0];
  const allCells = Array.from(firstEl.cells);
  const checkCeil = Array.from(allRows[0].cells);

  if (allCells.length <= 2) {
    return;
  }

  allRows.forEach((x) => {
    x.removeChild(x.lastElementChild);
  });

  if (checkCeil.length <= 3) {
    removeColumn.disabled = true;
  } else {
    addColumn.disabled = false;
  }
});
