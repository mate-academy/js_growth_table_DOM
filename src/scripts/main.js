'use strict';

const appendRow = document.querySelector('.append-row');
const delateRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const delateColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

const max = 10;
const min = 2;

appendRow.addEventListener('click', (e) => {
  table.append(table.rows[table.rows.length - 1].cloneNode(true));
  delateRow.disabled = false;

  if (table.rows.length === max) {
    appendRow.disabled = true;
  }
});

delateRow.addEventListener('click', (e) => {
  table.rows[table.rows.length - 1].remove();
  appendRow.disabled = false;

  if (table.rows.length === min) {
    delateRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (e) => {
  [...table.rows].forEach(element => {
    const cell = document.createElement('td');

    element.append(cell);
    delateColumn.disabled = false;

    if (element.cells.length === max) {
      appendColumn.disabled = true;
    }
  });
});

delateColumn.addEventListener('click', (e) => {
  [...table.rows].forEach(element => {
    element.cells[element.cells.length - 1].remove();
    appendColumn.disabled = false;

    if (element.cells.length === min) {
      delateColumn.disabled = true;
    }
  });
});
