'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');
const maxLength = 10;
const minLength = 2;

appendRow.addEventListener('click', e => {
  tbody.rows[0].after(tbody.rows[0].cloneNode(true));

  if (tbody.rows.length >= maxLength) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  if (tbody.rows.length >= minLength) {
    tbody.rows[0].remove();
  }

  if (tbody.rows.length <= minLength) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', e => {
  let column = {};

  for (const row of [...tbody.rows]) {
    row.children[0].after(row.children[0].cloneNode(true));
    column = { ...row.children };
  };

  if (Object.keys(column).length >= maxLength) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  let column = {};

  for (const row of [...tbody.rows]) {
    row.children[0].remove();
    column = { ...row.children };
  };

  if (Object.keys(column).length <= minLength) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
// write code here
