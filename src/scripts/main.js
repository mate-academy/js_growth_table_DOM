'use strict';

const buttons = document.querySelector('.container');
const table = document.querySelector('.field');

buttons.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  const rows = table.rows;

  if (button.classList.contains('append-row')) {
    if (rows.length < 10) {
      const lastRow = rows[rows.length - 1];
      const newRow = lastRow.cloneNode(true);

      lastRow.after(newRow);
    }

    if (rows.length === 10) {
      button.setAttribute('disabled', true);
    }

    if (rows.length === 3) {
      const antiButton = document.querySelector('.remove-row');

      antiButton.removeAttribute('disabled');
    }
  }

  if (button.classList.contains('remove-row')) {
    if (rows.length > 2) {
      table.deleteRow(rows.length - 1);
    }

    if (rows.length === 2) {
      button.setAttribute('disabled', true);
    }

    if (rows.length === 9) {
      const antiButton = document.querySelector('.append-row');

      antiButton.removeAttribute('disabled');
    }
  }

  if (button.classList.contains('append-column')) {
    if (rows[0].cells.length < 10) {
      for (const row of rows) {
        const td = document.createElement('td');

        row.append(td);
      }
    }

    if (rows[0].cells.length === 10) {
      button.setAttribute('disabled', true);
    }

    if (rows[0].cells.length === 3) {
      const antiButton = document.querySelector('.remove-column');

      antiButton.removeAttribute('disabled');
    }
  }

  if (button.classList.contains('remove-column')) {
    if (rows[0].cells.length > 2) {
      for (const row of rows) {
        const lastTd = row.cells[row.cells.length - 1];

        lastTd.remove();
      }
    }

    if (rows[0].cells.length === 2) {
      button.setAttribute('disabled', true);
    }

    if (rows[0].cells.length === 9) {
      const antiButton = document.querySelector('.append-column');

      antiButton.removeAttribute('disabled');
    }
  }
});
