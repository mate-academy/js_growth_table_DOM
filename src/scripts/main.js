'use strict';

const MIN_ROWS = 2;
const MAX_ROWS = 10;

const MIN_COLUMNS = 2;
const MAX_COLUMNS = 10;

const container = document.querySelector('.container');
const tbody = container.querySelector('tbody');

const buttonAppendRow = container.querySelector('.append-row');
const buttonRemoveRow = container.querySelector('.remove-row');

const buttonAppendColumn = container.querySelector('.append-column');
const buttonRemoveColumn = container.querySelector('.remove-column');

let currentNumberOfRows = tbody.children.length;
let currentNumberOfColumns = tbody.lastElementChild.children.length;

buttonAppendRow.appendRow = () => {
  if (currentNumberOfRows < MAX_ROWS) {
    tbody.append(tbody.lastElementChild.cloneNode(true));
  }

  if (++currentNumberOfRows > MIN_ROWS) {
    buttonRemoveRow.disabled = '';
  }

  if (currentNumberOfRows === MAX_ROWS) {
    buttonAppendRow.disabled = 'disabled';
  }
};

buttonRemoveRow.removeRow = () => {
  if (currentNumberOfRows > MIN_ROWS) {
    tbody.lastElementChild.remove();
  }

  if (--currentNumberOfRows > MIN_ROWS) {
    buttonAppendRow.disabled = '';
  }

  if (currentNumberOfRows === MIN_ROWS) {
    buttonRemoveRow.disabled = 'disabled';
  }
};

buttonAppendColumn.appendColumn = () => {
  if (currentNumberOfColumns < MAX_COLUMNS) {
    [...tbody.children].forEach((row) => {
      row.append(row.lastElementChild.cloneNode());
    });
  }

  if (++currentNumberOfColumns > MIN_COLUMNS) {
    buttonRemoveColumn.disabled = '';
  }

  if (currentNumberOfColumns === MAX_COLUMNS) {
    buttonAppendColumn.disabled = 'disabled';
  }
};

buttonRemoveColumn.removeColumn = () => {
  if (currentNumberOfColumns > MIN_COLUMNS) {
    [...tbody.children].forEach((row) => row.lastElementChild.remove());
  }

  if (--currentNumberOfColumns > MIN_COLUMNS) {
    buttonAppendColumn.disabled = '';
  }

  if (currentNumberOfColumns === MIN_COLUMNS) {
    buttonRemoveColumn.disabled = 'disabled';
  }
};

container.addEventListener('click', (e) => {
  switch (e.target) {
    case buttonAppendRow:
      buttonAppendRow.appendRow();

      break;

    case buttonRemoveRow:
      buttonRemoveRow.removeRow();

      break;

    case buttonAppendColumn:
      buttonAppendColumn.appendColumn();

      break;

    case buttonRemoveColumn:
      buttonRemoveColumn.removeColumn();

      break;

    default:
      break;
  }
});
