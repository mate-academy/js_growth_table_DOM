'use strict';

// write code here
const min = 2;
const max = 10;

const table = document.querySelector('.field');
let rows = table.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const newRow = rows[rows.length - 1].cloneNode(true);

  table.append(newRow);

  rows = table.querySelectorAll('tr');

  rows.length >= max
    ? (appendRow.disabled = true)
    : (removeRow.disabled = '');
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  rows = table.querySelectorAll('tr');

  rows.length <= min
    ? (removeRow.disabled = true)
    : (appendRow.disabled = '');
});

appendColumn.addEventListener('click', () => {
  rows.forEach(row => {
    const newColumn = document.createElement('td');

    row.appendChild(newColumn);

    row.childElementCount >= max
      ? appendColumn.disabled = true
      : removeColumn.disabled = '';
  });
});

removeColumn.addEventListener('click', () => {
  rows.forEach(row => {
    row.lastElementChild.remove();

    row.childElementCount <= min
      ? appendColumn.disabled = true
      : removeColumn.disabled = '';
  });
});
