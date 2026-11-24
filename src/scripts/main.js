'use strict';

const table = document.querySelector('.field');
const tableBody = table.tBodies[0] || table;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function updateColButtons() {
  const colCount = table.rows[0]?.cells.length ?? 0;
  appendColBtn.disabled = colCount >= MAX_SIZE;
  removeColBtn.disabled = colCount <= MIN_SIZE;
}

function updateRowButtons() {
  const rowCount = table.rows.length;
  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;
}

function updateAllButtons() {
  updateRowButtons();
  updateColButtons();
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= MAX_SIZE) return;

  const colsCount = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < colsCount; i++) {
    newRow.append(document.createElement('td'));
  }

  tableBody.append(newRow);
  updateRowButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= MIN_SIZE) return;

  table.rows[table.rows.length - 1].remove();
  updateRowButtons();
});

appendColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= MAX_SIZE) return;

  for (const row of table.rows) {
    row.append(document.createElement('td'));
  }

  updateColButtons();
});

removeColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= MIN_SIZE) return;

  for (const row of table.rows) {
    row.lastElementChild?.remove();
  }

  updateColButtons();
});

updateAllButtons();
