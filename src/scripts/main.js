'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const button = e.target.closest('button');

  if (!button) {
    return;
  }

  const rows = document.querySelectorAll('tr');
  const singleRow = rows[0].cloneNode(true);
  const [ firstClass ] = button.classList;
  const maxLength = 10;
  const minLength = 2;

  let rowsLength = rows.length;

  switch (firstClass) {
    case 'append-row':
      tbody.append(singleRow);
      rowsLength++;
      break;

    case 'remove-row':
      tbody.lastElementChild.remove();
      rowsLength--;
      break;

    case 'append-column':
      rows.forEach(
        row => row.append(singleRow.lastElementChild.cloneNode(true)));
      break;

    case 'remove-column':
      rows.forEach(
        row => row.lastElementChild.remove());
      break;

    default:
      break;
  }

  removeColumn.disabled = rows[0].childElementCount === minLength;
  appendColumn.disabled = rows[0].childElementCount === maxLength;
  removeRow.disabled = rowsLength === minLength;
  appendRow.disabled = rowsLength === maxLength;
});
