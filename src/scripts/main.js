'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function updateButtonState() {
  const columnCount = table.rows[0].cells.length;
  const rowCount = table.rows.length;

  appendRowButton.disabled = rowCount >= MAX_COUNT;
  removeRowButton.disabled = rowCount <= MIN_COUNT;

  appendColumnButton.disabled = columnCount >= MAX_COUNT;
  removeColumnButton.disabled = columnCount <= MIN_COUNT;
}

appendRowButton.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  tbody.appendChild(newRow);

  updateButtonState();
});

removeRowButton.addEventListener('click', () => {
  tbody.removeChild(tbody.lastElementChild);

  updateButtonState();
});

appendColumnButton.addEventListener('click', () => {
  for (const row of tbody.rows) {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  }

  updateButtonState();
});

removeColumnButton.addEventListener('click', () => {
  for (const row of tbody.rows) {
    row.removeChild(row.lastElementChild);
  }

  updateButtonState();
});
