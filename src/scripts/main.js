'use strict';

const table = document.querySelector('tbody');
let rows = table.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

appendRow.addEventListener('click', () => {
  table.append(rows[0].cloneNode(true));

  rows = table.querySelectorAll('tr');

  if (rows.length >= maxCount) {
    appendRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  rows = table.querySelectorAll('tr');

  if (rows.length <= minCount) {
    removeRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  rows.forEach(row => {
    row.append(document.createElement('td'));

    if (row.childElementCount >= maxCount) {
      appendColumn.disabled = true;
    } else {
      removeColumn.disabled = false;
    }
  });
});

removeColumn.addEventListener('click', () => {
  rows.forEach(row => {
    row.lastElementChild.remove();

    if (row.childElementCount <= minCount) {
      removeColumn.disabled = true;
    } else {
      appendColumn.disabled = false;
    }
  });
});
