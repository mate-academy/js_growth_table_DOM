'use strict';

const tableBody = document.querySelector('.field').firstElementChild;
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
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
});

removeRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();

  appendRow.disabled = false;

  if (tableBody.children.length <= 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const rows = [...tableBody.children];

  for (let i = 0; i < rows.length; i++) {
    rows[i].append(document.createElement('td'));
  }
  removeColumn.disabled = false;

  if (tableBody.children[0].children.length >= 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const rows = [...tableBody.children];

  for (let i = 0; i < rows.length; i++) {
    rows[i].lastElementChild.remove();
  }

  appendColumn.disabled = false;

  if (tableBody.children[0].children.length <= 2) {
    removeColumn.disabled = true;
  }
});
