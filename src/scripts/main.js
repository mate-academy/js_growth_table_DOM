'use strict';

const table = document.querySelector('.field').tBodies[0];
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', function() {
  if (table.children.length !== 10) {
    const row = table.children[0].cloneNode(true);

    table.append(row);

    if (table.children.length !== 2) {
      removeRow.disabled = false;
    }

    if (table.children.length === 10) {
      addRow.disabled = true;
    }
  }
});

removeRow.addEventListener('click', function() {
  if (table.children.length !== 2) {
    table.lastElementChild.remove();

    if (table.children.length === 2) {
      removeRow.disabled = true;
    }

    if (table.children.length !== 10) {
      addRow.disabled = false;
    }
  }
});

addColumn.addEventListener('click', function() {
  if (table.children[0].children.length !== 10) {
    for (const row of table.children) {
      const cell = row.firstElementChild.cloneNode(true);

      row.append(cell);
    }

    if (table.children[0].children.length !== 2) {
      removeColumn.disabled = false;
    }

    if (table.children[0].children.length === 10) {
      addColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', function() {
  if (table.children[0].children.length !== 2) {
    for (const row of table.children) {
      row.firstElementChild.remove();
    }

    if (table.children[0].children.length === 2) {
      removeColumn.disabled = true;
    }

    if (table.children[0].children.length !== 10) {
      addColumn.disabled = false;
    }
  }
});
