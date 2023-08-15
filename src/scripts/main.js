'use strict';

const container = document.querySelector('.container');
const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');
const table = document.querySelector('.field').tBodies[0];

const maxLength = 10;
const minLength = 2;

container.addEventListener('click', e => {
  if (e.target === addRow) {
    table.append(table.lastElementChild.cloneNode(true));
  }

  if (e.target === remRow) {
    table.lastElementChild.remove();
  }

  if (e.target === addCol) {
    [...table.rows].forEach(tr => {
      tr.append(tr.lastElementChild.cloneNode(true));
    });
  }

  if (e.target === remCol) {
    [...table.rows].forEach(tr => {
      tr.lastElementChild.remove();
    });
  }

  addRow.disabled = table.rows.length >= maxLength;
  remRow.disabled = table.rows.length <= minLength;
  addCol.disabled = table.rows[0].children.length >= maxLength;
  remCol.disabled = table.rows[0].children.length <= minLength;
});
