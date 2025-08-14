'use strict';

// write code here
const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const firstRow = field.rows[0];
  const cellsCount = firstRow.cells.length;
  const tr = document.createElement('tr');

  for (let i = 0; i < cellsCount; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }

  field.append(tr);

  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  field.deleteRow(field.rows.length - 1);

  updateButtonStates();
});

appendColumn.addEventListener('click', () => {
  for (const row of field.rows) {
    const td = document.createElement('td');

    row.append(td);
  }

  updateButtonStates();
});

removeColumn.addEventListener('click', () => {
  for (const row of field.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  updateButtonStates();
});

function updateButtonStates() {
  if (field.rows.length === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (field.rows.length === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (field.rows[0].cells.length === 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (field.rows[0].cells.length === 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
}
