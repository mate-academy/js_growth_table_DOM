'use strict';

const MIN_LINES = 2;
const MAX_LINES = 10;

const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  field.firstElementChild.appendChild(field.rows[0].cloneNode(true));
  appendRowButton.disabled = field.rows.length >= MAX_LINES;
  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', () => {
  field.rows[0].outerHTML = '';
  removeRowButton.disabled = field.rows.length <= MIN_LINES;
  appendRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', () => {
  for (const row of field.rows) {
    row.appendChild(document.createElement('td'));
  }
  appendColumnButton.disabled = field.rows[0].cells.length >= MAX_LINES;
  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', () => {
  for (const row of field.rows) {
    row.cells[row.cells.length - 1].outerHTML = '';
  }
  removeColumnButton.disabled = field.rows[0].cells.length <= MIN_LINES;
  appendColumnButton.disabled = false;
});
