'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const tableBody = document.querySelector('.field tbody');

function getRows() {
  return [...tableBody.querySelectorAll('tr')];
}

function getColsCount() {
  const firstRow = tableBody.querySelector('tr');

  return firstRow ? firstRow.cells.length : 0;
}

function updateControls() {
  const rows = getRows().length;
  const cols = getColsCount();

  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColBtn.disabled = cols >= 10;
  removeColBtn.disabled = cols <= 2;
}

appendRowBtn.addEventListener('click', () => {
  const newRow = tableBody.insertRow(-1);
  const cols = getColsCount();

  for (let i = 0; i < cols; i++) {
    newRow.insertCell();
  }

  updateControls();
});

removeRowBtn.addEventListener('click', () => {
  const rows = getRows();

  tableBody.removeChild(rows[rows.length - 1]);
  updateControls();
});

appendColBtn.addEventListener('click', () => {
  getRows().forEach((row) => row.insertCell(-1));
  updateControls();
});

removeColBtn.addEventListener('click', () => {
  getRows().forEach((row) => {
    row.deleteCell(-1);
  });

  updateControls();
});

updateControls();
