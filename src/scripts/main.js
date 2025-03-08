'use strict';

const table = document.documentElement.querySelector('.field');

const appendRowButton = document.documentElement.querySelector('.append-row');
const removeRowButton = document.documentElement.querySelector('.remove-row');
const appendColumnButton =
  document.documentElement.querySelector('.append-column');
const removeColumnButton =
  document.documentElement.querySelector('.remove-column');

if (
  !appendRowButton ||
  !removeRowButton ||
  !appendColumnButton ||
  !removeColumnButton ||
  !table
) {
  window.alert('Some buttons or whole table are not in DOM!');
}

let rowsCount = table.rows.length;
let columnsCount = table.rows[0].cells.length;

appendRowButton.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < columnsCount; i++) {
    newRow.insertCell();
  }

  rowsCount++;

  if (rowsCount === 10) {
    appendRowButton.disabled = true;
  }
  removeRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  removeColumnButton.disabled = false;

  for (const row of table.rows) {
    row.insertCell();
  }
  columnsCount++;

  if (columnsCount === 10) {
    appendColumnButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  appendRowButton.disabled = false;

  table.deleteRow(-1);
  rowsCount--;

  if (rowsCount === 2) {
    removeRowButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  appendColumnButton.disabled = false;

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  columnsCount--;

  if (columnsCount === 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
});
