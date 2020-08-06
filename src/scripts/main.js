'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');

const deleteRow = (event) => {
  const item = event.target;
  const minLength = 2;

  table.deleteRow(table.rows.length - 1);
  appendRow.disabled = false;

  if (table.rows.length === minLength) {
    item.disabled = true;
  }
};

const deleteColumn = (event) => {
  const item = event.target;
  const minLength = 2;
  const lastCell = table.rows[0].cells.length - 1;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(lastCell);
  }

  appendColumn.disabled = false;

  if (table.rows[0].cells.length === minLength) {
    item.disabled = true;
  }
};

const addRow = (event) => {
  const item = event.target;
  const maxLength = 10;

  const newRow = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.append(document.createElement('td'));
  }

  table.append(newRow);
  removeRow.disabled = false;

  if (table.rows.length === maxLength) {
    item.disabled = true;
  }
};

const addColumn = (event) => {
  const item = event.target;
  const maxLength = 10;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].append(document.createElement('td'));
  }

  removeColumn.disabled = false;

  if (table.rows[0].cells.length === maxLength) {
    item.disabled = true;
  }
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
