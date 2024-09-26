'use strict';

const tbody = document.querySelector('tbody');
let rows = tbody.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const newRow = rows[rows.length - 1].cloneNode(true);

  tbody.append(newRow);

  rows = tbody.querySelectorAll('tr');

  rows.length >= 10
    ? (appendRow.disabled = true)
    : (removeRow.disabled = '');
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

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  rows = tbody.querySelectorAll('tr');

  rows.length <= 2
    ? (removeRow.disabled = true)
    : (appendRow.disabled = '');
});

removeColumn.addEventListener('click', () => {
  rows.forEach(row => {
    row.lastElementChild.remove();

    row.childElementCount <= 2
      ? removeColumn.disabled = true
      : appendColumn.disabled = '';
  });
});
