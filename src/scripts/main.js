'use strict';

const MIN_ROWS_COL = 2;
const MAX_ROWS_COL = 10;

const container = document.querySelector('.container');
const tableField = container.querySelector('.field');
const tbody = tableField.querySelector('tbody');

const buttonAppendRow = container.querySelector('.append-row');
const buttonRemoveRow = container.querySelector('.remove-row');
const buttonAppendColumn = container.querySelector('.append-column');
const buttonRemoveColumn = container.querySelector('.remove-column');

let countOfRow = 0;
const allTrsForRow = tableField.querySelectorAll('tr');

allTrsForRow.forEach(() => {
  countOfRow++;
});

buttonAppendRow.addEventListener('click', () => {
  const tr = tableField.querySelector('tr');
  const trCopy = tr.cloneNode(true);

  ++countOfRow;

  if (MAX_ROWS_COL < countOfRow) {
    buttonAppendRow.disabled = true;
  } else if (MAX_ROWS_COL === countOfRow) {
    tbody.append(trCopy);
    buttonAppendRow.disabled = true;
  } else if (MAX_ROWS_COL > countOfRow) {
    buttonRemoveRow.disabled = false;
    tbody.append(trCopy);
  }
});

buttonRemoveRow.addEventListener('click', () => {
  countOfRow--;

  const trLast = tbody.lastElementChild;

  if (MIN_ROWS_COL > countOfRow) {
    buttonRemoveRow.disabled = true;
  } else if (MIN_ROWS_COL === countOfRow) {
    trLast.remove();
    buttonRemoveRow.disabled = true;
  } else if (MIN_ROWS_COL < countOfRow) {
    buttonAppendRow.disabled = false;
    trLast.remove();
  }
});

let countofCol = 0;

const allTrsforCol = tbody.lastElementChild.querySelectorAll('td');

allTrsforCol.forEach(() => {
  ++countofCol;
});

buttonAppendColumn.addEventListener('click', () => {
  const allTrs = tableField.querySelectorAll('tr');

  ++countofCol;

  if (MAX_ROWS_COL === countofCol) {
    allTrs.forEach((tr) => {
      const td = document.createElement('td');

      tr.append(td);
    });

    buttonAppendColumn.disabled = true;
  } else if (MAX_ROWS_COL < countofCol) {
    buttonAppendColumn.disabled = true;
  } else if (MAX_ROWS_COL > countofCol) {
    buttonRemoveColumn.disabled = false;

    allTrs.forEach((tr) => {
      const td = document.createElement('td');

      tr.append(td);
    });
  }
});

buttonRemoveColumn.addEventListener('click', () => {
  countofCol--;

  const allTrs = tableField.querySelectorAll('tr');

  if (MIN_ROWS_COL === countofCol) {
    allTrs.forEach((tr) => {
      const lastTd = tr.lastElementChild;

      lastTd.remove();
    });

    buttonRemoveColumn.disabled = true;
  } else if (MIN_ROWS_COL > countofCol) {
    buttonRemoveColumn.disabled = true;
  } else if (MIN_ROWS_COL < countofCol) {
    buttonAppendColumn.disabled = false;

    allTrs.forEach((tr) => {
      const lastTd = tr.lastElementChild;

      lastTd.remove();
    });
  }
});
