'use strict';

const tableBody = document.querySelector('.field').tBodies[0];
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', e => {
  tableBody.append(tableBody.lastElementChild.cloneNode(true));

  if (tableBody.children.length === 10) {
    appendRowButton.disabled = true;
  }

  if (tableBody.children.length > 2) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', e => {
  tableBody.lastElementChild.remove();

  if (tableBody.children.length === 2) {
    removeRowButton.disabled = true;
  }

  if (tableBody.children.length < 10) {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', e => {
  for (const row of tableBody.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (tableBody.firstElementChild.children.length === 10) {
    appendColumnButton.disabled = true;
  }

  if (tableBody.firstElementChild.children.length > 2) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', e => {
  for (const row of tableBody.rows) {
    row.lastElementChild.remove();
  }

  if (tableBody.firstElementChild.children.length === 2) {
    removeColumnButton.disabled = true;
  }

  if (tableBody.firstElementChild.children.length < 10) {
    appendColumnButton.disabled = false;
  }
});
