'use strict';

const table = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tr = document.querySelector('tr');

const max = 10;
const min = 2;

function addRow() {
  // const clone = table.firstElementChild.cloneNode(true);
  // tr.innerHTML = '<td></td><td></td><td></td><td></td>';
  const clone = tr.cloneNode(true);

  table.appendChild(clone);

  if (table.children.length === max) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
};

function deleteRow() {
  table.lastElementChild.remove();

  if (table.children.length === min) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
};

function addColumn() {
  const rows = table.querySelectorAll('tr');
  const col = table.querySelectorAll('td');

  for (let i = 0; i < rows.length; i++) {
    const newCol = col[i].cloneNode(true);

    rows[i].appendChild(newCol);
  }

  if (table.children[0].childElementCount === max) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
};

function deleteColumn() {
  const trs = table.querySelectorAll('tr');

  for (let i = 0; i < trs.length; i++) {
    trs[i].removeChild(trs[i].children[1]);
  }

  if (table.children[0].childElementCount === min) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
