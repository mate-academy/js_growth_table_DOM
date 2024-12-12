'use strict';

const buttons = document.querySelectorAll('button');
const field = document.querySelector('.field');
const cellBlue = field.querySelector('td');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('append-row')) {
      const columnCount = field.rows[0].cells.length;
      const tr = document.createElement('tr');

      for (let i = 0; i < columnCount; i++) {
        const td = document.createElement('td');

        td.style = cellBlue.style;
        tr.append(td);
      }

      field.append(tr);

      if (field.rows.length >= 10) {
        e.target.disabled = true;
      }
    }

    if (e.target.classList.contains('append-column')) {
      field.querySelectorAll('tr').forEach((row) => {
        const td = document.createElement('td');

        td.style = cellBlue.style;
        row.append(td);
      });

      if (field.rows[0].cells.length === 10) {
        e.target.disabled = true;
      }
    }

    if (e.target.classList.contains('remove-row')) {
      const rows = field.querySelectorAll('tr');

      field.rows[rows.length - 1].remove();

      if (field.rows.length === 2) {
        e.target.disabled = true;
      }
    }

    if (e.target.classList.contains('remove-column')) {
      if (field.rows[0].cells.length > 2) {
        for (let i = 0; i < field.rows.length; i++) {
          const row = field.rows[i];
          const lastCell = row.cells[row.cells.length - 1];

          row.removeChild(lastCell);
        }
      }

      if (field.rows[0].cells.length === 2) {
        e.target.disabled = true;
      }
    }

    if (field.rows.length < 10) {
      const appendRow = document.querySelector('.append-row');

      appendRow.disabled = false;
    }

    if (field.rows[0].cells.length < 10) {
      const appendColumn = document.querySelector('.append-column');

      appendColumn.disabled = false;
    }

    if (field.rows.length > 2) {
      const removeRow = document.querySelector('.remove-row');

      removeRow.disabled = false;
    }

    if (field.rows[0].cells.length > 2) {
      const removeColumn = document.querySelector('.remove-column');

      removeColumn.disabled = false;
    }
  });
});
