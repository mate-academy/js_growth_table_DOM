'use strict';

const table = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

document.body.addEventListener('click', (e) => {
  const element = e.target.closest('button');

  if (element === appendRow) {
    table.append(table.firstChild.cloneNode(true));
  }

  if (element === removeRow) {
    table.lastElementChild.remove();
  }

  if (element === appendCol) {
    [...table.rows].forEach(item => {
      item.append(item.firstElementChild.cloneNode(true));
    });
  }

  if (element === removeCol) {
    [...table.rows].forEach(item => {
      item.lastElementChild.remove();
    });
  }

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (table.firstElementChild.children.length >= 10) {
    appendCol.disabled = true;
  } else {
    appendCol.disabled = false;
  }

  if (table.firstElementChild.children.length <= 2) {
    removeCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }
});
