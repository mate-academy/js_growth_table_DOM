'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelectorAll('.field')[0].children;
const tableRow = table[0].children;

const MAX_COUNT = 10;
const MIN_COUNT = 2;

let countRow = tableRow.length;
let countColumn = tableRow[0].children.length;

appendRow.addEventListener('click', e => {
  if (countRow < MAX_COUNT) {
    countRow++;
    removeRow.disabled = false;

    const clone = tableRow[0].cloneNode(true);

    tableRow[tableRow.length - 1].after(clone);

    if (countRow === MAX_COUNT) {
      appendRow.disabled = true;
    }
  }
});

removeRow.addEventListener('click', e => {
  if (countRow > MIN_COUNT) {
    countRow--;
    appendRow.disabled = false;

    tableRow[tableRow.length - 1].remove();

    if (countRow === MIN_COUNT) {
      removeRow.disabled = true;
    }
  }
});

appendColumn.addEventListener('click', e => {
  if (countColumn < MAX_COUNT) {
    countColumn++;
    removeColumn.disabled = false;

    for (const row of tableRow) {
      const clone = tableRow[0].firstElementChild.cloneNode(true);

      row.append(clone);
    }

    if (countColumn === MAX_COUNT) {
      appendColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', e => {
  if (countColumn > MIN_COUNT) {
    countColumn--;
    appendColumn.disabled = false;

    for (const row of tableRow) {
      row.lastElementChild.remove();
    }

    if (countColumn === MIN_COUNT) {
      removeColumn.disabled = true;
    }
  }
});
