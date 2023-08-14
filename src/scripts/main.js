'use strict';

const container = document.querySelector('.container');
const buttons = [...document.querySelectorAll('.button')];
const table = document.querySelector('.field');
const [tableBody] = table.tBodies;

let rowsCount = table.rows.length;
let columnsCount = table.rows[0].childElementCount;

const MAX = 10;
const MIN = 2;

const APPEND_ROW = 'append-row';
const REMOVE_ROW = 'remove-row';
const APPEND_COLUMN = 'append-column';
const REMOVE_COLUMN = 'remove-column';

const appendRow = () => {
  if ((rowsCount) > MAX) {
    return;
  }

  rowsCount++;

  const newRow = tableBody.lastElementChild.cloneNode(true);

  tableBody.append(newRow);
};

const removeRow = () => {
  if ((rowsCount - 1) < MIN) {
    return;
  }

  rowsCount--;

  const rowToDelete = tableBody.lastElementChild;

  rowToDelete.remove();
};

const appendColumn = () => {
  if ((columnsCount + 1) > MAX) {
    return;
  }

  columnsCount++;

  [...table.rows].forEach(row => {
    const newCell = row.lastElementChild.cloneNode(true);

    row.append(newCell);
  });
};

const removeColumn = () => {
  if ((columnsCount - 1) < MIN) {
    return;
  }

  columnsCount--;

  [...table.rows].forEach(row => {
    row.lastElementChild.remove();
  });
};

const isTargetButton = (item, className) => item.classList.contains(className);

const checkButtons = () => {
  buttons.forEach((button) => {
    if (isTargetButton(button, APPEND_ROW)) {
      button.disabled = rowsCount >= MAX;
    }

    if (isTargetButton(button, REMOVE_ROW)) {
      button.disabled = rowsCount <= MIN;
    }

    if (isTargetButton(button, APPEND_COLUMN)) {
      button.disabled = columnsCount >= MAX;
    }

    if (isTargetButton(button, REMOVE_COLUMN)) {
      button.disabled = columnsCount <= MIN;
    }
  });
};

/* eslint-disable-next-line no-shadow */
const growthTable = (event) => {
  const targetItem = event.target;
  const button = targetItem.closest('.button');

  const checkButton = (className) => isTargetButton(button, className);

  if (!button || button.disabled) {
    return;
  }

  switch (true) {
    case checkButton(APPEND_ROW):
      appendRow();
      break;

    case checkButton(REMOVE_ROW):
      removeRow();
      break;

    case checkButton(APPEND_COLUMN):
      appendColumn();
      break;

    case checkButton(REMOVE_COLUMN):
      removeColumn();
      break;

    default:
      break;
  }

  checkButtons();
};

container.addEventListener('click', growthTable);
