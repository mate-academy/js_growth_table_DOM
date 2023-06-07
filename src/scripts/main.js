'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');
const buttons = container.querySelectorAll('.button');
let rowCount = table.rows.length;
let columnCount = table.rows[0].cells.length;

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.classList.contains('append-row')) {
      const newRow = document.createElement('tr');

      for (let i = 0; i < columnCount; i++) {
        const cell = document.createElement('td');

        newRow.appendChild(cell);
      }

      table.appendChild(newRow);
      rowCount++;
    }

    if (e.target.classList.contains('remove-row')) {
      if (rowCount > 2) {
        table.deleteRow(rowCount - 1);
        rowCount--;
      }
    }

    if (e.target.classList.contains('append-column')) {
      for (let i = 0; i < rowCount; i++) {
        const row = table.rows[i];

        const cell = document.createElement('td');

        row.appendChild(cell);
      }
      columnCount++;
    }

    if (e.target.classList.contains('remove-column')) {
      if (columnCount > 2) {
        for (let i = 0; i < table.rows.length; i++) {
          const row = table.rows[i];

          row.deleteCell(columnCount - 1);
        }
        columnCount--;
      }
    }

    updateButtonStates();
  });
});

const updateButtonStates = () => {
  const appendRowButton = container.querySelector('.append-row');
  const removeRowButton = container.querySelector('.remove-row');
  const appendColumnButton = container.querySelector('.append-column');
  const removeColumnButton = container.querySelector('.remove-column');

  appendRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;
  appendColumnButton.disabled = columnCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
};
