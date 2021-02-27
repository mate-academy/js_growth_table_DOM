'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function addRow() {
  const field = document.querySelector('.field tbody');

  field.append(field.children[0].cloneNode(true));

  if (field.children.length >= 10) {
    appendRowButton.disabled = true;
  }
}

function removeRow() {
  const field = document.querySelector('.field tbody');
  const row = document.querySelector('.field tbody tr');

  row.remove();

  if (field.children.length < 3) {
    removeRowButton.disabled = true;
  }
}

function addColumn() {
  const rows = document.querySelectorAll('tr');

  rows.forEach(cell => cell.children[0].before(
    cell.children[0].cloneNode(true)
  ));

  if (rows[0].cells.length > 9) {
    appendColumnButton.disabled = true;
  }
}

function removeColumn() {
  const rows = document.querySelectorAll('tr');

  rows.forEach(cell => cell.children[0].remove());

  if (rows[0].cells.length < 3) {
    removeColumnButton.disabled = true;
  }
}

appendRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);
