'use strict';

const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function getRows() {
  return table.querySelectorAll('tbody tr');
}

function getColumns() {
  return table.querySelectorAll('tbody tr:first-child td');
}

function updateButtonsState() {
  const rows = getRows().length;
  const columns = getColumns().length;

  appendRowBtn.disabled = rows >= MAX_SIZE;
  removeRowBtn.disabled = rows <= MIN_SIZE;

  appendColumnBtn.disabled = columns >= MAX_SIZE;
  removeColumnBtn.disabled = columns <= MIN_SIZE;
}

appendRowBtn.addEventListener('click', () => {
  if (!appendRowBtn.disabled) {
    const columnsCount = getColumns().length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnsCount; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    table.querySelector('tbody').appendChild(newRow);
  }

  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  if (!removeRowBtn.disabled) {
    const rows = getRows();

    rows[rows.length - 1].remove();
  }

  updateButtonsState();
});

appendColumnBtn.addEventListener('click', () => {
  if (!appendColumnBtn.disabled) {
    for (const row of getRows()) {
      row.appendChild(document.createElement('td'));
    }
  }

  updateButtonsState();
});

removeColumnBtn.addEventListener('click', () => {
  if (!removeColumnBtn.disabled) {
    for (const row of getRows()) {
      row.lastElementChild.remove();
    }
  }

  updateButtonsState();
});

updateButtonsState();
