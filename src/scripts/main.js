'use strict';

const fields = document.querySelector('.field');

const rowPlus = document.querySelector('.append-row');
const rowMinus = document.querySelector('.remove-row');
const columnPlus = document.querySelector('.append-column');
const columnMinus = document.querySelector('.remove-column');

let countRows = 4;
let countColumns = 4;

rowPlus.addEventListener('click', (event) => {
  rowMinus.disabled = false;

  fields.children[0].lastElementChild.after(fields.children[0]
    .lastElementChild.cloneNode(true));
  countRows++;

  if (countRows >= 10) {
    rowPlus.disabled = true;
  }
});

rowMinus.addEventListener('click', (event) => {
  rowPlus.disabled = false;

  fields.children[0].lastElementChild.remove();
  countRows--;

  if (countRows <= 2) {
    rowMinus.disabled = true;
  }
});

columnPlus.addEventListener('click', (event) => {
  columnMinus.disabled = false;

  [...fields.children[0].children].forEach(el => {
    el.lastElementChild.after(el.lastElementChild.cloneNode(true));
  });
  countColumns++;

  if (countColumns >= 10) {
    columnPlus.disabled = true;
  }
});

columnMinus.addEventListener('click', (event) => {
  columnPlus.disabled = false;

  [...fields.children[0].children].forEach(el => {
    el.lastElementChild.remove();
  });
  countColumns--;

  if (countColumns <= 2) {
    columnMinus.disabled = true;
  }
});
