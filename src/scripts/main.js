'use strict';

const MIN_ELEMENTS = 2;
const MAX_ELEMENTS = 10;

const container = document.querySelector('.container');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');
const firstRow = table.querySelector('tr');

const disableButtons = () => {
  appendRow.disabled = table.childElementCount >= MAX_ELEMENTS;
  removeRow.disabled = table.childElementCount <= MIN_ELEMENTS;
  appendColumn.disabled = firstRow.childElementCount >= MAX_ELEMENTS;
  removeColumn.disabled = firstRow.childElementCount <= MIN_ELEMENTS;
};

const butttonHandler = (e) => {
  if (e.target.tagName?.toUpperCase() !== 'BUTTON') {
    return;
  }

  switch (e.target) {
    case appendRow:
      if (appendRow.disabled) {
        return;
      }
      table.append(firstRow.cloneNode(true));
      break;

    case removeRow:
      table.lastElementChild.remove();
      break;

    case appendColumn:
      if (appendColumn.disabled) {
        return;
      }

      for (const row of table.rows) {
        row.append(row.lastElementChild.cloneNode(true));
      }
      break;

    case removeColumn:
      for (const row of table.rows) {
        row.lastElementChild.remove();
      }
      break;
  }
  disableButtons();
};

container.addEventListener('click', butttonHandler);
