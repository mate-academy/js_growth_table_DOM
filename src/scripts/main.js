'use strict';

// button
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

// table
const table = document.querySelector('.field');

// startNum
let startColumn = 4;

function getRowCount() {
  return table.querySelectorAll('tr').length;
}

// funcDisable
function updateButtonStates() {
  const currentRows = getRowCount();

  appendRow.disabled = currentRows >= 10;
  removeRow.disabled = currentRows <= 2;
  appendColumn.disabled = startColumn >= 10;
  removeColumn.disabled = startColumn <= 2;
}

// + !
appendRow.addEventListener('click', () => {
  if (getRowCount() >= 10) {
    return;
  }

  const newTr = document.createElement('tr');

  for (let i = 0; i < startColumn; i++) {
    const cell = document.createElement('td');

    newTr.appendChild(cell);
  }
  table.appendChild(newTr);

  updateButtonStates();
});

// - !
removeRow.addEventListener('click', () => {
  if (getRowCount() <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);

  updateButtonStates();
});

// + ->
appendColumn.addEventListener('click', () => {
  if (startColumn >= 10) {
    return;
  }

  table.querySelectorAll('tr').forEach((tr) => {
    const cell = document.createElement('td');

    tr.appendChild(cell);
  });
  startColumn++;

  updateButtonStates();
});

// - <-
removeColumn.addEventListener('click', () => {
  if (startColumn <= 2) {
    return;
  }

  table.querySelectorAll('tr').forEach((tr) => {
    tr.deleteCell(tr.cells.length - 1);
  });
  startColumn--;

  updateButtonStates();
});

updateButtonStates();
