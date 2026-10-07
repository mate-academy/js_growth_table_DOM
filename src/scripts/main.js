'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const tableBody = table.tBodies[0] || table;

function updateButtons() {
  const rows = tableBody.querySelectorAll('tr');
  const rowCount = rows.length;
  const colCount = rows[0] ? rows[0].cells.length : 0;

  appendRowBtn.disabled = rowCount >= MAX_COUNT;
  removeRowBtn.disabled = rowCount <= MIN_COUNT;
  appendColBtn.disabled = colCount >= MAX_COUNT;
  removeColBtn.disabled = colCount <= MIN_COUNT;
}

appendRowBtn.addEventListener('click', () => {
  const rows = tableBody.querySelectorAll('tr');

  if (rows.length >= MAX_COUNT) {
    return;
  }

  const colCount = rows[0] ? rows[0].cells.length : 0;
  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i++) {
    const td = document.createElement('td');

    newRow.append(td);
  }

  tableBody.append(newRow);
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const rows = tableBody.querySelectorAll('tr');

  if (rows.length <= MIN_COUNT) {
    return;
  }

  tableBody.lastElementChild.remove();
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  const rows = tableBody.querySelectorAll('tr');

  if (rows[0] && rows[0].cells.length >= MAX_COUNT) {
    return;
  }

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.append(td);
  });

  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  const rows = tableBody.querySelectorAll('tr');

  if (rows[0] && rows[0].cells.length <= MIN_COUNT) {
    return;
  }

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtons();
});

updateButtons();
