'use strict';

const rows = document.querySelector('tr');
const tbody = document.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const maxСоuntOfRowsOrColumns = 10;
const minСоuntOfRowsOrColumns = 2;

function appendRow() {
  const row = tbody.children[0].cloneNode(true);

  tbody.append(row);

  if (tbody.children.length >= maxСоuntOfRowsOrColumns) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
}

function removeRow() {
  tbody.lastElementChild.remove();

  if (tbody.children.length <= minСоuntOfRowsOrColumns) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
}

function appendColumn() {
  [...tbody.children].map(child => {
    const column = document.createElement('td');

    child.append(column);
  });

  if (rows.children.length >= maxСоuntOfRowsOrColumns) {
    appendColumnButton.disabled = true;
  }

  if (rows.children.length >= minСоuntOfRowsOrColumns) {
    removeColumnButton.disabled = false;
  }
}

function removeColumn() {
  [...tbody.children].map(child => {
    child.lastElementChild.remove();
  });

  if (rows.children.length <= maxСоuntOfRowsOrColumns) {
    appendColumnButton.disabled = false;
  }

  if (rows.children.length <= minСоuntOfRowsOrColumns) {
    removeColumnButton.disabled = true;
  }
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
