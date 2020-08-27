'use strict';

const table = document.querySelector('tbody');
const rowAppendBtn = document.querySelector('.append-row');
const rowRemoveBtn = document.querySelector('.remove-row');
const columnAppendBtn = document.querySelector('.append-column');
const columnRemoveBtn = document.querySelector('.remove-column');

rowAppendBtn.addEventListener('click', (event) => {
  table.append(table.firstElementChild.cloneNode(true));

  if (table.children.length === 10) {
    rowAppendBtn.disabled = true;
  }

  if (table.children.length > 2) {
    rowRemoveBtn.disabled = false;
  }
});

rowRemoveBtn.addEventListener('click', (event) => {
  table.lastElementChild.remove();

  if (table.children.length === 2) {
    rowRemoveBtn.disabled = true;
  }

  if (table.children.length < 10) {
    rowAppendBtn.disabled = false;
  }
});

columnAppendBtn.addEventListener('click', (event) => {
  for (const row of table.children) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (table.firstElementChild.children.length === 10) {
    columnAppendBtn.disabled = true;
  }

  if (table.firstElementChild.children.length > 2) {
    columnRemoveBtn.disabled = false;
  }
});

columnRemoveBtn.addEventListener('click', (event) => {
  for (const row of table.children) {
    row.lastElementChild.remove();
  }

  if (table.firstElementChild.children.length === 2) {
    columnRemoveBtn.disabled = true;
  }

  if (table.firstElementChild.children.length < 10) {
    columnAppendBtn.disabled = false;
  }
});
