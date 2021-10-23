'use strict';

const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');

addRow.addEventListener('click', () => {
  table.append(table.firstElementChild.cloneNode(true));

  if (table.children.length === 10) {
    addRow.disabled = true;
  }

  if (table.children.length > 2) {
    delRow.disabled = false;
  }
});

delRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.children.length === 2) {
    delRow.disabled = true;
  }

  if (table.children.length < 10) {
    addRow.disabled = false;
  }

  addCol.addEventListener('click', () => {
    for (const row of table.children) {
      row.append(row.lastElementChild.cloneNode(true));
    }

    if (table.firstElementChild.children.length === 10) {
      addCol.disabled = true;
    }

    if (table.firstElementChild.children.length > 2) {
      delCol.disabled = false;
    }
  });

  delCol.addEventListener('click', () => {
    for (const row of table.children) {
      row.lastElementChild.remove();
    };

    if (table.firstElementChild.children.length === 2) {
      delCol.disabled = true;
    }

    if (table.firstElementChild.children.length < 10) {
      addCol.disabled = false;
    }
  });
});
