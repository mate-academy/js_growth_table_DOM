'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', (evnt) => {
  if (table.children[0].children.length >= 10) {
    return;
  }

  removeRow.disabled = false;
  table.children[0].append(table.querySelector('tr').cloneNode(true));

  if (table.children[0].children.length >= 10) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', (evnt) => {
  if (table.children[0].children.length <= 2) {
    return;
  }

  addRow.disabled = false;
  table.children[0].children[0].remove();

  if (table.children[0].children.length <= 2) {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', (evnt) => {
  for (let i = 0; i < table.children[0].children.length; i++) {
    if (table.children[0]
      .children[i]
      .children
      .length >= 10) {
      return;
    }

    table.children[0]
      .children[i]
      .prepend(table.children[0]
        .children[i]
        .children[0]
        .cloneNode(true));

    removeColumn.disabled = false;

    if (table.children[0]
      .children[i]
      .children
      .length >= 10) {
      addColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', (evnt) => {
  for (let i = 0; i < table.children[0].children.length; i++) {
    if (table.children[0].children[i].children.length <= 2) {
      return;
    }

    addColumn.disabled = false;
    table.children[0].children[i].children[0].remove();

    if (table.children[0].children[i].children.length <= 2) {
      removeColumn.disabled = true;
    }
  }
});
