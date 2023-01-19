'use strict';

const table = document.querySelector('.field tbody');
let rows = table.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const newRow = rows[rows.length - 1].cloneNode(true);

  table.append(newRow);

  rows = table.querySelectorAll('tr');

  rows.length >= 10
    ? (appendRow.disabled = true)
    : (removeRow.disabled = '');
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  rows = table.querySelectorAll('tr');

  rows.length <= 2
    ? (removeRow.disabled = true)
    : (appendRow.disabled = '');
});

appendColumn.addEventListener('click', () => {
  rows.forEach(row => {
    const newColumn = document.createElement('td');

    row.appendChild(newColumn);

    row.childElementCount >= 10
      ? appendColumn.disabled = true
      : removeColumn.disabled = '';
  });
});

removeColumn.addEventListener('click', () => {
  rows.forEach(row => {
    row.lastElementChild.remove();

    row.childElementCount <= 2
      ? removeColumn.disabled = true
      : appendColumn.disabled = '';
  });
});
