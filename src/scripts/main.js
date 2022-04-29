'use strict';

const buttons = document.querySelector('div');
const table = document.querySelector('table');
let countOfRows = 4;
let countOfColumns = 4;

buttons.addEventListener('click', e => {
  const button = e.target.closest('button');

  if (button && button.className === 'append-row button') {
    table.firstElementChild.append(table.rows[0].cloneNode(true));
    countOfRows++;
  }

  if (button && button.className === 'remove-row button') {
    table.rows[0].remove();
    countOfRows--;
  }

  if (button && button.className === 'append-column button') {
    [...table.rows].map(
      oneRow => oneRow.append(oneRow.firstElementChild.cloneNode(true))
    );
    countOfColumns++;
  }

  if (button && button.className === 'remove-column button') {
    [...table.rows].map(
      oneRow => oneRow.firstElementChild.remove()
    );
    countOfColumns--;
  }

  document.querySelector('.append-row').disabled = countOfRows === 10;
  document.querySelector('.remove-row').disabled = countOfRows === 2;
  document.querySelector('.append-column').disabled = countOfColumns === 10;
  document.querySelector('.remove-column').disabled = countOfColumns === 2;
});
