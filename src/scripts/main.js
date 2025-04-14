/* eslint-disable no-shadow */
'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('tbody');

container.addEventListener('click', (e) => {
  const appendRow = container.querySelector('.append-row');
  const removeRow = container.querySelector('.remove-row');
  const appendColumn = container.querySelector('.append-column');
  const removeColumn = container.querySelector('.remove-column');

  const rows = [...container.querySelectorAll('tr')];
  const row = container.querySelector('tr');

  const checkRow = () => {
    const allRows = [...container.querySelectorAll('tr')];

    removeRow.disabled = allRows.length <= 2;
    appendRow.disabled = allRows.length >= 10;
  };

  const checkCol = () => {
    const allCols = container.querySelector('tr').children;

    removeColumn.disabled = allCols.length <= 2;
    appendColumn.disabled = allCols.length >= 10;
  };

  if (e.target === appendRow) {
    if (rows.length < 10) {
      const newRow = row.cloneNode(true);

      table.append(newRow);
      checkRow();
    }
  }

  if (e.target === removeRow) {
    const lastRow = table.querySelector('tr:last-child');

    lastRow.remove();
    checkRow();
  }

  if (e.target === appendColumn) {
    if (row.children.length < 10) {
      rows.forEach((row) => {
        const newCol = document.createElement('td');

        row.appendChild(newCol);
      });

      checkCol();
    }
  }

  if (e.target === removeColumn) {
    rows.forEach((row) => {
      const lastCol = row.querySelector('td:last-child');

      lastCol.remove();
    });

    checkCol();
  }
});
