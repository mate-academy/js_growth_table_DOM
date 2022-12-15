'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('table').firstElementChild;
const rows = document.getElementsByTagName('tr');

addRow.addEventListener('click', () => {
  field.append(field.firstElementChild.cloneNode(true));

  if (rows.length >= 10) {
    addRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  field.firstElementChild.remove();

  if (rows.length <= 2) {
    removeRow.disabled = true;
  }

  addRow.disabled = false;
});

addColumn.addEventListener('click', () => {
  for (const child of field.children) {
    child.append(child.firstElementChild.cloneNode(true));
  }

  if (rows[0].children.length >= 10) {
    addColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  for (const child of field.children) {
    child.firstElementChild.remove();
  }

  if (rows[0].children.length <= 2) {
    removeColumn.disabled = true;
  }

  addColumn.disabled = false;
});
