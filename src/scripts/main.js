'use strict';

const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

let rows = table.rows.length;
let columns = table.rows[0].cells.length;

function appendRow() {
  if (rows >= MAX) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  table.append(tr);

  rows++;

  updateButtonsState();
}

function removeRow() {
  if (rows <= MIN) {
    return;
  }

  table.rows[rows - 1].remove();

  rows--;

  updateButtonsState();
}

function appendColumn() {
  if (columns >= MAX) {
    return;
  }

  for (const row of table.rows) {
    const td = document.createElement('td');

    row.append(td);
  }

  columns++;

  updateButtonsState();
}

function removeColumn() {
  if (columns <= MIN) {
    return;
  }

  for (const row of table.rows) {
    row.cells[columns - 1].remove();
  }

  columns--;

  updateButtonsState();
}

function updateButtonsState() {
  appendRowBtn.disabled = rows >= MAX;
  removeRowBtn.disabled = rows <= MIN;

  appendColumnBtn.disabled = columns >= MAX;
  removeColumnBtn.disabled = columns <= MIN;
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtonsState();
