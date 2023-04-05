'use strict';

const tableBody = document.querySelector('tbody');
const tableItems = tableBody.querySelectorAll('tr');

const maxItems = 10;
const minItems = 2;

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', e => {
  e.preventDefault();

  const currentItems = tableBody.children.length + 1;

  if (currentItems >= maxItems) {
    addRow.disabled = true;
  }

  tableBody.append(tableBody.firstChild.cloneNode(true));
  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  e.preventDefault();

  const currentItems = tableBody.children.length - 1;

  if (currentItems <= minItems) {
    removeRow.disabled = true;
  }

  tableBody.lastElementChild.remove();
  addRow.disabled = false;
});

addColumn.addEventListener('click', e => {
  e.preventDefault();

  for (const element of tableItems) {
    const newColumn = document.createElement('td');
    const currentItems = element.children.length + 1;

    if (currentItems >= maxItems) {
      addColumn.disabled = true;
    }

    element.append(newColumn);
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', e => {
  e.preventDefault();

  for (const element of tableItems) {
    const currentItems = element.children.length - 1;

    if (currentItems <= minItems) {
      removeColumn.disabled = true;
    }

    element.lastElementChild.remove();
    addColumn.disabled = false;
  }
});
