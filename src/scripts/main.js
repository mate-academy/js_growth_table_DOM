'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const table = document.querySelector('.field').tBodies[0];

const maxLength = 10;
const minLength = 2;

function updateButtonState() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= maxLength;
  removeRowButton.disabled = rowsCount <= minLength;
  appendColumnButton.disabled = columnsCount >= maxLength;
  removeColumnButton.disabled = columnsCount <= minLength;
}

appendRowButton.addEventListener('click', e => {
  table.append(table.lastElementChild.cloneNode(true));

  updateButtonState();
});

removeRowButton.addEventListener('click', e => {
  table.lastElementChild.remove();

  updateButtonState();
});

appendColumnButton.addEventListener('click', e => {
  for (const row of table.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  updateButtonState();
});

removeColumnButton.addEventListener('click', e => {
  for (const row of table.rows) {
    row.lastElementChild.remove();
  }

  updateButtonState();
});
