'use strict';

const table = document.querySelector('.field');
const rows = table.rows;
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');
const maxLength = 10;
const minLength = 2;

appendRowButton.addEventListener('click', () => {
  const rowClone = rows[0].cloneNode(true);

  table.children[0].append(rowClone);

  if (rows.length >= maxLength) {
    appendRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', () => {
  rows[rows.length - 1].remove();

  if (rows.length <= minLength) {
    removeRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', () => {
  const cellClone = rows[0].firstElementChild.cloneNode();

  for (let i = 0; i < table.children[0].children.length; i++) {
    rows[i].append(cellClone.cloneNode());
  }

  if (rows[0].children.length >= maxLength) {
    appendColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', () => {
  for (let i = 0; i < table.children[0].children.length; i++) {
    rows[i].lastElementChild.remove();
  }

  if (rows[0].children.length <= minLength) {
    removeColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }
});
