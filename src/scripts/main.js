'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;
  appendColBtn.disabled = colCount >= MAX_SIZE;
  removeColBtn.disabled = colCount <= MIN_SIZE;
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= MAX_SIZE) {
    return;
  }

  const colCount = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < colCount; i += 1) {
    const cell = document.createElement('td');

    newRow.append(cell);
  }

  const tbody = table.querySelector('tbody') || table;

  tbody.append(newRow);
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= MIN_SIZE) {
    return;
  }

  table.rows[table.rows.length - 1].remove();
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX_SIZE) {
    return;
  }

  [...table.rows].forEach((row) => {
    const cell = document.createElement('td');

    row.append(cell);
  });

  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount <= MIN_SIZE) {
    return;
  }

  [...table.rows].forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtons();
});

updateButtons();
