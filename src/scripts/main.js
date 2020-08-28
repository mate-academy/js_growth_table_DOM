'use strict';

const plusRow = document.querySelector('.append-row');
const minusRow = document.querySelector('.remove-row');
const plusColumn = document.querySelector('.append-column');
const minusColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

plusColumn.addEventListener('click', addColumn);
minusColumn.addEventListener('click', removeColumn);
plusRow.addEventListener('click', addRow);
minusRow.addEventListener('click', removeRow);

function addColumn() {
  for (const row of table.children) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (table.firstElementChild.children.length === 10) {
    plusColumn.disabled = true;
  }

  if (table.firstElementChild.children.length > 2) {
    minusColumn.disabled = false;
  }
};

function removeColumn() {
  for (const row of table.children) {
    row.lastElementChild.remove();
  }

  if (table.firstElementChild.children.length === 2) {
    minusColumn.disabled = true;
  }

  if (table.firstElementChild.children.length < 10) {
    plusColumn.disabled = false;
  }
};

function addRow() {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length === 10) {
    plusRow.disabled = true;
  }

  if (table.children.length > 2) {
    minusRow.disabled = false;
  }
};

function removeRow() {
  table.lastElementChild.remove();

  if (table.children.length === 2) {
    minusRow.disabled = true;
  }

  if (table.children.length < 10) {
    plusRow.disabled = false;
  }
};
