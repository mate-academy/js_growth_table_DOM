'use strict';

// write code here
const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field');

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  document.querySelector('.append-row').disabled = rowCount >= 10;
  document.querySelector('.remove-row').disabled = rowCount <= 2;
  document.querySelector('.append-column').disabled = columnCount >= 10;
  document.querySelector('.remove-column').disabled = columnCount <= 2;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('append-row')) {
      const newRow = document.createElement('tr');
      const columnCount = table.rows[0].cells.length;

      for (let i = 0; i < columnCount; i++) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }
      table.appendChild(newRow);
    }

    if (button.classList.contains('remove-row')) {
      if (table.rows.length > 2) {
        table.deleteRow(table.rows.length - 1);
      }
    }

    if (button.classList.contains('append-column')) {
      const columnCount = table.rows[0].cells.length;

      if (columnCount >= 10) {
        return;
      }

      for (const row of table.rows) {
        const newCell = document.createElement('td');

        row.appendChild(newCell);
      }
    }

    if (button.classList.contains('remove-column')) {
      const columnCount = table.rows[0].cells.length;

      if (columnCount <= 2) {
        return;
      }

      for (const row of table.rows) {
        row.deleteCell(-1);
      }
    }

    updateButtons();
  });
});
