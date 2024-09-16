'use strict';

const plusRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const plusColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const allRows = document.querySelector('tbody');

function checkRowLines(elementON, elementOFF, lineToCheck, on, off) {
  if (lineToCheck === off) {
    elementOFF.toggleAttribute('disabled');
  }

  if (lineToCheck === on) {
    elementON.toggleAttribute('disabled');
  }
}

plusRow.addEventListener('click', () => {
  const rowLine = allRows.firstElementChild.cloneNode(true);

  allRows.prepend(rowLine);

  checkRowLines(
    removeRow,
    plusRow,
    allRows.childElementCount,
    3, 10);
});

removeRow.addEventListener('click', () => {
  allRows.firstElementChild.remove();

  checkRowLines(
    plusRow,
    removeRow,
    allRows.childElementCount,
    9, 2);
});

plusColumn.addEventListener('click', () => {
  for (const row of allRows.rows) {
    const columnCell = document.createElement('td');

    row.append(columnCell);
  }

  checkRowLines(
    removeColumn,
    plusColumn,
    allRows.firstChild.childElementCount,
    3, 10);
});

removeColumn.addEventListener('click', () => {
  for (const row of allRows.rows) {
    row.lastElementChild.remove();
  }

  checkRowLines(
    plusColumn,
    removeColumn,
    allRows.firstChild.childElementCount,
    9, 2);
});
