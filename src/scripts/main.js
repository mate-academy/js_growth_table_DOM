'use strict';

let rows = 4;
let cols = 4;

const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  rows++;

  checkBtns();
  createTable();
});

appendCol.addEventListener('click', () => {
  cols++;

  checkBtns();
  createTable();
});

removeRow.addEventListener('click', () => {
  rows--;

  checkBtns();
  createTable();
});

removeCol.addEventListener('click', () => {
  cols--;

  checkBtns();
  createTable();
});

function checkBtns() {
  if (rows === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (rows === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (cols === 2) {
    removeCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }

  if (cols === 10) {
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
