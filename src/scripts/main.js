'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxRow = 10;
const minRows = 2;
const maxColumn = 10;
const minColumn = 2;
const body = document.querySelector('.field tbody');

addRow.addEventListener('click', () => {
  if (body.querySelectorAll('tr').length >= maxRow) {
    return;
  }

  if (removeRow.disabled === true) {
    removeRow.disabled = false;
  }

  const list = document.querySelectorAll('tr');
  const copy = list[0].cloneNode(true);

  body.append(copy);

  if (body.querySelectorAll('tr').length === maxRow) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (body.querySelectorAll('tr').length <= minRows) {
    return;
  }

  if (addRow.disabled === true) {
    addRow.disabled = false;
  }

  const list = document.querySelectorAll('tr');

  list[list.length - 1].remove();

  if (body.querySelectorAll('tr').length === minRows) {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  const list = document.querySelectorAll('tr');

  if (list[0].children.length >= maxColumn) {
    return;
  }

  if (removeColumn.disabled === true) {
    removeColumn.disabled = false;
  }

  for (let i = 0; i < list.length; i++) {
    const copy = list[i].lastElementChild.cloneNode(true);

    list[i].append(copy);
  }

  if (list[0].children.length === maxColumn) {
    addColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const list = document.querySelectorAll('tr');

  if (list[0].children.length <= minColumn) {
    return;
  }

  if (addColumn.disabled === true) {
    addColumn.disabled = false;
  }

  for (let i = 0; i < list.length; i++) {
    list[i].lastElementChild.remove();
  }

  if (list[0].children.length === minColumn) {
    removeColumn.disabled = true;
  }
});
