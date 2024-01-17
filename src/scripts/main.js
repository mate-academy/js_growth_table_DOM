'use strict';

// write code here

const table = document.querySelector('.field tbody');

const buttonRemoveColumn = document.querySelector('.remove-column');
const buttonAddColumn = document.querySelector('.append-column');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAddRow = document.querySelector('.append-row');
const MIN = 2;
const MAX = 10;

buttonRemoveColumn.addEventListener('click', () => {
  if (table.children[0].children.length < MAX + 1) {
    buttonAddColumn.disabled = false;
  }

  if (table.children[0].children.length < MIN + 2) {
    buttonRemoveColumn.disabled = true;
  }

  for (let i = 0; i < table.children.length; i++) {
    table.children[i].children[table.children[i].children.length - 1]
      .parentNode.removeChild(
        table.children[i].children[table.children[i].children.length - 1],
      );
  }
});

buttonAddColumn.addEventListener('click', () => {
  if (table.children[0].children.length > MIN - 1) {
    buttonRemoveColumn.disabled = false;
  }

  if (table.children[0].children.length > MAX - 2) {
    buttonAddColumn.disabled = true;
  }

  for (let i = 0; i < table.children.length; i++) {
    const td = document.createElement('td');

    table.children[i].append(td);
  }
});

buttonRemoveRow.addEventListener('click', () => {
  if (table.children.length < MAX + 1) {
    buttonAddRow.disabled = false;
  }

  if (table.children.length < MIN + 2) {
    buttonRemoveRow.disabled = true;
  }

  table.children[table.children.length - 1]
    .parentNode.removeChild(table.children[table.children.length - 1]);
});

buttonAddRow.addEventListener('click', () => {
  const newTr = document.createElement('tr');

  if (table.children.length > MIN - 1) {
    buttonRemoveRow.disabled = false;
  }

  if (table.children.length > MAX - 2) {
    buttonAddRow.disabled = true;
  }

  for (let i = 0; i < table.children[0].children.length; i++) {
    const newTd = document.createElement('td');

    newTr.append(newTd);
  }

  table.append(newTr);
});
