'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

addRow.addEventListener('click', e => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length >= 10) {
    addRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  table.lastElementChild.remove();

  if (table.children.length <= 2) {
    removeRow.disabled = true;
  }

  addRow.disabled = false;
});

addColumn.addEventListener('click', e => {
  [...table.children].forEach(el => {
    el.append(el.lastElementChild.cloneNode(true));
  });

  if (table.firstChild.children.length >= 10) {
    addColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  [...table.children].forEach(el => {
    el.lastElementChild.remove();
  });

  if (table.firstChild.children.length <= 2) {
    removeColumn.disabled = true;
  }

  addColumn.disabled = false;
});
