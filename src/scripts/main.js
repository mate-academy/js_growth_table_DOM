'use strict';

const field = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function updateButtonsState() {
  const rowsCount = field.rows.length;
  const columnsCount = field.rows[0].cells.length;

  appendRowBtn.disabled = rowsCount >= MAX;
  removeRowBtn.disabled = rowsCount <= MIN;

  appendColumnBtn.disabled = columnsCount >= MAX;
  removeColumnBtn.disabled = columnsCount <= MIN;
}

appendRowBtn.addEventListener('click', () => {
  const columnsCount = field.rows[0].cells.length;
  const row = document.createElement('tr');

  for (let i = 0; i < columnsCount; i++) {
    row.appendChild(document.createElement('td'));
  }

  field.appendChild(row);
  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  if (field.rows.length > MIN) {
    field.deleteRow(-1);
  }

  updateButtonsState();
});

appendColumnBtn.addEventListener('click', () => {
  for (const row of field.rows) {
    row.appendChild(document.createElement('td'));
  }

  updateButtonsState();
});

removeColumnBtn.addEventListener('click', () => {
  const columnsCount = field.rows[0].cells.length;

  if (columnsCount > MIN) {
    for (const row of field.rows) {
      row.deleteCell(-1);
    }
  }

  updateButtonsState();
});

updateButtonsState();
