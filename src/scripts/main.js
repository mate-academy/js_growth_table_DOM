'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const allTr = document.getElementsByTagName('tr');
const tbody = document.querySelector('tbody');

function addColumn() {
  for (const tr of allTr) {
    tr.append(allTr[0].firstElementChild.cloneNode(true));
  }

  removeColumn.disabled = false;
  appendColumn.disabled = allTr[0].children.length > 9;
}

function deleteColumn() {
  for (const tr of allTr) {
    tr.lastElementChild.remove();
  }

  appendColumn.disabled = false;
  removeColumn.disabled = allTr[0].children.length < 3;
}

function addRow() {
  removeRow.disabled = false;
  appendRow.disabled = tbody.children.length > 9;

  tbody.append(tbody.children[0].cloneNode(true));
}

function deleteRow() {
  tbody.lastElementChild.remove();

  appendRow.disabled = false;
  removeRow.disabled = tbody.children.length < 3;
}

appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
