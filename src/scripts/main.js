'use strict';

// write code here
const MIN_ROW_COL_COUNT = 2;
const MAX_ROW_COL_COUNT = 10;

function makeTableGrowthListener(
  table,
  minRows,
  maxRows,
  minCols = minRows,
  maxCols = maxRows,
) {
  return (e) => {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }

    const button = e.target;
    const buttonClases = [
      'append-row',
      'remove-row',
      'append-column',
      'remove-column',
    ];
    const buttonClass = Array.from(button.classList).find((cl1) => {
      return buttonClases.some((cl2) => cl1 === cl2);
    });

    switch (buttonClass) {
      case 'append-row':
        appendRow(table, maxRows, button);
        break;
      case 'remove-row':
        removeRow(table, minRows, button);
        break;
      case 'append-column':
        addColumn(table, maxCols, button);
        break;
      case 'remove-column':
        removeColumn(table, minCols, button);
        break;
    }
  };
}

function appendRow(table, maxRows, button) {
  const numberOfRows = table.children.length;

  if (numberOfRows >= maxRows) {
    button.disabled = true;

    return;
  }

  const row = document.createElement('TR');
  const numberOfColumns = table.firstElementChild.children.length;

  for (let i = 0; i < numberOfColumns; i++) {
    row.append(document.createElement('TD'));
  }

  table.append(row);
  document.querySelector('.remove-row').disabled = false;

  if (numberOfRows + 1 >= maxRows) {
    button.disabled = true;
  }
}

function removeRow(table, minRows, button) {
  const numberOfRows = table.children.length;

  if (numberOfRows <= minRows) {
    button.disabled = true;

    return;
  }

  table.lastElementChild.remove();
  document.querySelector('.append-row').disabled = false;

  if (numberOfRows - 1 <= minRows) {
    button.disabled = true;
  }
}

function addColumn(table, maxCols, button) {
  const numberOfColumns = table.firstElementChild.children.length;

  if (numberOfColumns >= maxCols) {
    button.disabled = true;

    return;
  }

  for (const row of table.children) {
    row.append(document.createElement('TD'));
  }

  document.querySelector('.remove-column').disabled = false;

  if (numberOfColumns + 1 >= maxCols) {
    button.disabled = true;
  }
}

function removeColumn(table, minCols, button) {
  const numberOfColumns = table.firstElementChild.children.length;

  if (numberOfColumns <= minCols) {
    button.disabled = true;

    return;
  }

  for (const row of table.children) {
    row.lastElementChild.remove();
  }

  document.querySelector('.append-column').disabled = false;

  if (numberOfColumns - 1 <= minCols) {
    button.disabled = true;
  }
}

const tableElement = document.querySelector('.field tbody');
const listener = makeTableGrowthListener(
  tableElement,
  MIN_ROW_COL_COUNT,
  MAX_ROW_COL_COUNT,
);

document.addEventListener('click', listener);
