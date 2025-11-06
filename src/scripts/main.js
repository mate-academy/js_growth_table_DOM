'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const tbody = field.querySelector('tbody');

const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');

const MAX_AMOUNT = 10;
const MIN_AMOUNT = 2;

container.addEventListener('click', enlargeTheTable);

function enlargeTheTable(ev) {
  const button = ev.target.closest('.button');
  const rows = field.rows;

  if (!button || !container.contains(button) || button.disabled === true) {
    return;
  }

  if (button === appendRow) {
    const newRow = tbody.rows[0].cloneNode(true);

    tbody.appendChild(newRow);

    if (rows.length >= MAX_AMOUNT) {
      appendRow.disabled = true;
    }

    if (rows.length > MIN_AMOUNT) {
      removeRow.disabled = false;
    }

    return;
  }

  if (button === removeRow) {
    tbody.deleteRow(-1);

    if (rows.length < MAX_AMOUNT) {
      appendRow.disabled = false;
    }

    if (rows.length <= MIN_AMOUNT) {
      removeRow.disabled = true;
    }

    return;
  }

  if (button === appendColumn) {
    for (const row of rows) {
      const firstCell = row.cells[0];
      const newCell = firstCell.cloneNode(true);

      row.appendChild(newCell);
    }

    if (rows[0].cells.length >= MAX_AMOUNT) {
      appendColumn.disabled = true;
    }

    if (rows[0].cells.length > MIN_AMOUNT) {
      removeColumn.disabled = false;
    }
  }

  if (button === removeColumn) {
    for (const row of rows) {
      row.deleteCell(-1);
    }

    if (rows[0].cells.length < MAX_AMOUNT) {
      appendColumn.disabled = false;
    }

    if (rows[0].cells.length <= MIN_AMOUNT) {
      removeColumn.disabled = true;
    }
  }
}
// write code here
