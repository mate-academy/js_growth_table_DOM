'use strict';

const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');

const table = document.querySelector('.field tbody');

const maxElements = 10;
const minElements = 2;

function addR() {
  table.append(table.lastElementChild.cloneNode(true));
  delRow.disabled = false;

  if (table.childElementCount === maxElements) {
    addRow.disabled = true;
  }
}

function delR() {
  table.lastElementChild.remove();
  addRow.disabled = false;

  if (table.childElementCount === minElements) {
    delRow.disabled = true;
  }
}

function addC() {
  [...table.children].forEach(row =>
    row.append(row.children[0].cloneNode(true)));
  delCol.disabled = false;

  if (table.children[0].childElementCount === maxElements) {
    addCol.disabled = true;
  }
}

function delC() {
  [...table.children].forEach(row => row.children[0].remove());
  addCol.disabled = false;

  if (table.children[0].childElementCount === minElements) {
    delCol.disabled = true;
  }
}

addRow.addEventListener('click', addR);
delRow.addEventListener('click', delR);
addCol.addEventListener('click', addC);
delCol.addEventListener('click', delC);
