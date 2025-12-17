'use strict';

const fieldEl = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

function getRowCount() {
  return fieldEl.rows.length;
}

function getColCount() {
  return fieldEl.rows[0].cells.length;
}

function updateButtons() {
  const rows = getRowCount();
  const cols = getColCount();

  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColBtn.disabled = cols >= 10;
  removeColBtn.disabled = cols <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (getRowCount() >= 10) {
    return;
  }

  const cols = getColCount();
  const newRow = fieldEl.insertRow();

  for (let i = 0; i < cols; i++) {
    newRow.insertCell().textContent = '';
  }
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  fieldEl.deleteRow(-1);
  updateButtons();
});

appendColBtn.addEventListener('click', () => {
  if (getColCount() >= 10) {
    return;
  }

  Array.from(fieldEl.rows).forEach((row) => {
    row.insertCell().textContent = '';
  });
  updateButtons();
});

removeColBtn.addEventListener('click', () => {
  Array.from(fieldEl.rows).forEach((row) => {
    row.deleteCell(-1);
  });
  updateButtons();
});

updateButtons();
