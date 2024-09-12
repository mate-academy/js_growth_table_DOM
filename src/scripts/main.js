'use strict';

const MIN_COUNT = 2;
const MAX_COUNT = 10;

const removeRowBtn = document.querySelector('.remove-row');
const removeColumnBtn = document.querySelector('.remove-column');
const appendRowBtn = document.querySelector('.append-row');
const appendColumnBtn = document.querySelector('.append-column');

const field = document.querySelector('.field');
const fieldBody = field.querySelector('tbody');

function getTableSize(table) {
  const rows = table.querySelectorAll('tr');
  const rowsCount = rows.length;
  const columnCount = rows[0] ? rows[0].children.length : 0;

  return [rowsCount, columnCount];
}

function updateButtonStates(rowsCount, columnsCount) {
  removeRowBtn.disabled = rowsCount <= MIN_COUNT;
  appendRowBtn.disabled = rowsCount >= MAX_COUNT;
  removeColumnBtn.disabled = columnsCount <= MIN_COUNT;
  appendColumnBtn.disabled = columnsCount >= MAX_COUNT;
}

function addRow(table, columnCount) {
  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    newRow.append(document.createElement('td'));
  }
  table.append(newRow);
}

function addColumn(table) {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => row.append(document.createElement('td')));
}

function removeRow(table) {
  table.lastElementChild.remove();
}

function removeColumn(table) {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => row.lastElementChild.remove());
}

removeRowBtn.addEventListener('click', () => {
  const [rowsCount, columnsCount] = getTableSize(fieldBody);

  if (rowsCount > MIN_COUNT) {
    removeRow(fieldBody);
    updateButtonStates(rowsCount - 1, columnsCount);
  }
});

removeColumnBtn.addEventListener('click', () => {
  const [rowsCount, columnCount] = getTableSize(fieldBody);

  if (columnCount > MIN_COUNT) {
    removeColumn(fieldBody);
    updateButtonStates(rowsCount, columnCount - 1);
  }
});

appendRowBtn.addEventListener('click', () => {
  const [rowsCount, columnCount] = getTableSize(fieldBody);

  if (rowsCount < MAX_COUNT) {
    addRow(fieldBody, columnCount);
    updateButtonStates(rowsCount + 1, columnCount);
  }
});

appendColumnBtn.addEventListener('click', () => {
  const [rowsCount, columnCount] = getTableSize(fieldBody);

  if (columnCount < MAX_COUNT) {
    addColumn(fieldBody);
    updateButtonStates(rowsCount, columnCount + 1);
  }
});
