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

  btnAddRow.disabled = tbody.children.length >= maxNumbersBlocks;
  btnDelRow.disabled = tbody.firstChild.children.length <= minNumbersBlocks;
  btnAddCol.disabled = tbody.firstChild.children.length >= maxNumbersBlocks;
  btnDelCol.disabled = tbody.children.length <= minNumbersBlocks;

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
