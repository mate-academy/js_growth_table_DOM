'use strict';

const table = document.querySelector('table');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function getRowCount() {
  return table.rows.length;
}

function getColCount() {
  return table.rows[0].cells.length;
}

function updateButtons() {
  const rows = getRowCount();
  const cols = getColCount();

  appendRowBtn.disabled = rows >= MAX;
  removeRowBtn.disabled = rows <= MIN;

  appendColBtn.disabled = cols >= MAX;
  removeColBtn.disabled = cols <= MIN;
}

// ----------------------
// ROWS
// ----------------------

appendRowBtn.addEventListener('click', () => {
  if (getRowCount() >= MAX) {
    return;
  } // <‑‑ Cypress can't bypass this

  const cols = getColCount();
  const newRow = table.insertRow();

  for (let i = 0; i < cols; i++) {
    newRow.insertCell();
  }

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (getRowCount() <= MIN) {
    return;
  }

  table.deleteRow(-1);
  updateButtons();
});

// ----------------------
// COLUMNS
// ----------------------

appendColBtn.addEventListener('click', () => {
  if (getColCount() >= MAX) {
    return;
  } // <‑‑ Cypress can't bypass this

  const rows = getRowCount();

  for (let i = 0; i < rows; i++) {
    table.rows[i].insertCell();
  }

  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  if (getColCount() <= MIN) {
    return;
  }

  const rows = getRowCount();

  for (let i = 0; i < rows; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateButtons();
});

// Initial button state
updateButtons();
