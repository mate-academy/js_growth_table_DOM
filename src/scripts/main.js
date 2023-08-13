'use strict';

let rows = 4;
let cols = 4;

const container = document.querySelector('.container');
const table = container.querySelector('.field');

const appendRow = container.querySelector('.append-row');
const appendCol = container.querySelector('.append-column');
const removeRow = container.querySelector('.remove-row');
const removeCol = container.querySelector('.remove-column');

container.addEventListener('click', (ev) => {
  switch (ev.target) {
    case appendRow:
      rows++;
      break;
    case appendCol:
      cols++;
      break;
    case removeRow:
      rows--;
      break;
    case removeCol:
      cols--;
      break;
    default:
      return;
  }

  checkBtns();
  createTable();
});

function checkBtns() {
  if (rows <= 2) {
    rows = 2;
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (rows >= 10) {
    rows = 10;
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (cols <= 2) {
    cols = 2;
    removeCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }

  if (cols >= 10) {
    cols = 10;
    appendCol.disabled = true;
  } else {
    appendCol.disabled = false;
  }
}

function createTable() {
  const tbody = document.createElement('tbody');

  table.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');

    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
}
