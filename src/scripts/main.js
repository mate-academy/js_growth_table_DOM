'use strict';

// write code here
const table = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButtons() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;

  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
}

appendRow.addEventListener('click', () => {
  const rows = table.rows.length;

  if (rows >= 10) {
    return;
  }

  const columns = table.rows[0].cells.length;
  const row = table.insertRow();

  for (let i = 0; i < columns; i++) {
    row.insertCell();
  }

  updateButtons();
});

removeRow.addEventListener('click', () => {
  const rows = table.rows.length;

  if (rows <= 2) {
    return;
  }

  table.deleteRow(rows - 1);

  updateButtons();
});

appendColumn.addEventListener('click', () => {
  const rows = table.rows;
  const columns = rows[0].cells.length;

  if (columns >= 10) {
    return;
  }

  for (const row of rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  const rows = table.rows;
  const columns = rows[0].cells.length;

  if (columns <= 2) {
    return;
  }

  for (const row of rows) {
    row.deleteCell(columns - 1);
  }

  updateButtons();
});

updateButtons();
