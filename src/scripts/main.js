'use strict';

const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

function appendRow() {
  const tbody = document.querySelector('tbody');

  removeRowButton.disabled = false;
  tbody.append(tbody.children[0].cloneNode(true));

  if (tbody.children.length >= 10) {
    appendRowButton.disabled = true;
  }
}

function removeRow() {
  const tbody = document.querySelector('tbody');

  appendRowButton.disabled = false;
  tbody.children[0].remove();

  if (tbody.children.length === 2) {
    removeRowButton.disabled = true;
  }
}

function appendColumn() {
  const rows = [...document.querySelectorAll('tr')];

  removeColumnButton.disabled = false;

  for (const row of rows) {
    row.append(row.children[0].cloneNode(true));
  }

  if (rows[0].children.length >= 10) {
    appendColumnButton.disabled = true;
  }
}

function removeColumn() {
  const rows = [...document.querySelectorAll('tr')];

  appendColumnButton.disabled = false;

  for (const row of rows) {
    row.children[0].remove();
  }

  if (rows[0].children.length === 2) {
    removeColumnButton.disabled = true;
  }
}

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
