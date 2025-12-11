'use strict';

const tbody = document.querySelector('tbody');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

let rowsCount = tbody.querySelectorAll('tr').length;
let colsCount = tbody.querySelector('tr').children.length;

const MIN = 2;
const MAX = 10;

function updateButtons() {
  appendRowBtn.disabled = rowsCount >= MAX;
  removeRowBtn.disabled = rowsCount <= MIN;

  appendColumnBtn.disabled = colsCount >= MAX;
  removeColumnBtn.disabled = colsCount <= MIN;
}

function addRow() {
  if (rowsCount >= MAX) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < colsCount; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  tbody.appendChild(tr);
  rowsCount++;

  updateButtons();
}

function removeRow() {
  if (rowsCount > MIN) {
    tbody.lastElementChild.remove();
    rowsCount--;
  }
  updateButtons();
}

function addColumn() {
  if (colsCount >= MAX) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((tr) => {
    const td = document.createElement('td');

    tr.appendChild(td);
  });

  colsCount++;

  updateButtons();
}

function removeColumn() {
  if (colsCount > MIN) {
    const rows = tbody.querySelectorAll('tr');

    rows.forEach((tr) => {
      tr.lastElementChild.remove();
    });

    colsCount--;
  }

  updateButtons();
}

appendRowBtn.addEventListener('click', addRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);
