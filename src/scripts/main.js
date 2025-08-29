'use strict';

const table = document.querySelector('table');
const tbody = table.tBodies[0];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

function updateButtons() {
  appendRow.disabled = tbody.rows.length >= max;
  removeRow.disabled = tbody.rows.length <= min;
  appendColumn.disabled = tbody.rows[0].cells.length >= max;
  removeColumn.disabled = tbody.rows[0].cells.length <= min;
}

appendRow.addEventListener('click', () => {
  if (tbody.rows.length < max) {
    const newRow = tbody.insertRow();
    const cols = tbody.rows[0].cells.length;

    for (let i = 0; i < cols; i++) {
      newRow.insertCell();
    }
  }
  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (tbody.rows.length > min) {
    tbody.deleteRow(tbody.rows.length - 1);
  }
  updateButtons();
});

appendColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length < max) {
    for (const row of tbody.rows) {
      row.insertCell();
    }
  }
  updateButtons();
});

removeColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length > min) {
    for (const row of tbody.rows) {
      row.deleteCell(row.cells.length - 1);
    }
  }
  updateButtons();
});

updateButtons();
