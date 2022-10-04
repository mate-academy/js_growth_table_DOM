'use strict';

const rows = document.getElementsByTagName('tr');

const appendRowButton = document.querySelector('.append-row');



appendRowButton.addEventListener('click', () => {
  const table = document.querySelector('tbody');

  const rowToAppend = document.querySelector('tr').cloneNode(true);

  table.append(rowToAppend);

  const rowsQuantity = rows.length;

  if (rowsQuantity > 9) {
    appendRowButton.setAttribute('disabled', 'true');
  }

  if (removeRowButton.disabled === true) {
    removeRowButton.removeAttribute('disabled');
  }
});

const removeRowButton = document.querySelector('.remove-row');

removeRowButton.addEventListener('click', () => {
  const rowToRemove = document.querySelector('tr');

  rowToRemove.remove();

  const rowsQuantity = rows.length;

  if (rowsQuantity < 3) {
    removeRowButton.setAttribute('disabled', 'true');
  }

  if (appendRowButton.disabled === true) {
    appendRowButton.removeAttribute('disabled');
  }
});

const appendColumnButton = document.querySelector('.append-column');

appendColumnButton.addEventListener('click', () => {
  for (const row of rows) {
    const cell = document.createElement('td');

    row.append(cell);
  }

  const existingRow = document.querySelector('tr');
  const existingRowLength = existingRow.children.length;

  if (existingRowLength > 9) {
    appendColumnButton.setAttribute('disabled', 'true');
  }

  if (removeColumnButton.disabled === true) {
    removeColumnButton.removeAttribute('disabled');
  }
});

const removeColumnButton = document.querySelector('.remove-column');

removeColumnButton.addEventListener('click', () => {
  for (const row of rows) {
    const cell = row.children[0];

    cell.remove();
  }

  const existingRow = document.querySelector('tr');
  const existingRowLength = existingRow.children.length;

  if (existingRowLength < 3) {
    removeColumnButton.setAttribute('disabled', 'true');
  }

  if (appendColumnButton.disabled === true) {
    appendColumnButton.removeAttribute('disabled');
  }
});
