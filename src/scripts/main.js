'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const rowsCount = table.querySelectorAll('tr').length;
  const columnsCount = table.querySelector('tr').children.length;
  const tr = document.createElement('tr');

  if (rowsCount >= 10) {
    return;
  }

  for (let i = 0; i < columnsCount; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }
  table.querySelector('tbody').appendChild(tr);
  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];

  if (rows.length > 2) {
    lastRow.remove();
  }

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const columnsCount = table.querySelector('tr').children.length;

  if (columnsCount >= 10) {
    return;
  }

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.append(td);
  });

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const columnsCount = table.querySelector('tr').children.length;

  if (columnsCount > 2) {
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const lastCell = cells[cells.length - 1];

      lastCell.remove();
    });
  }

  updateButtons();
});

function updateButtons() {
  const rowsCount = table.querySelectorAll('tr').length;
  const columnsCount = table.querySelector('tr').children.length;

  appendRowButton.disabled = rowsCount === 10;
  removeRowButton.disabled = rowsCount === 2;

  appendColumnButton.disabled = columnsCount === 10;
  removeColumnButton.disabled = columnsCount === 2;
}

updateButtons();
