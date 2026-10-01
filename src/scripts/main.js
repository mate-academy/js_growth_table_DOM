'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function updateButtonsState() {
  const rows = tbody.querySelectorAll('tr');
  const rowCount = rows.length;
  const colCount = rows[0] ? rows[0].children.length : 0;

  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;

  appendColBtn.disabled = colCount >= MAX_SIZE;
  removeColBtn.disabled = colCount <= MIN_SIZE;
}

appendRowBtn.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length >= MAX_SIZE) {
    return;
  }

  const colCount = rows[0] ? rows[0].children.length : 0;
  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i += 1) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

  tbody.appendChild(newRow);
  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length <= MIN_SIZE) {
    return;
  }

  tbody.removeChild(tbody.lastElementChild);
  updateButtonsState();
});

appendColBtn.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (!rows.length || rows[0].children.length >= MAX_SIZE) {
    return;
  }

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });

  updateButtonsState();
});

removeColBtn.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (!rows.length || rows[0].children.length <= MIN_SIZE) {
    return;
  }

  rows.forEach((row) => {
    row.removeChild(row.lastElementChild);
  });

  updateButtonsState();
});

updateButtonsState();
