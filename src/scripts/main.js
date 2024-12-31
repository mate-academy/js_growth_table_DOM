'use strict';

// write code here
const appendRowBut = document.querySelector('.append-row');
const removeRowBut = document.querySelector('.remove-row');
const appendColBut = document.querySelector('.append-column');
const removeColBut = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

appendRowBut.addEventListener('click', (e) => {
  e.preventDefault();

  if (table.rows.length === 10) {
    appendRowBut.disabled = true;
  }

  const row = document.querySelector('tr');
  const newRow = row.cloneNode(true);

  table.appendChild(newRow);

  if (table.rows.length === 10) {
    appendRowBut.disabled = true;
  }

  if (table.rows.length === 3) {
    removeRowBut.disabled = false;
  }
});

removeRowBut.addEventListener('click', (e) => {
  e.preventDefault();

  table.removeChild(table.lastElementChild);

  if (table.rows.length === 2) {
    removeRowBut.disabled = true;
  }

  if (table.rows.length === 9) {
    appendRowBut.disabled = false;
  }
});

appendColBut.addEventListener('click', (e) => {
  e.preventDefault();

  const rowsNumber = table.rows.length;
  const colNumber = table.rows[0].children.length + 1;

  for (let i = 0; i < rowsNumber; i++) {
    const td = document.createElement('td');

    table.rows[i].appendChild(td);
  }

  if (colNumber === 10) {
    appendColBut.disabled = true;
  }

  if (colNumber === 3) {
    removeColBut.disabled = false;
  }
});

removeColBut.addEventListener('click', (e) => {
  e.preventDefault();

  const rowsNumber = table.rows.length;
  const colNumber = table.rows[0].children.length - 1;

  for (let i = 0; i < rowsNumber; i++) {
    const row = table.rows[i];

    row.removeChild(row.lastElementChild);
  }

  if (colNumber === 2) {
    removeColBut.disabled = true;
  }

  if (colNumber === 9) {
    appendColBut.disabled = false;
  }
});
