'use strict';

const removeRow = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const addColumn = document.querySelector('.append-column');
const container = document.querySelector('tbody');

function updateButtonsState() {
  const rows = container.querySelectorAll('tr');
  const tdCount = rows[0]?.querySelectorAll('td').length || 0;

  addRow.disabled = rows.length >= 10;
  removeRow.disabled = rows.length <= 2;
  addColumn.disabled = tdCount >= 10;
  removeColumn.disabled = tdCount <= 2;
}

removeRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
  }

  updateButtonsState();
});

addRow.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');
  const tdCount = rows[0].querySelectorAll('td').length;

  if (rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 1; i <= tdCount; i++) {
      const td = document.createElement('td');

      newRow.appendChild(td);
    }

    tbody.appendChild(newRow);
  }

  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  const tdCount = rows[0].querySelectorAll('td').length;

  if (tdCount > 2) {
    rows.forEach((row) => {
      const firstCell = row.querySelector('td');

      firstCell.remove();
    });
  }

  updateButtonsState();
});

addColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  const tdCount = rows[0].querySelectorAll('td').length;

  if (tdCount < 10) {
    rows.forEach((row) => {
      const td = document.createElement('td');

      row.appendChild(td);
    });
  }

  updateButtonsState();
});
