'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

const maxSize = 10;
const minSize = 2;

addRow.addEventListener('click', () => {
  table.appendChild(table.lastElementChild.cloneNode(true));

  if (table.children.length === maxSize) {
    addRow.disabled = true;
  }

  if (table.children.length > minSize) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.children.length === minSize) {
    removeRow.disabled = true;
  }

  if (table.children.length < maxSize) {
    addRow.disabled = false;
  }
});

addColumn.addEventListener('click', () => {
  for (const row of table.children) {
    row.append(row.lastElementChild.cloneNode(true));
  };

  if (table.firstElementChild.children.length === maxSize) {
    addColumn.disabled = true;
  }

  if (table.firstElementChild.children.length > minSize) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  for (const row of table.children) {
    row.lastElementChild.remove();
  };

  if (table.firstElementChild.children.length === minSize) {
    removeColumn.disabled = true;
  }

  if (table.firstElementChild.children.length < maxSize) {
    addColumn.disabled = false;
  }
});
