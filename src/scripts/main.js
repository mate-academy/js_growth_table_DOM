'use strict';

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxLength = 9;
const minLength = 2;

appendColumn.addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  for (const item of [...trs]) {
    item.children[1].after(item.children[1].cloneNode(true));

    if (item.children.length > maxLength) {
      appendColumn.disabled = true;
    }

    if (item.children.length > minLength) {
      removeColumn.disabled = false;
    }
  }
});

removeColumn.addEventListener('click', () => {
  const trs = document.querySelectorAll('tr');

  for (const item of [...trs]) {
    item.children[1].remove();

    if (item.children.length === maxLength) {
      appendColumn.disabled = false;
    }

    if (item.children.length === minLength) {
      removeColumn.disabled = true;
    }
  }
});

appendRow.addEventListener('click', () => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length > maxLength) {
    appendRow.disabled = true;
  }

  if (table.children.length > minLength) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.children.length === maxLength) {
    appendRow.disabled = false;
  }

  if (table.children.length === minLength) {
    removeRow.disabled = true;
  }
});
