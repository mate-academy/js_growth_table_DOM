'use strict';

const table = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

addRow.addEventListener('click', (e) => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length === maxCount) {
    addRow.disabled = true;
  }

  if (table.children.length > minCount) {
    delRow.disabled = false;
  }
});

delRow.addEventListener('click', (e) => {
  table.lastElementChild.remove();

  if (table.children.length === minCount) {
    delRow.disabled = true;
  }

  if (table.children.length < maxCount) {
    addRow.disabled = false;
  }
});

addColumn.addEventListener('click', (e) => {
  for (const el of table.rows) {
    el.append(el.lastElementChild.cloneNode(true));
  }

  if (table.firstElementChild.children.length === maxCount) {
    addColumn.disabled = true;
  }

  if (table.firstElementChild.children.length > minCount) {
    delColumn.disabled = false;
  }
});

delColumn.addEventListener('click', (e) => {
  for (const el of table.rows) {
    el.lastElementChild.remove();
  }

  if (table.firstElementChild.children.length === minCount) {
    delColumn.disabled = true;
  }

  if (table.firstElementChild.children.length < maxCount) {
    addColumn.disabled = false;
  }
});
