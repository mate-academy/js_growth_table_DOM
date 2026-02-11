'use strict';

// write code here
const rowAp = document.querySelector('.append-row');
const rowRem = document.querySelector('.remove-row');
const colAp = document.querySelector('.append-column');
const colRem = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButton() {
  const currentRows = table.rows.length;
  const currentCol = table.rows[0].cells.length;

  rowAp.disabled = currentRows >= 10;
  rowRem.disabled = currentRows <= 2;
  colAp.disabled = currentCol >= 10;
  colRem.disabled = currentCol <= 2;
}

rowAp.addEventListener('click', (e) => {
  e.preventDefault();

  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.insertRow(-1);
  const currentCol = table.rows[0].cells.length;

  for (let i = 0; i < currentCol; i++) {
    newRow.insertCell(-1);
  }

  updateButton();
});

rowRem.addEventListener('click', (e) => {
  e.preventDefault();

  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);

  updateButton();
});

colAp.addEventListener('click', (e) => {
  e.preventDefault();

  if (table.rows[0].cells.length >= 10) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.insertCell(-1);
  });

  updateButton();
});

colRem.addEventListener('click', (e) => {
  e.preventDefault();

  if (table.rows[0].cells.length <= 2) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.deleteCell(-1);
  });

  updateButton();
});
