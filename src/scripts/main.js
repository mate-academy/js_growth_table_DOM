'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const tableElement = document.querySelector('.field');

function getRowCount() {
  return tableElement.querySelectorAll('tr').length;
}

function getColumnCount() {
  const firstRow = tableElement.querySelector('tr');

  return firstRow ? firstRow.querySelectorAll('td').length : 0;
}

function updateButtons() {
  const rowCount = getRowCount();
  const columnCount = getColumnCount();

  appendRowBtn.disabled = rowCount >= MAX_COUNT;
  removeRowBtn.disabled = rowCount <= MIN_COUNT;

  appendColumnBtn.disabled = columnCount >= MAX_COUNT;
  removeColumnBtn.disabled = columnCount <= MIN_COUNT;
}

appendRowBtn.addEventListener('click', () => {
  const columnCount = getColumnCount();

  if (getRowCount() >= MAX_COUNT || columnCount === 0) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }
  tableElement.appendChild(newRow);
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  const rows = tableElement.querySelectorAll('tr');

  if (rows.length <= MIN_COUNT) {
    return;
  }

  rows[rows.length - 1].remove();
  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  if (getColumnCount() >= MAX_COUNT) {
    return;
  }

  const rows = tableElement.querySelectorAll('tr');

  rows.forEach((row) => {
    row.appendChild(document.createElement('td'));
  });
  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  if (getColumnCount() <= MIN_COUNT) {
    return;
  }

  const rows = tableElement.querySelectorAll('tr');

  rows.forEach((row) => {
    const cells = row.querySelectorAll('td');

    if (cells.length > 0) {
      cells[cells.length - 1].remove();
    }
  });
  updateButtons();
});

// Initial button state setup
updateButtons();
