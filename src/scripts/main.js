'use strict';

const max = 10;
const min = 2;

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let countOfColumns = table.querySelector('tr').children.length;
let countOfRows = table.querySelectorAll('tr').length;

appendRow.addEventListener('click', (e) => {
  removeRow.disabled = false;

  const newRow = document.createElement('tr');

  for (let i = 0; i < countOfColumns; i++) {
    newRow.append(document.createElement('td'));
  }

  table.append(newRow);
  countOfRows++;

  if (countOfRows === max) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', (e) => {
  appendRow.disabled = false;

  table.querySelectorAll('tr')[countOfRows - 1].remove();
  countOfRows--;

  if (countOfRows === min) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (e) => {
  removeColumn.disabled = false;

  const allTr = table.querySelectorAll('tr');

  for (const tr of allTr) {
    tr.append(document.createElement('td'));
  }

  countOfColumns++;

  if (countOfColumns === max) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', (e) => {
  appendColumn.disabled = false;

  const allTr = table.querySelectorAll('tr');

  for (const tr of allTr) {
    tr.lastElementChild.remove();
  }

  countOfColumns--;

  if (countOfColumns === min) {
    removeColumn.disabled = true;
  }
});
