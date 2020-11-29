'use strict';

const field = document.querySelector('.field').tBodies[0];

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxSize = 10;
const minSize = 2;

let rowSize = field.querySelectorAll('tr').length;
let columnSize = field.querySelector('tr').querySelectorAll('td').length;

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

function appendRow() {
  const row = `
  <tr>
    ${'<td></td>'.repeat(columnSize)}
  </tr>
  `;

  field.insertAdjacentHTML('beforeend', row);
  removeRowButton.disabled = false;
  rowSize++;

  if (rowSize === maxSize) {
    appendRowButton.disabled = true;
  }
}

function removeRow() {
  field.lastElementChild.remove();

  appendRowButton.disabled = false;
  rowSize--;

  if (rowSize === minSize) {
    removeRowButton.disabled = true;
  }
}

function appendColumn() {
  const rows = field.querySelectorAll('tr');

  for (const row of rows) {
    row.insertAdjacentHTML('beforeend', '<td></td>');
  }

  removeColumnButton.disabled = false;
  columnSize++;

  if (columnSize === maxSize) {
    appendColumnButton.disabled = true;
  }
}

function removeColumn() {
  const rows = field.querySelectorAll('tr');

  for (const row of rows) {
    row.lastElementChild.remove();
  }

  appendColumnButton.disabled = false;
  columnSize--;

  if (columnSize === minSize) {
    removeColumnButton.disabled = true;
  }
}
