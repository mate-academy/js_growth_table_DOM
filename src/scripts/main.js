'use strict';

const rows = document.querySelector('tr');
const tbody = document.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const max = 10;
const min = 2;

function appendRow() {
  const row = tbody.children[0].cloneNode(true);

  tbody.append(row);

  if (tbody.children.length >= max) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
}

function removeRow() {
  tbody.lastElementChild.remove();

  if (tbody.children.length <= min) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
}

function appendColumn() {
  for (let i = 0; i < tbody.children.length; i++) {
    const column = document.createElement('td');

    tbody.children[i].append(column);
  }

  if (rows.children.length >= max) {
    appendColumnButton.disabled = true;
  }

  if (rows.children.length >= min) {
    removeColumnButton.disabled = false;
  }
}

function removeColumn() {
  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].lastElementChild.remove();
  }

  if (rows.children.length <= max) {
    appendColumnButton.disabled = false;
  }

  if (rows.children.length <= min) {
    removeColumnButton.disabled = true;
  }
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
