'use strict';

const container = document.querySelector('.container');
const tbody = document.querySelector('table tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', () => {
  appendRow.disabled = tbody.children.length >= 10;
  removeRow.disabled = tbody.children.length <= 2;
  appendColumn.disabled = tbody.firstElementChild.children.length >= 10;
  removeColumn.disabled = tbody.firstElementChild.children.length <= 2;
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
