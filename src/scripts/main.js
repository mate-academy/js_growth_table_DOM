'use strict';

const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const table = document.querySelector('.field');
const tr = document.querySelector('tr');
const MIN_ROWS = 2;
const MAX_ROWS = 10;
const MIN_COLS = 2;
const MAX_COLS = 10;
let numRows = table.firstElementChild.children.length;
let numCols = table.firstElementChild.children[0].children.length;

addRowBtn.addEventListener('click', () => {
  if (numRows < MAX_ROWS) {
    const row = tr.cloneNode('deep');

    table.firstElementChild.append(row);
  }

  numRows = table.firstElementChild.children.length;

  if (numRows > MIN_ROWS && removeRowBtn.hasAttribute('disabled')) {
    removeRowBtn.removeAttribute('disabled');
  }

  if (numRows === MAX_ROWS && !addRowBtn.hasAttribute('disabled')) {
    addRowBtn.setAttribute('disabled', 'disabled');
  }
});

removeRowBtn.addEventListener('click', () => {
  table.firstElementChild.lastElementChild.remove();

  numRows = table.firstElementChild.children.length;

  if (numRows < MAX_ROWS && addRowBtn.hasAttribute('disabled')) {
    addRowBtn.removeAttribute('disabled');
  }

  if (numRows === MIN_ROWS && !removeRowBtn.hasAttribute('disabled')) {
    removeRowBtn.setAttribute('disabled', 'disabled');
  }
});

addColumnBtn.addEventListener('click', () => {
  if (numCols < MAX_COLS) {
    [...table.firstElementChild.children].forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
      numCols = table.firstElementChild.children[0].children.length;
    });
  }

  if (numCols > MIN_COLS && removeColumnBtn.hasAttribute('disabled')) {
    removeColumnBtn.removeAttribute('disabled');
  }

  if (numCols === MAX_COLS && !addColumnBtn.hasAttribute('disabled')) {
    addColumnBtn.setAttribute('disabled', 'disabled');
  }
});

removeColumnBtn.addEventListener('click', () => {
  [...table.firstElementChild.children].forEach((row) => {
    row.lastElementChild.remove();
  });

  numCols = table.firstElementChild.children[0].children.length;

  if (numCols < MAX_COLS && addColumnBtn.hasAttribute('disabled')) {
    addColumnBtn.removeAttribute('disabled');
  }

  if (numCols === MIN_COLS && !removeColumnBtn.hasAttribute('disabled')) {
    removeColumnBtn.setAttribute('disabled', 'disabled');
  }
});
