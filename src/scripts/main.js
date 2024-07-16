'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

const updateButtonState = () => {
  const rows = field.rows.length;
  const columns = field.rows[0].cells.length;

  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;
  appendColumn.disabled = columns >= 10;
  removeColumn.disabled = columns <= 2;
};

appendRow.addEventListener('click', () => {
  const rows = field.rows.length;

  if (rows < 10) {
    const tbody = field.querySelector('tbody');
    const newRow = document.createElement('tr');
    const columns = field.rows[0].cells.length;

    for (let i = 0; i < columns; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tbody.appendChild(newRow);
    updateButtonState();
  }
});

removeRow.addEventListener('click', () => {
  const rows = field.rows.length;

  if (rows > 2) {
    field.deleteRow(rows - 1);
  }

  updateButtonState();
});

appendColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length < 10) {
    Array.from(field.rows).forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  }

  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  if (field.rows[0].cells.length > 2) {
    Array.from(field.rows).forEach((row) => {
      row.deleteCell(row.cells.length - 1);
    });
  }

  updateButtonState();
});

updateButtonState();
