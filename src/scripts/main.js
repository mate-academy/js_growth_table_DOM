'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const getRows = () => table.querySelectorAll('tr');
const getRowCount = () => getRows().length;
const getColumnCount = () => getRows()[0].querySelectorAll('td').length;

function updateButtons() {
  const rowCount = getRowCount();
  const columnCount = getColumnCount();

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

updateButtons();

appendRow.addEventListener('click', () => {
  const row = document.createElement('tr');
  const lengthRow = getColumnCount();

  if (getRowCount() < 10) {
    for (let i = 0; i < lengthRow; i++) {
      const column = document.createElement('td');

      row.appendChild(column);
    }

    table.appendChild(row);
    updateButtons();
  }
});

removeRow.addEventListener('click', () => {
  const rows = getRows();

  if (getRows().length > 2) {
    rows[rows.length - 1].remove();
    updateButtons();
  }
});

appendColumn.addEventListener('click', () => {
  if (getColumnCount() < 10) {
    getRows().forEach((row) => {
      const column = document.createElement('td');

      row.appendChild(column);
    });
    updateButtons();
  }
});

removeColumn.addEventListener('click', () => {
  if (getColumnCount() > 2) {
    getRows().forEach((row) => {
      const cells = row.querySelectorAll('td');

      cells[cells.length - 1].remove();
    });
    updateButtons();
  }
});
