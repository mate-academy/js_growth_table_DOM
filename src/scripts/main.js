'use strict';

const table = document.querySelector('.field tbody');
const tableRow = document.querySelector('tr');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

appendRowButton.addEventListener('click', () => {
  table.append(tableRow.cloneNode(true));

  if (table.children.length === maxCount) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.children.length === minCount) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(element => {
    element.append(document.querySelector('td').cloneNode(true));
  });

  if (tableRow.children.length === maxCount) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', () => {
  document.querySelectorAll('tr').forEach(element => {
    element.lastElementChild.remove();
  });

  if (tableRow.children.length === minCount) {
    removeColumnButton.disabled = true;
  }

  appendColumnButton.disabled = false;
});
