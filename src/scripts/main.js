'use strict';

const table = document.querySelector('.field');
const rows = table.rows;
const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const rowClone = rows[0].cloneNode(true);

  table.children[0].append(rowClone);
  removeRowButton.disabled = false;

  if (rows.length >= 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  rows[rows.length - 1].remove();
  appendRowButton.disabled = false;

  if (rows.length <= 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  for (let i = 0; i < table.children[0].children.length; i++) {
    const cloneCell = rows[i].firstElementChild.cloneNode(true);

    rows[i].append(cloneCell);
  }

  removeColumnButton.disabled = false;

  if (rows[0].children.length >= 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  for (let i = 0; i < table.children[0].children.length; i++) {
    rows[i].lastElementChild.remove();
  }

  appendColumnButton.disabled = false;

  if (rows[0].children.length <= 2) {
    removeColumnButton.disabled = true;
  }
});
