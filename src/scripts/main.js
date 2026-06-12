'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const getRowCount = () => tbody.querySelectorAll('tr').length;
const getColumnCount = () =>
  tbody.querySelectorAll('tr')[0]?.querySelectorAll('td').length || 0;

const updateButtonStates = () => {
  const rowCount = getRowCount();
  const columnCount = getColumnCount();

  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;
  appendColumnBtn.disabled = columnCount >= MAX_SIZE;
  removeColumnBtn.disabled = columnCount <= MIN_SIZE;
};

const appendRow = () => {
  if (getRowCount() >= MAX_SIZE) {
    return;
  }

  const firstRow = tbody.querySelector('tr');
  const columnCount = firstRow.querySelectorAll('td').length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    newRow.appendChild(td);
  }

  tbody.appendChild(newRow);
  updateButtonStates();
};

const removeRow = () => {
  if (getRowCount() <= MIN_SIZE) {
    return;
  }

  const lastRow = tbody.querySelector('tr:last-child');

  lastRow.remove();
  updateButtonStates();
};

const appendColumn = () => {
  if (getColumnCount() >= MAX_SIZE) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });

  updateButtonStates();
};

const removeColumn = () => {
  if (getColumnCount() <= MIN_SIZE) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    const lastTd = row.querySelector('td:last-child');

    lastTd.remove();
  });

  updateButtonStates();
};

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtonStates();

updateButtonStates();
