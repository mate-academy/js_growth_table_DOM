'use strict';

const table = document.querySelector('.container');
const tableBody = document.querySelector('.field').firstElementChild;
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

table.addEventListener('click', (event) => {
  if (appendRow.contains(event.target)) {
    const columnLength = tableBody.children[0].children.length;
    const newRow = document.createElement('tr');

    tableBody.insertAdjacentElement('beforeend', newRow);

    for (let i = 0; i < columnLength; i++) {
      newRow.append(document.createElement('td'));
    }
    removeRow.disabled = false;

    if (tableBody.children.length >= 10) {
      appendRow.disabled = true;
    }
  }

  if (removeRow.contains(event.target)) {
    tableBody.lastElementChild.remove();

    appendRow.disabled = false;

    if (tableBody.children.length <= 2) {
      removeRow.disabled = true;
    }
  }

  if (appendColumn.contains(event.target)) {
    const rows = [...tableBody.children];

    for (let i = 0; i < rows.length; i++) {
      rows[i].append(document.createElement('td'));
    }
    removeColumn.disabled = false;

    if (tableBody.children[0].children.length >= 10) {
      appendColumn.disabled = true;
    }
  }

  if (removeColumn.contains(event.target)) {
    const rows = [...tableBody.children];

    for (let i = 0; i < rows.length; i++) {
      rows[i].lastElementChild.remove();
    }

    appendColumn.disabled = false;

    if (tableBody.children[0].children.length <= 2) {
      removeColumn.disabled = true;
    }
  }
});
