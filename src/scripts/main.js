'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButton() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

updateButton();

appendRow.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const cell = document.createElement('td');

    newRow.append(cell);
  }

  table.append(newRow);
  updateButton();
});

removeRow.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.rows[table.rows.length - 1].remove();
  updateButton();
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const cell = document.createElement('td');

    row.append(cell);
  }
  updateButton();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.cells[row.cells.length - 1].remove();
  }
  updateButton();
});
