'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', (ev) => {
  const table = container.querySelector('table tbody');
  const MAX_ROWS = 10;
  const MIN_ROWS = 2;
  const MAX_COLUMNS = 10;
  const MIN_COLUMNS = 2;
  const addRowButton = container.querySelector('.append-row');
  const deleteRowButton = container.querySelector('.remove-row');
  const addColumnButton = container.querySelector('.append-column');
  const deleteColumnButton = container.querySelector('.remove-column');

  function checkButtonState() {
    const rowsAmount = table.rows.length;
    const colsAmount = table.rows[0].cells.length;

    addRowButton.disabled = rowsAmount >= MAX_ROWS;
    deleteRowButton.disabled = rowsAmount <= MIN_ROWS;
    addColumnButton.disabled = colsAmount >= MAX_COLUMNS;
    deleteColumnButton.disabled = colsAmount <= MIN_COLUMNS;
  }

  if (ev.target.nodeName === 'BUTTON') {
    const button = ev.target;

    if (button.classList.contains('append-row')) {
      const rowsAmount = table.rows.length;
      const colsAmount = table.rows[0].cells.length;

      if (rowsAmount < MAX_ROWS) {
        const row = document.createElement('tr');
        const cells = [];

        for (let i = 0; i < colsAmount; i++) {
          const cell = document.createElement('td');

          cells.push(cell);
        }

        row.append(...cells);
        table.append(row);
      }

      checkButtonState();
    }

    if (button.classList.contains('remove-row')) {
      const rowsAmount = table.rows.length;

      if (rowsAmount > MIN_ROWS) {
        const lastRow = table.rows[rowsAmount - 1];

        lastRow.remove();
      }

      checkButtonState();
    }

    if (button.classList.contains('append-column')) {
      const colsAmount = table.rows[0].cells.length;

      if (colsAmount < MAX_COLUMNS) {
        [...table.rows].forEach((row) => {
          const cell = document.createElement('td');

          row.append(cell);
        });
      }

      checkButtonState();
    }

    if (button.classList.contains('remove-column')) {
      const colsAmount = table.rows[0].cells.length;

      if (colsAmount > MIN_COLUMNS) {
        [...table.rows].forEach((row) => row.cells[colsAmount - 1].remove());
      }

      checkButtonState();
    }
  }

  checkButtonState();
});
