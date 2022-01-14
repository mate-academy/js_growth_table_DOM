'use strict';

const maxRow = 10;
const maxColumn = 10;
const minRow = 2;
const minColumn = 2;

let countRow = 4;
let countColumn = 4;

const appendRowButton = document.querySelector('.append-row.button');
const removeRowButton = document.querySelector('.remove-row.button');
const appendColumnButton = document.querySelector('.append-column.button');
const removeColumnButton = document.querySelector('.remove-column.button');

document.addEventListener('click', (e) => {
  if (!e.target.className.includes('button')) {
    return;
  };

  const field = document.querySelector('.field');

  /* -------------appendRow------------ */
  if (e.target === appendRowButton) {
    const count = field.querySelector('tr').children.length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < count; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    field.append(newRow);
    countRow++;

    if (countRow === maxRow) {
      appendRowButton.disabled = true;
    }

    if (removeRowButton.disabled === true && countRow > minRow) {
      removeRowButton.disabled = false;
    }
  }

  /* -------------removeRow------------ */

  if (e.target === removeRowButton) {
    const oneRow = field.querySelector('tr');

    oneRow.remove();
    countRow--;

    if (countRow === minRow) {
      removeRowButton.disabled = true;
    }

    if (appendRowButton.disabled === true && countRow < maxRow) {
      appendRowButton.disabled = false;
    }
  }

  /* -------------appendColumn------------ */

  if (e.target === appendColumnButton) {
    const allRows = field.querySelectorAll('tr');

    for (let i = 0; i < allRows.length; i++) {
      const newCell = document.createElement('td');

      allRows[i].append(newCell);
    }
    countColumn++;

    if (countColumn === maxColumn) {
      appendColumnButton.disabled = true;
    }

    if (removeColumnButton.disabled === true && countColumn > minRow) {
      removeColumnButton.disabled = false;
    }
  }

  /* -------------removeColumn------------ */

  if (e.target === removeColumnButton) {
    const allRows = field.querySelectorAll('tr');

    for (let i = 0; i < allRows.length; i++) {
      const oneCell = allRows[i].querySelector('td');

      oneCell.remove();
    }
    countColumn--;

    if (countColumn === minColumn) {
      removeColumnButton.disabled = true;
    }

    if (appendColumnButton.disabled === true && countColumn < maxColumn) {
      appendColumnButton.disabled = false;
    }
  };
});
