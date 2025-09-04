'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function updateButtons() {
  const rowCount = tbody.rows.length;
  const colCount = tbody.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColBtn.disabled = colCount >= MAX;
  removeColBtn.disabled = colCount <= MIN;
}

appendRowBtn.addEventListener('click', () => {
  const colCount = tbody.rows[0].cells.length;
  const newRow = tbody.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell().textContent = `${tbody.rows.length} × ${i + 1}`;
  }
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (tbody.rows.length > MIN) {
    tbody.deleteRow(-1);
    updateButtons();
  }
});

appendColBtn.addEventListener('click', () => {
  const colCount = tbody.rows[0].cells.length;

  if (colCount < MAX) {
    Array.from(tbody.rows).forEach((row, rowIndex) => {
      row.insertCell().textContent = `${rowIndex + 1} × ${colCount + 1}`;
    });
    updateButtons();
  }
});

removeColBtn.addEventListener('click', () => {
  const colCount = tbody.rows[0].cells.length;

  if (colCount > MIN) {
    Array.from(tbody.rows).forEach((row) => row.deleteCell(-1));
    updateButtons();
  }
});

// Initialize button states on load
updateButtons();
