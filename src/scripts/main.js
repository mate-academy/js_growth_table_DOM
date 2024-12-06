'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const min = 2;
const max = 10;

function updateButtonStates() {
  const trs = document.querySelectorAll('tr');
  const rowCount = trs.length;
  const columnCount = trs[0].cells.length;

  appendRow.disabled = rowCount >= max;
  removeRow.disabled = rowCount <= min;
  appendColumn.disabled = columnCount >= max;
  removeColumn.disabled = columnCount <= min;
}

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const rows = [...table.rows];

  if (e.target.classList.contains('append-row')) {
    const newRow = table.insertRow(-1);

    for (let i = 0; i < rows[0].cells.length; i++) {
      newRow.insertCell(i);
    }

    updateButtonStates();
  }

  if (e.target.classList.contains('remove-row')) {
    table.deleteRow(-1);

    updateButtonStates();
  }

  if (e.target.classList.contains('append-column')) {
    rows.forEach((row) => {
      row.insertCell(row.length);
    });

    updateButtonStates();
  }

  if (e.target.classList.contains('remove-column')) {
    rows.forEach((row) => {
      row.deleteCell(row.length);
    });

    updateButtonStates();
  }
});
