'use strict';

const tbody = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', e => {
  const count = tbody.children.length + 1;

  if (count >= 10) {
    addRow.disabled = true;
  }

  removeRow.disabled = false;

  tbody.append(tbody.lastElementChild.cloneNode(true));
});

removeRow.addEventListener('click', e => {
  const count = tbody.children.length - 1;

  if (count <= 2) {
    removeRow.disabled = true;
  }

  addRow.disabled = false;

  tbody.lastElementChild.remove();
});

addColumn.addEventListener('click', e => {
  const count = tbody.children[0].children.length + 1;

  if (count >= 10) {
    addColumn.disabled = true;
  }

  removeColumn.disabled = false;

  [...tbody.children]
    .forEach(el => el.append(el.lastElementChild.cloneNode(true)));
});

removeColumn.addEventListener('click', e => {
  const count = tbody.children[0].children.length - 1;

  if (count <= 2) {
    removeColumn.disabled = true;
  }

  addColumn.disabled = false;

  [...tbody.children].forEach(el => el.lastElementChild.remove());
});
