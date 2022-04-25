'use strict';

const page = document.querySelector('.container');
const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const startCount = 4;
const maxLength = 10;
const minLength = 2;

let countOfRows = startCount;
let countOfColumns = startCount;

const changesSize = (button) => {
  const row = tBody.lastElementChild;
  const rows = [...table.rows];

  switch (button) {
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

  addRowButton.disabled = countOfRows === maxLength;
  removeRowButton.disabled = countOfRows === minLength;
  addColumnButton.disabled = countOfColumns === maxLength;
  removeColumnButton.disabled = countOfColumns === minLength;
};

page.addEventListener('click', e => {
  const activeButton = e.target.matches('.button');

  if (!activeButton) {
    return;
  }

  changesSize(e.target.classList[0]);
});
