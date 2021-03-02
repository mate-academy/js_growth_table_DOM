'use strict';

// write code here
const addButtonRow = document.querySelector('.append-row');
const deleteButtonRow = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const deleteColumnButton = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');
const row = document.querySelector('tr');

function addRow() {
  const newRow = tbody.children[0].cloneNode(true);

  deleteButtonRow.disabled = false;

  tbody.append(newRow);

  if (tbody.children.length >= 10) {
    addButtonRow.disabled = true;
  }
}

function removeRow() {
  addButtonRow.disabled = false;
  tbody.lastElementChild.remove();

  if (tbody.children.length < 3) {
    deleteButtonRow.disabled = true;
  }
}

function addColumn() {
  for (let i = 0; i < tbody.children.length; i++) {
    const newColumn = document.createElement('td');

    tbody.children[i].append(newColumn);
  }

  if (row.children.length > 2) {
    deleteColumnButton.disabled = false;
  }

  if (row.children.length >= 10) {
    addColumnButton.disabled = true;
  }
}

function removeColumn() {
  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].lastElementChild.remove();
  }

  if (row.children.length < 3) {
    deleteColumnButton.disabled = true;
  }

  if (row.children.length < 10) {
    addColumnButton.disabled = false;
  }
}

addButtonRow.addEventListener('click', addRow);
deleteButtonRow.addEventListener('click', removeRow);
addColumnButton.addEventListener('click', addColumn);
deleteColumnButton.addEventListener('click', removeColumn);
