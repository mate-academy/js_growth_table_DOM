'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let tableRow = document.querySelectorAll('tr');

const maxCount = 10;
const minCount = 2;

let countRow = tableRow.length;
let countColumn = tableRow[0].children.length;

appendRow.addEventListener('click', e => {
  if (countRow < maxCount) {
    countRow++;
    removeRow.disabled = false;

    tableRow = document.querySelectorAll('tr');

    const clone = tableRow[0].cloneNode(true);

    tableRow[tableRow.length - 1].after(clone);

    if (countRow === maxCount) {
      appendRow.disabled = true;
    }
  }
});

removeRow.addEventListener('click', e => {
  if (countRow > minCount) {
    countRow--;
    appendRow.disabled = false;

    tableRow = document.querySelectorAll('tr');

    tableRow[tableRow.length - 1].remove();

    if (countRow === minCount) {
      removeRow.disabled = true;
    }
  }
});

appendColumn.addEventListener('click', e => {
  if (countColumn < maxCount) {
    countColumn++;
    removeColumn.disabled = false;

    tableRow = document.querySelectorAll('tr');

    for (const row of tableRow) {
      const clone = tableRow[0].firstElementChild.cloneNode(true);

      row.append(clone);
    }

    if (countColumn === maxCount) {
      appendColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', e => {
  if (countColumn > minCount) {
    countColumn--;
    appendColumn.disabled = false;

    tableRow = document.querySelectorAll('tr');

    for (const row of tableRow) {
      row.lastElementChild.remove();
    }

    if (countColumn === minCount) {
      removeColumn.disabled = true;
    }
  }
});
