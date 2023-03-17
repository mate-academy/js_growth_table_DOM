'use strict';

const grid = document.querySelector('.field');
const gridRows = grid.rows;
const gridBody = document.querySelector('tr').parentNode;

const addCellButton = document.querySelector('.append-column');
const removeCellButton = document.querySelector('.remove-column');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

addCellButton.addEventListener('click', () => {
  [...gridRows].forEach(row => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  if (gridBody.rows[0].cells.length > 9) {
    addCellButton.setAttribute('disabled', 'true');
  }

  if (
    gridBody.rows[0].cells.length > 2
    && removeCellButton.hasAttribute('disabled')
  ) {
    removeCellButton.removeAttribute('disabled');
  }
});

removeCellButton.addEventListener('click', () => {
  const currentCells = allCells('td');
  const step = gridBody.rows[0].cells.length;

  for (let i = 0; i < currentCells.length; i += step) {
    currentCells[i].remove();
  }

  if (gridBody.rows[0].cells.length < 3) {
    removeCellButton.setAttribute('disabled', 'true');
  }

  if (
    gridBody.rows[0].cells.length < 10
    && addCellButton.hasAttribute('disabled')
  ) {
    addCellButton.removeAttribute('disabled');
  }
});

addRowButton.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const currentCellsAmountInRow = gridBody.rows[0].cells.length;

  for (let i = 0; i < currentCellsAmountInRow; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  gridBody.append(newRow);

  if (gridBody.rows.length > 9) {
    addRowButton.setAttribute('disabled', 'true');
  }

  if (gridBody.rows.length > 2 && removeRowButton.hasAttribute('disabled')) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', () => {
  gridBody.lastElementChild.remove();

  if (gridBody.rows.length < 3) {
    removeRowButton.setAttribute('disabled', 'true');
  }

  if (gridBody.rows.length < 10 && addRowButton.hasAttribute('disabled')) {
    addRowButton.removeAttribute('disabled');
  }
});

function allCells(nameOfTag) {
  return document.querySelectorAll(`${nameOfTag}`);
}
