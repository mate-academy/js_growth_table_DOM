'use strict';

const btnAddRow = document.querySelector('.append-row');
const btnDelRow = document.querySelector('.remove-row');
const btnAddCol = document.querySelector('.append-column');
const btnDelCol = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

document.querySelector('.container').addEventListener('click', (e) => {
  const target = e.target;

  if (target === btnAddRow) {
    addRow(tbody);
  }

  if (target === btnDelRow) {
    delRow(tbody.children);
  }

  if (target === btnAddCol) {
    addColumn(tbody.children);
  }

  if (target === btnDelCol) {
    delColumn(tbody);
  }

  tbody.children.length >= 10
    ? btnAddRow.disabled = true
    : btnAddRow.disabled = false;

  tbody.firstChild.children.length <= 2
    ? btnDelRow.disabled = true
    : btnDelRow.disabled = false;

  tbody.firstChild.children.length >= 10
    ? btnAddCol.disabled = true
    : btnAddCol.disabled = false;

  tbody.children.length <= 2
    ? btnDelCol.disabled = true
    : btnDelCol.disabled = false;
});

function addRow(item) {
  item.append(item.lastElementChild.cloneNode(true));
}

function delRow(items) {
  for (const item of items) {
    item.firstElementChild.remove();
  }
}

function addColumn(items) {
  for (const item of items) {
    item.append(item.firstElementChild.cloneNode());
  }
}

function delColumn(item) {
  item.lastElementChild.remove();
}
