'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  const buttons = {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
  };

  container.addEventListener('click', e => {
    const field = document.querySelector('.field');
    const tr = document.getElementsByTagName('tr');
    let rowsCount = tr.length;
    let columnCount = tr[0].querySelectorAll('td').length;

    if (e.target.classList.contains('append-row')) {
      if (rowsCount < 10) {
        const newRow = document.createElement('tr');

        newRow.innerHTML = tr[0].innerHTML;
        field.appendChild(newRow);
      } else {
        return;
      }
    }

    if (e.target.classList.contains('append-column')) {
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
      if (rowsCount > 2) {
        const fiirsRow = field.querySelector('tr');

        fiirsRow.remove();
      } else {
        return;
      }
    }

    if (e.target.classList.contains('remove-column')) {
      if (columnCount > 2) {
        for (const column of tr) {
          column.querySelector('td').remove();
        }
      } else {
        return;
      }
    };

    rowsCount = tr.length;
    columnCount = tr[0].querySelectorAll('td').length;

    (function() {
      buttons.removeRow.disabled = rowsCount === 2;
      buttons.appendRow.disabled = rowsCount === 10;
      buttons.removeColumn.disabled = columnCount === 2;
      buttons.appendColumn.disabled = columnCount === 10;
    })();
  });
});
