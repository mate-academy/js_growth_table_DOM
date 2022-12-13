'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const rowsColection = document.getElementsByTagName('tr');
const tableConteiner = document.querySelector('tbody');

function addColumn() {
  for (const tr of rowsColection) {
    tr.append(rowsColection[0].firstElementChild.cloneNode(true));
  }

  removeColumn.disabled = false;
  appendColumn.disabled = rowsColection[0].children.length > 9;
}

function deleteColumn() {
  for (const tr of rowsColection) {
    tr.lastElementChild.remove();
  }

  appendColumn.disabled = false;
  removeColumn.disabled = rowsColection[0].children.length < 3;
}

function addRow() {
  tableConteiner.append(tableConteiner.children[0].cloneNode(true));

  removeRow.disabled = false;
  appendRow.disabled = tableConteiner.children.length > 9;
}

function deleteRow() {
  tableConteiner.lastElementChild.remove();

  appendRow.disabled = false;
  removeRow.disabled = tableConteiner.children.length < 3;
}

appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
