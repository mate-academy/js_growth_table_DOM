'use strict';

const tbody = document.querySelector('tbody');
const row = document.querySelector('tr');
const buttonAddRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAddColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

function addRow() {
  const newRow = tbody.children[0].cloneNode(true);

  tbody.append(newRow);

  if (tbody.children.length >= 10) {
    buttonAddRow.disabled = true;
  }

  buttonRemoveRow.disabled = false;
}

function removeRow() {
  tbody.lastElementChild.remove();

  if (tbody.children.length < 3) {
    buttonRemoveRow.disabled = true;
  }

  buttonAddRow.disabled = false;
}

function addColumn() {
  for (let i = 0; i < tbody.children.length; i++) {
    const newColumn = document.createElement('td');

    tbody.children[i].append(newColumn);
  }

  if (row.children.length > 2) {
    buttonRemoveColumn.disabled = false;
  }

  if (row.children.length >= 10) {
    buttonAddColumn.disabled = true;
  }
}

function removeColumn() {
  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].lastElementChild.remove();
  }

  if (row.children.length < 3) {
    buttonRemoveColumn.disabled = true;
  }

  if (row.children.length < 10) {
    buttonAddColumn.disabled = false;
  }
}

buttonAddRow.addEventListener('click', addRow);
buttonRemoveRow.addEventListener('click', removeRow);
buttonAddColumn.addEventListener('click', addColumn);
buttonRemoveColumn.addEventListener('click', removeColumn);
