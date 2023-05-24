'use strict';

const appRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const td = document.querySelector('td');
const tr = document.querySelector('tr');

const tbody = document.querySelector('tbody');

const min = 2;
const max = 10;

appRow.addEventListener('click', () => {
  tbody.append(tr.cloneNode(true));

  removeRow.disabled = false;

  if ([...tbody.children].length === max) {
    appRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  appRow.disabled = false;

  if ([...tbody.children].length === min) {
    removeRow.disabled = true;
  }
});

appCol.addEventListener('click', () => {
  for (const item of tbody.children) {
    item.append(td.cloneNode(true));
  }

  removeCol.disabled = false;

  if ([...tr.children].length === max) {
    appCol.disabled = true;
  }
});

removeCol.addEventListener('click', () => {
  for (const item of tbody.children) {
    item.lastElementChild.remove();
  }

  appCol.disabled = false;

  if ([...tr.children].length === min) {
    removeCol.disabled = true;
  }
});
