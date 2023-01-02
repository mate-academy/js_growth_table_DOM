'use strict';

const field = document.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const min = 2;
const max = 10;

let currentRows = field.rows.length;
let currentColumns = field.rows[0].cells.length;

const appendRow = () => {
  if (currentRows === min) {
    removeRowButton.toggleAttribute('disabled');
  }

  field.append(field.rows[0].cloneNode(true));
  currentRows++;

  if (currentRows === max) {
    appendRowButton.toggleAttribute('disabled');
  }
};

const removeRow = () => {
  if (currentRows === max) {
    appendRowButton.toggleAttribute('disabled');
  }

  field.rows[0].remove();

  currentRows--;

  if (currentRows === min) {
    removeRowButton.toggleAttribute('disabled');
  }
};

const appendColumn = () => {
  if (currentColumns === min) {
    removeColumnButton.toggleAttribute('disabled');
  }

  [...field.rows].forEach(row => row.append(row.cells[0].cloneNode(true)));

  currentColumns++;

  if (currentColumns === max) {
    appendColumnButton.toggleAttribute('disabled');
  }
};

const removeColumn = () => {
  if (currentColumns === max) {
    appendColumnButton.toggleAttribute('disabled');
  }

  [...field.rows].forEach(row => row.cells[0].remove());

  currentColumns--;

  if (currentColumns === min) {
    removeColumnButton.toggleAttribute('disabled');
  }
};

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
