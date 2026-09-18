'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const max = 10;
const min = 2;

function addRow() {
  if (table.rows.length >= max) {
    return;
  }

  const row = document.createElement('tr');
  const currentColumns = table.rows[0].cells.length;

  for (let i = 0; i < currentColumns; i++) {
    const cell = document.createElement('td');

    row.append(cell);
  }

  const tbody = table.querySelector('tbody');

  tbody.append(row);
}

function removeRow() {
  if (table.rows.length <= min) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];

  lastRow.remove();
}

function addColumn() {
  if (table.rows[0].cells.length >= max) {
    return;
  }

  for (const row of table.rows) {
    const cell = document.createElement('td');

    row.append(cell);
  }
}

function removeColumn() {
  if (table.rows[0].cells.length <= min) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const lastCell = row.cells[row.cells.length - 1];

    lastCell.remove();
  }
}

function updateButtons() {
  const currentRows = table.rows.length;
  const currentColumns = table.rows[0].cells.length;

  removeRowButton.disabled = currentRows <= min;
  addRowButton.disabled = currentRows >= max;

  removeColumnButton.disabled = currentColumns <= min;
  addColumnButton.disabled = currentColumns >= max;
}

container.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.classList.contains('append-row')) {
    addRow();
  }

  if (clickEvent.target.classList.contains('remove-row')) {
    removeRow();
  }

  if (clickEvent.target.classList.contains('append-column')) {
    addColumn();
  }

  if (clickEvent.target.classList.contains('remove-column')) {
    removeColumn();
  }

  updateButtons();
});

updateButtons();
