'use strict';

const addRow = document.querySelector('.append-row');
const addCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

addRow.addEventListener('click', e => {
  table.append(table.lastElementChild.cloneNode(true));
  removeRow.disabled = false;

  if (table.children.length >= 10) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', e => {
  table.lastElementChild.remove();
  addRow.disabled = false;

  if (table.children.length <= 2) {
    removeRow.disabled = true;
  }
});

addCol.addEventListener('click', e => {
  [...table.children].forEach(el => {
    el.append(el.lastElementChild.cloneNode(true));
    removeCol.disabled = false;

    if (table.firstChild.children.length >= 10) {
      addCol.disabled = true;
    }
  });
});

removeCol.addEventListener('click', e => {
  [...table.children].forEach(el => {
    el.lastElementChild.remove();
    addCol.disabled = false;

    if (table.firstChild.children.length <= 2) {
      removeCol.disabled = true;
    }
  });
});
