'use strict';

const MAX = 10;
const MIN = 2;

const field = document.querySelector('.field');
const [appendRow, removeRow, appendColumn, removeColumn]
  = document.querySelectorAll('.button');

appendColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length >= MAX - 1) {
    appendColumn.disabled = true;
  }

  for (const row of field.rows) {
    row.append(row.cells[0].cloneNode(true));
  }

  if (field.rows[0].cells.length >= MIN + 1) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length <= MIN + 1) {
    removeColumn.disabled = true;
  }

  for (const row of field.rows) {
    row.cells[0].remove();
  }

  if (field.rows[0].cells.length <= MAX - 1) {
    appendColumn.disabled = false;
  }
});

appendRow.addEventListener('click', () => {
  if (field.rows.length >= MAX - 1) {
    appendRow.disabled = true;
  }

  field.append(field.rows[0].cloneNode(true));

  if (field.rows.length >= MIN + 1) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (field.rows.length <= MIN + 1) {
    removeRow.disabled = true;
  }

  field.rows[0].remove();

  if (field.rows.length <= MAX - 1) {
    appendRow.disabled = false;
  }
});
