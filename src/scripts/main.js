'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= 10;
  removeRowButton.disabled = rowsCount <= 2;

  appendColumnButton.disabled = columnsCount >= 10;
  removeColumnButton.disabled = columnsCount <= 2;
}

appendRowButton.addEventListener('click', function () {
  if (table.rows.length >= 10) {
    return;
  }

  const columnsCount = table.rows[0].cells.length;
  const row = table.insertRow();

  for (let i = 0; i < columnsCount; i++) {
    row.insertCell();
  }

  updateButtons();
});

removeRowButton.addEventListener('click', function () {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);

  updateButtons();
});

appendColumnButton.addEventListener('click', function () {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', function () {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  updateButtons();
});

updateButtons();
