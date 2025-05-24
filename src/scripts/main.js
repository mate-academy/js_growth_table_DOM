'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

function updateButtonStates() {
  const rowCount = tbody.querySelectorAll('tr').length;
  const columnCount = tbody.querySelector('tr')?.children.length || 0;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;

  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  const rowCount = tbody.querySelectorAll('tr').length;
  const columnCount = tbody.querySelector('tr')?.children.length || 0;

  if (rowCount >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  newRow.innerHTML = '<td></td>'.repeat(columnCount);
  tbody.appendChild(newRow);
  updateButtonStates();
});

appendColumn.addEventListener('click', () => {
  const columnCount = tbody.querySelector('tr')?.children.length || 0;

  if (columnCount >= 10) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => row.appendChild(document.createElement('td')));
  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length <= 2) {
    return;
  }

  rows[rows.length - 1].remove();
  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  const columnCount = tbody.querySelector('tr')?.children.length || 0;

  if (columnCount <= 2) {
    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => row.removeChild(row.lastElementChild));
  updateButtonStates();
});

updateButtonStates();
