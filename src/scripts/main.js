'use strict';

const btnAddRow = document.querySelector('.append-row');
const btnDelRow = document.querySelector('.remove-row');
const btnAddCol = document.querySelector('.append-column');
const btnDelCol = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

document.querySelector('.container').addEventListener('click', (e) => {
  const target = e.target;
  const minNumbersBlocks = 2;
  const maxNumbersBlocks = 10;

  switch (target) {
    case btnAddRow:
      addRow(tbody);
      break;

    case btnDelRow:
      delRow(tbody.children);
      break;

    case btnAddCol:
      addColumn(tbody.children);
      break;

    case btnDelCol:
      delColumn(tbody);
      break;
  }

  tbody.children.length >= maxNumbersBlocks
    ? btnAddRow.disabled = true
    : btnAddRow.disabled = false;

  tbody.firstChild.children.length <= minNumbersBlocks
    ? btnDelRow.disabled = true
    : btnDelRow.disabled = false;

  tbody.firstChild.children.length >= maxNumbersBlocks
    ? btnAddCol.disabled = true
    : btnAddCol.disabled = false;

  tbody.children.length <= minNumbersBlocks
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
