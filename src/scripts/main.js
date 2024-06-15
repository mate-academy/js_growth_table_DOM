'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('table tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_TABLE_SIZE = 10;
const MIN_TABLE_SIZE = 2;

container.addEventListener('click', () => {
  appendRow.disabled = tbody.children.length >= MAX_TABLE_SIZE;
  removeRow.disabled = tbody.children.length <= MIN_TABLE_SIZE;
  appendColumn.disabled = tbody.firstElementChild.children.length >= MAX_TABLE_SIZE;
  removeColumn.disabled = tbody.firstElementChild.children.length <= MIN_TABLE_SIZE;
});

appendRow.addEventListener('click', () => {
  tbody.append(tbody.firstElementChild.cloneNode(true));
});

removeRow.addEventListener('click', () => {
  tbody.firstElementChild.remove();
});

appendColumn.addEventListener('click', (e) => {
  for (const child of tbody.children) {
    child.append(child.firstElementChild.cloneNode(true));
  }
});

removeColumn.addEventListener('click', () => {
  for (const child of tbody.children) {
    child.firstElementChild.remove();
  }
});
