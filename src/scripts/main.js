'use strict';

const page = document.querySelector('.container');
const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const startCount = 4;
let countOfRows = startCount;
let countOfColumns = startCount;

page.addEventListener('click', e => {
  const activeButton = e.target.matches('.button');

  if (!activeButton) {
    return;
  }

  const row = tBody.lastElementChild;
  const rows = [...table.rows];

  switch (e.target.classList[0]) {
    case 'append-row':
      tBody.append(row.cloneNode(true));
      countOfRows++;
      break;
    case 'remove-row':
      row.remove();
      countOfRows--;
      break;
    case 'append-column':
      rows.forEach(r => r.append(r.lastElementChild.cloneNode(true)));
      countOfColumns++;
      break;
    case 'remove-column':
      rows.forEach(r => r.lastElementChild.remove());
      countOfColumns--;
      break;
  }

  switch (!!countOfRows) {
    case countOfRows === 10:
      addRowButton.disabled = true;
      break;
    case countOfRows === 2:
      removeRowButton.disabled = true;
      break;
    default:
      addRowButton.disabled = null;
      removeRowButton.disabled = null;
  }

  switch (!!countOfColumns) {
    case countOfColumns === 10:
      addColumnButton.disabled = true;
      break;
    case countOfColumns === 2:
      removeColumnButton.disabled = true;
      break;
    default:
      addColumnButton.disabled = null;
      removeColumnButton.disabled = null;
  }
});
