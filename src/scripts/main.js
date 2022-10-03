'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rows = document.querySelector('.field').rows;

appendRow.addEventListener('click', (e) => {
  rows[rows.length - 1].after(rows[rows.length - 1].cloneNode(true));

  if (rows.length === 10) {
    appendRow.disabled = true;
  }

  if (rows.length === 3) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  rows[rows.length - 1].remove();

  if (rows.length === 2) {
    removeRow.disabled = true;
  }

  if (rows.length === 9) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', (e) => {
  [...rows].forEach(row =>
    row.lastElementChild.after(row.lastElementChild.cloneNode(true)));

  if (rows[0].cells.length === 10) {
    appendColumn.disabled = true;
  }

  if (rows[0].cells.length === 3) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', (e) => {
  [...rows].forEach(row => row.lastElementChild.remove());

  if (rows[0].cells.length === 2) {
    removeColumn.disabled = true;
  }

  if (rows[0].cells.length === 9) {
    appendColumn.disabled = false;
  }
});
