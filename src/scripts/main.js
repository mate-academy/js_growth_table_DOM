'use strict';

const table = document.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');
const maxSize = 10;
const minSize = 2;

appendRowButton.addEventListener('click', element => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length === maxSize) {
    appendRowButton.disabled = true;
  }

  if (table.children.length > minSize) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', element => {
  table.lastElementChild.remove();

  if (table.children.length === minSize) {
    removeRowButton.disabled = true;
  }

  if (table.children.length < maxSize) {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', element => {
  for (const row of table.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (table.firstElementChild.children.length === maxSize) {
    appendColumnButton.disabled = true;
  }

  if (table.firstElementChild.children.length > minSize) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', element => {
  for (const row of table.rows) {
    row.lastElementChild.remove();
  }

  if (table.firstElementChild.children.length === minSize) {
    removeColumnButton.disabled = true;
  }

  if (table.firstElementChild.children.length < maxSize) {
    appendColumnButton.disabled = false;
  }
});
