'use strict';

const grid = document.querySelector('.field');
const gridRows = grid.rows;
const gridBody = document.querySelector('tr').parentNode;

const addCellButton = document.querySelector('.append-column');
const removeCellButton = document.querySelector('.remove-column');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const maxCells = 9;
const minCells = 3;
const maxRows = 9;
const minRows = 3;

addCellButton.addEventListener('click', () => {
  [...gridRows].forEach(row => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  const isMaxColumns = checkMaxCellsAmount(gridBody, maxCells);
  const isMinColumns = checkMinCellsAmount(gridBody, minCells);
  const isRemoveCellButtonDisabled = checkForAttributeDisabled(
    removeCellButton
  );

  if (isMaxColumns) {
    addCellButton.setAttribute('disabled', 'true');
  }

  if (!isMinColumns && isRemoveCellButtonDisabled) {
    removeCellButton.removeAttribute('disabled');
  }
});

removeCellButton.addEventListener('click', () => {
  const currentCells = allCells('td');
  const step = gridBody.rows[0].cells.length;

  for (let i = 0; i < currentCells.length; i += step) {
    currentCells[i].remove();
  }

  const isMaxColumns = checkMaxCellsAmount(gridBody, maxCells);
  const isMinColumns = checkMinCellsAmount(gridBody, minCells);
  const isAddCellButtonDisabled = checkForAttributeDisabled(addCellButton);

  if (isMinColumns) {
    removeCellButton.setAttribute('disabled', 'true');
  }

  if (!isMaxColumns && isAddCellButtonDisabled) {
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

  const isMaxRows = checkMaxRowsAmount(gridBody, maxRows);
  const isMinRows = checkMinRowsAmount(gridBody, minRows);
  const isRemoveRowButtonDisabled = checkForAttributeDisabled(removeRowButton);

  if (isMaxRows) {
    addRowButton.setAttribute('disabled', 'true');
  }

  if (!isMinRows && isRemoveRowButtonDisabled) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', () => {
  gridBody.lastElementChild.remove();

  const isMaxRows = checkMaxRowsAmount(gridBody, maxRows);
  const isMinRows = checkMinRowsAmount(gridBody, minRows);
  const isAddRowButtonDisabled = checkForAttributeDisabled(addRowButton);

  if (isMinRows) {
    removeRowButton.setAttribute('disabled', 'true');
  }

  if (!isMaxRows && isAddRowButtonDisabled) {
    addRowButton.removeAttribute('disabled');
  }
});

function allCells(nameOfTag) {
  return document.querySelectorAll(`${nameOfTag}`);
}

function checkForAttributeDisabled(element) {
  return element.hasAttribute('disabled');
}

function checkMaxCellsAmount(tBody, limit) {
  if (tBody.rows[0].cells.length > limit) {
    return true;
  }

  return false;
}

function checkMinCellsAmount(tBody, limit) {
  if (tBody.rows[0].cells.length < limit) {
    return true;
  }

  return false;
}

function checkMaxRowsAmount(tBody, limit) {
  if (tBody.rows.length > limit) {
    return true;
  }

  return false;
}

function checkMinRowsAmount(tBody, limit) {
  if (tBody.rows.length < limit) {
    return true;
  }

  return false;
}
