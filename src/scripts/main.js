'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
let rowsCount = document.querySelectorAll('tbody tr').length;
let columnsCount = document
  .querySelector('tbody tr')
  .querySelectorAll('td').length;

appendRowButton.addEventListener('click', () => {
  const table = document.querySelector('table tbody');
  const rowToCopy = table.querySelector('tr');
  const newRow = rowToCopy.cloneNode(true);

  table.append(newRow);
  rowsCount++;
  removeRowButton.disabled = false;

  if (rowsCount >= 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  const table = document.querySelector('table tbody');
  const rowToDelete = table.querySelector('tr');

  rowToDelete.remove();
  rowsCount--;
  appendRowButton.disabled = false;

  if (rowsCount <= 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  for (const row of rows) {
    const newColumn = document.createElement('td');

    row.append(newColumn);
  }

  columnsCount++;
  removeColumnButton.disabled = false;

  if (columnsCount >= 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  for (const row of rows) {
    const columnToRemove = row.querySelector('td');

    columnToRemove.remove();
  }

  columnsCount--;
  appendColumnButton.disabled = false;

  if (columnsCount <= 2) {
    removeColumnButton.disabled = true;
  }
});
