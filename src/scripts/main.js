'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const tBody = document.querySelector('.field tbody');
const addRowBtn = document.querySelector('.append-row');
const addColumnBtn = document.querySelector('.append-column');
const removeRowBtn = document.querySelector('.remove-row');
const removeColumnBtn = document.querySelector('.remove-column');

updateBtnStates();

// Helper functions для перевірок
function canAddRow() {
  return getCountRows() < MAX_COUNT;
}

function canRemoveRow() {
  return getCountRows() > MIN_COUNT;
}

function canAddColumn() {
  return getCountColumns() < MAX_COUNT;
}

function canRemoveColumn() {
  return getCountColumns() > MIN_COUNT;
}

// Helper для створення комірок
function createCell() {
  return document.createElement('td');
}

addRowBtn.addEventListener('click', () => {
  if (!canAddRow()) {
    return;
  }

  const newRow = document.createElement('tr');
  const currentColumns = getCountColumns();

  for (let i = 0; i < currentColumns; i++) {
    newRow.appendChild(createCell());
  }

  tBody.appendChild(newRow);
  updateBtnStates();
});

removeRowBtn.addEventListener('click', () => {
  if (!canRemoveRow()) {
    return;
  }

  const lastRow = tBody.querySelector('tr:last-child');

  if (lastRow) {
    lastRow.remove();
    updateBtnStates();
  }
});

addColumnBtn.addEventListener('click', () => {
  if (!canAddColumn()) {
    return;
  }

  tBody.querySelectorAll('tr').forEach((row) => {
    row.appendChild(createCell());
  });
  updateBtnStates();
});

removeColumnBtn.addEventListener('click', () => {
  if (!canRemoveColumn()) {
    return;
  }

  tBody.querySelectorAll('tr').forEach((row) => {
    const lastCell = row.querySelector('td:last-child');

    if (lastCell) {
      lastCell.remove();
    }
  });

  updateBtnStates();
});

function getCountRows() {
  return tBody.querySelectorAll('tr').length;
}

function getCountColumns() {
  return tBody.rows[0]?.cells.length || 0;
}

function updateBtnStates() {
  const currentRows = getCountRows();
  const currentColumns = getCountColumns();

  removeRowBtn.disabled = currentRows <= MIN_COUNT;
  addRowBtn.disabled = currentRows >= MAX_COUNT;

  removeColumnBtn.disabled = currentColumns <= MIN_COUNT;
  addColumnBtn.disabled = currentColumns >= MAX_COUNT;
}
