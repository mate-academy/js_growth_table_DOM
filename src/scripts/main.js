'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function disableButtons() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = columnsCount >= 10;
  removeColumn.disabled = columnsCount <= 2;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    if (table.rows.length >= 10) {
      return;
    }

    const cellsAmount = table.rows[0].cells.length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < cellsAmount; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    tbody.append(newRow);
  }

  if (e.target.classList.contains('remove-row')) {
    if (table.rows.length <= 2) {
      return;
    }

    const rowToRemove = table.rows[table.rows.length - 1];

    rowToRemove.remove();
  }

  if (e.target.classList.contains('append-column')) {
    if (table.rows[0].cells.length >= 10) {
      return;
    }

    for (const row of table.rows) {
      const newColumn = document.createElement('td');

      row.append(newColumn);
    }
  }

  if (e.target.classList.contains('remove-column')) {
    if (table.rows[0].cells.length <= 2) {
      return;
    }

    for (const row of table.rows) {
      const cellToRemove = row.cells[row.cells.length - 1];

      cellToRemove.remove();
    }
  }

  disableButtons();
});
