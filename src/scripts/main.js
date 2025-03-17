'use strict';

const minSize = 2;
const maxSize = 10;

const table = document.querySelector('.field');

const newRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');

const newCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');

newCol.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(-1).innerHTML = '';
  }

  if (table.rows[0].cells.length === maxSize) {
    newCol.disabled = true;
  }

  if (delCol.disabled === true) {
    delCol.disabled = false;
  }
});

delCol.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }

  if (table.rows[0].cells.length === minSize) {
    delCol.disabled = true;
  }

  if (newCol.disabled === true) {
    newCol.disabled = false;
  }
});

newRow.addEventListener('click', () => {
  const addRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    addRow.insertCell(-1).innerHTML = '';
  }

  if (table.rows.length === maxSize) {
    newRow.disabled = true;
  }

  if (delRow.disabled === true) {
    delRow.disabled = false;
  }
});

delRow.addEventListener('click', () => {
  table.deleteRow(-1);

  if (table.rows.length === minSize) {
    delRow.disabled = true;
  }

  if (newRow.disabled === true) {
    newRow.disabled = false;
  }
});
