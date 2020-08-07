'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const MIN_SIZE = 2;
const MAX_SIZE = 10;

const table = document.querySelector('.field');

const deleteRow = (event) => {
  const target = event.target;

  table.deleteRow(table.rows.length - 1);
  appendRow.disabled = false;
  target.disabled = table.rows.length === MIN_SIZE;
};

const deleteColumn = (event) => {
  const target = event.target;
  const lastCell = table.rows[0].cells.length - 1;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(lastCell);
  }

  appendColumn.disabled = false;
  target.disabled = table.rows[0].cells.length === MIN_SIZE;
};

const addRow = (event) => {
  const target = event.target;

  const newRow = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.append(document.createElement('td'));
  }

  table.append(newRow);
  removeRow.disabled = false;
  target.disabled = table.rows.length === MAX_SIZE;
};

const addColumn = (event) => {
  const target = event.target;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].append(document.createElement('td'));
  }

  removeColumn.disabled = false;
  target.disabled = table.rows[0].cells.length === MAX_SIZE;
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
