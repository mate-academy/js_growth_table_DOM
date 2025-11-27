'use strict';

document.addEventListener('click', (e) => {
  const table = document.querySelector('table');
  const rows = document.querySelectorAll('tr');
  const addRow = e.target.closest('.append-row');
  const removeRow = e.target.closest('.remove-row');
  const addCol = e.target.closest('.append-column');
  const removeCol = e.target.closest('.remove-column');

  const rowCount = rows.length;
  const colCount = rows[0].querySelectorAll('td').length;

  if (!addRow && !removeRow && !addCol && !removeCol) {
    return;
  }

  if (addRow && rowCount < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    table.tBodies[0].append(newRow);
  }

  if (removeRow && rowCount > 2) {
    const lastRow = rows[rows.length - 1];

    lastRow.remove();
  }

  if (addCol && colCount < 10) {
    rows.forEach((row) => {
      const td = document.createElement('td');

      row.append(td);
    });
  }

  if (removeCol && colCount > 2) {
    rows.forEach((row) => {
      const lastCell = row.lastElementChild;

      lastCell.remove();
    });
  }

  updateButton();
});

function updateButton() {
  const addRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const addCol = document.querySelector('.append-column');
  const removeCol = document.querySelector('.remove-column');

  const rows = document.querySelectorAll('tr');
  const rowCount = rows.length;
  const colCount = rows[0].querySelectorAll('td').length;

  addRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  addCol.disabled = colCount >= 10;
  removeCol.disabled = colCount <= 2;
}
