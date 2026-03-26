'use strict';

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const container = document.querySelector('.container');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

let argentX = 4;
let argentY = 4;

container.addEventListener('click', (e) => {
  const button = e.target.closest('button');

  if (!button) {
    return;
  }

  if (button.classList.contains('append-column') && argentX < 10) {
    appendColumn();
  }

  if (button.classList.contains('remove-column') && argentX > 2) {
    removeColumn();
  }

  if (button.classList.contains('append-row') && argentY < 10) {
    appendRow();
  }

  if (button.classList.contains('remove-row') && argentY > 2) {
    removeRow();
  }
});

function updateButtons() {
  appendColumnButton.disabled = argentX === 10;
  removeColumnButton.disabled = argentX === 2;
  appendRowButton.disabled = argentY === 10;
  removeRowButton.disabled = argentY === 2;
}

function appendColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const newCell = document.createElement('td');

    row.append(newCell);
  }
  argentX++;
  updateButtons();
}

function appendRow() {
  const newTr = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  tbody.appendChild(newTr);

  argentY++;
  updateButtons();
}

function removeRow() {
  const lastRow = table.rows[table.rows.length - 1];

  lastRow.remove();
  argentY--;
  updateButtons();
}

function removeColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    const lastCell = row.cells[row.cells.length - 1];

    lastCell.remove();
  }
  argentX--;
  updateButtons();
}
