'use strict';

const tableBody = document.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxSize = 10;
const minSize = 2;

appendRowButton.addEventListener('click', () => {
  tableBody.append(tableBody.lastElementChild.cloneNode(true));

  if (tableBody.children.length === maxSize) {
    appendRowButton.setAttribute('disabled', 'disabled');
  }

  if (tableBody.children.length > minSize) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', () => {
  tableBody.lastElementChild.remove();

  if (tableBody.children.length === minSize) {
    removeRowButton.setAttribute('disabled', 'disabled');
  }

  if (tableBody.children.length < maxSize) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', () => {
  for (const row of tableBody.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (tableBody.firstElementChild.children.length === maxSize) {
    appendColumnButton.setAttribute('disabled', 'disabled');
  }

  if (tableBody.firstElementChild.children.length > minSize) {
    removeColumnButton.removeAttribute('disabled');
  }
});

removeColumnButton.addEventListener('click', () => {
  for (const row of tableBody.rows) {
    row.lastElementChild.remove();
  }

  if (tableBody.firstElementChild.children.length === minSize) {
    removeColumnButton.disabled = true;
  }

  if (tableBody.firstElementChild.children.length < maxSize) {
    appendColumnButton.disabled = false;
  }
});
