'use strict';

const table = document.querySelector('.field')
  .children[0];

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;
  appendRow.disabled = false;

  if (table.children.length < 10) {
    table.append(table.children[0].cloneNode(true));

    if (table.children.length === 10) {
      appendRow.disabled = true;
    }
  }
});

removeRow.addEventListener('click', () => {
  removeRow.disabled = false;
  appendRow.disabled = false;

  if (table.children.length > 2) {
    table.firstChild.remove();

    if (table.children.length === 2) {
      removeRow.disabled = true;
    }
  }
});

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendColumn.addEventListener('click', () => {
  appendColumn.disabled = false;
  removeColumn.disabled = false;

  const tableCollums = table.children[0].children;

  if (tableCollums.length < 10) {
    for (const item of [...table.children]) {
      item.append(item.children[0].cloneNode(true));
    }

    if (tableCollums.length === 10) {
      appendColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;
  removeColumn.disabled = false;

  const tableCollums = table.children[0].children;

  if (tableCollums.length > 2) {
    for (const item of [...table.children]) {
      item.firstChild.remove();
    }

    if (tableCollums.length === 2) {
      removeColumn.disabled = true;
    }
  }
});
