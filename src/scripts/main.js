'use strict';

// write code here
const buttons = document.querySelectorAll(
  '.append-row, .remove-row, .append-column, .remove-column',
);
const table = document.querySelector('.field');

// Ensure the table has at least 2x2 cells initially
function ensureInitialTable() {
  if (table.rows.length === 0) {
    for (let r = 0; r < 2; r++) {
      const row = document.createElement('tr');

      for (let c = 0; c < 2; c++) {
        row.appendChild(document.createElement('td'));
      }
      table.appendChild(row);
    }
  }
}

// Update button states
function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColumnBtn.disabled = columnCount >= 10;
  removeColumnBtn.disabled = columnCount <= 2;
}

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const rowCount = table.rows.length;
    const columnCount = table.rows[0].cells.length;

    if (button.classList.contains('append-row')) {
      if (rowCount < 10) {
        const newRow = document.createElement('tr');

        for (let i = 0; i < columnCount; i++) {
          newRow.appendChild(document.createElement('td'));
        }
        table.appendChild(newRow);
      }
    }

    if (button.classList.contains('remove-row')) {
      if (rowCount > 2) {
        table.deleteRow(rowCount - 1);
      }
    }

    if (button.classList.contains('append-column')) {
      if (columnCount < 10) {
        for (const row of table.rows) {
          row.appendChild(document.createElement('td'));
        }
      }
    }

    if (button.classList.contains('remove-column')) {
      if (columnCount > 2) {
        for (const row of table.rows) {
          row.deleteCell(row.cells.length - 1);
        }
      }
    }

    updateButtons();
  });
});

// Initialize
ensureInitialTable();
updateButtons();
