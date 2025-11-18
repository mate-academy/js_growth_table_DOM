'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

function checkLimits() {
  const rowsCount = tbody.rows.length;
  const columnsCount = tbody.rows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = columnsCount >= 10;
  removeColumn.disabled = columnsCount <= 2;
}

appendRow.addEventListener('click', (e) => {
  const rows = tbody.rows;
  const newRow = document.createElement('tr');
  const columnsCount = rows[0].cells.length;

  for (let i = 0; i < columnsCount; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  tbody.appendChild(newRow);

  checkLimits();
});

removeRow.addEventListener('click', (e) => {
  const rows = tbody.rows;

  if (rows.length > 2) {
    tbody.removeChild(rows[rows.length - 1]);
  }

  checkLimits();
});

appendColumn.addEventListener('click', (e) => {
  const rows = tbody.rows;

  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');

    rows[i].appendChild(newCell);
  }

  checkLimits();
});

removeColumn.addEventListener('click', (e) => {
  const rows = tbody.rows;

  if (rows[0].cells.length > 2) {
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].cells;

      rows[i].removeChild(cells[cells.length - 1]);
    }
  }

  checkLimits();
});

checkLimits();
