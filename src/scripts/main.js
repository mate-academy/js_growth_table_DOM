'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.querySelector('.container').addEventListener('click', e => {
  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;
  appendColumn.disabled = table.rows[0].cells.length >= 10;
  removeColumn.disabled = table.rows[0].cells.length <= 2;
});

appendRow.addEventListener('click', e => {
  table.firstElementChild.append(table.rows[table.rows.length - 1]
    .cloneNode(true));
});

removeRow.addEventListener('click', e => {
  table.rows[table.rows.length - 1].remove();
});

appendColumn.addEventListener('click', e => {
  [...document.querySelectorAll('tr')].forEach(item => {
    item.append(document.createElement('td'));
  });
});

removeColumn.addEventListener('click', e => {
  [...document.querySelectorAll('tr')].forEach(item => {
    item.cells[item.cells.length - 1].remove();
  });
});
