'use strict';

const field = document.querySelector('.field').tBodies[0];
const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const remColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', e => {
  field.append(field.lastElementChild.cloneNode(true));

  if (field.rows.length >= 10) {
    addRow.disabled = true;
  }

  remRow.disabled = false;
});

remRow.addEventListener('click', e => {
  field.lastElementChild.remove();

  if (field.rows.length <= 2) {
    remRow.disabled = true;
  }

  addRow.disabled = false;
});

addColumn.addEventListener('click', e => {
  for (const row of field.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  const rowsLength = field.rows[0].cells.length;

  if (rowsLength >= 10) {
    addColumn.disabled = true;
  }

  remColumn.disabled = false;
});

remColumn.addEventListener('click', e => {
  for (const row of field.rows) {
    row.lastElementChild.remove();
  }

  const rowsLength = field.rows[0].cells.length;

  if (rowsLength <= 2) {
    remColumn.disabled = true;
  }

  addColumn.disabled = false;
});
