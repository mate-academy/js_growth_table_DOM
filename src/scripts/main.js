'use strict';

const table = document.querySelector('table');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

function updateButtonState() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= maxRows;
  removeRowBtn.disabled = rowCount <= minRows;
  appendColumnBtn.disabled = columnCount >= maxColumns;
  removeColumnBtn.disabled = columnCount <= minColumns;
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length < maxRows) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell().textContent = '';
    }
  }
  updateButtonState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > minRows) {
    table.deleteRow(-1);
  }
  updateButtonState();
});

appendColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length < maxColumns) {
    Array.from(table.rows).forEach((row) => {
      row.insertCell().textContent = '';
    });
  }
  updateButtonState();
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length > minColumns) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
  }
  updateButtonState();
});
