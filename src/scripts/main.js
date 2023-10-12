'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const field = document.querySelector('.field');

  const buttons = {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
  };

  container.addEventListener('click', e => {
    const tr = document.querySelectorAll('tr');
    const rowsCount = tr.length;
    const columnCount = tr[0].querySelectorAll('td').length;

    const buttonStyles = () => {
      buttons.removeRow.disabled = rowsCount === 2;
      buttons.appendRow.disabled = rowsCount === 10;
      buttons.removeColumn.disabled = columnCount === 2;
      buttons.appendColumn.disabled = columnCount === 10;
    };

    if (e.target.classList.contains('append-row')) {
      buttonStyles();

      if (rowsCount < 10) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = tr[0].innerHTML;
        field.appendChild(newRow);
      } else {
        return;
      }
    }

    if (e.target.classList.contains('append-column')) {
      buttonStyles();

      if (columnCount < 10) {
        for (const row of tr) {
          const newCell = document.createElement('td');

          row.appendChild(newCell);
        }
      } else {
        return;
      }
    }

    if (e.target.classList.contains('remove-row')) {
      buttonStyles();

      if (rowsCount > 2) {
        const fiirsRow = field.querySelector('tr');

        fiirsRow.remove();
      } else {
        return;
      }
    }

    if (e.target.classList.contains('remove-column')) {
      buttonStyles();

      if (columnCount > 2) {
        for (const column of tr) {
          column.querySelector('td').remove();
        }
      } else {
        return;
      }
    };
  });
});
