'use strict';

const table = document.querySelector('.field');
const container = document.querySelector('.container');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

// Event delegation
container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (e.target.classList.contains('append-row') && rowCount < 10) {
    const tr = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      tr.appendChild(document.createElement('td'));
    }

    table.appendChild(tr);
  }

  if (e.target.classList.contains('remove-row') && rowCount > 2) {
    table.deleteRow(-1);
  }

  if (e.target.classList.contains('append-column') && colCount < 10) {
    [...table.rows].forEach((row) => {
      row.appendChild(document.createElement('td'));
    });
  }

  if (e.target.classList.contains('remove-column') && colCount > 2) {
    [...table.rows].forEach((row) => {
      row.deleteCell(-1);
    });
  }

  updateButtonsState();
});

function updateButtonsState() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = colCount >= 10;
  removeColumn.disabled = colCount <= 2;
}

updateButtonsState();
