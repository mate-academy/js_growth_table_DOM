'use strict';

const table = document.querySelector('table');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const max = 10;
const min = 2;

addRow.addEventListener('click', () => {
  const newRow = table.insertRow(-1);

  for (let i = 0; i < table.rows[0].children.length; i++) {
    newRow.insertCell(i);
  }

  addRow.disabled = table.rows.length === max;
});

addColumn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(-1);
  }

  addColumn.disabled = table.rows[0].children.length === max;
});

removeRow.addEventListener('click', () => {
  table.rows[table.rows.length - 1].remove();

  removeRow.disabled = table.rows.length === min;
  addRow.disabled = false;
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].lastElementChild.remove();
  }

  removeColumn.disabled = table.rows[0].children.length === min;
  addColumn.disabled = false;
});
