'use strict';

const container = document.querySelector('.container');
const buttons = [...document.querySelectorAll('.button')];
const table = document.querySelector('.field');
const [tableBody] = table.tBodies;

const MAX = 10;
const MIN = 2;

const APPEND_ROW = 'append-row';
const REMOVE_ROW = 'remove-row';
const APPEND_COLUMN = 'append-column';
const REMOVE_COLUMN = 'remove-column';

const appendRow = () => {
  const newRow = tableBody.lastElementChild.cloneNode(true);

  tableBody.append(newRow);
};

const removeRow = () => {
  const rowToDelete = tableBody.lastElementChild;

  rowToDelete.remove();
};

const appendColumn = () => {
  [...table.rows].forEach(row => {
    const newCell = row.lastElementChild.cloneNode(true);

    row.append(newCell);
  });
};

const removeColumn = () => {
  [...table.rows].forEach(row => {
    row.lastElementChild.remove();
  });
};

const isTargerButton = (item, className) => {
  return item.classList.contains(className);
};

const checkButtons = () => {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].childElementCount;

  buttons.forEach((button) => {
    if (isTargerButton(button, APPEND_ROW)) {
      button.disabled = rowsCount >= MAX;
    }

    if (isTargerButton(button, REMOVE_ROW)) {
      button.disabled = rowsCount <= MIN;
    }

    if (isTargerButton(button, APPEND_COLUMN)) {
      button.disabled = columnsCount >= MAX;
    }

    if (isTargerButton(button, REMOVE_COLUMN)) {
      button.disabled = columnsCount <= MIN;
    }
  });
};

/* eslint-disable-next-line no-shadow */
const growthTable = (event) => {
  const targetItem = event.target;
  const button = targetItem.closest('.button');

  if (!button || button.disabled) {
    return;
  }

  switch (true) {
    case isTargerButton(button, APPEND_ROW):
      appendRow();
      break;

    case isTargerButton(button, REMOVE_ROW):
      removeRow();
      break;

    case isTargerButton(button, APPEND_COLUMN):
      appendColumn();
      break;

    case isTargerButton(button, REMOVE_COLUMN):
      removeColumn();
      break;

    default:
      break;
  }

  checkButtons();
};

checkButtons();

container.addEventListener('click', growthTable);
