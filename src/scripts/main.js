'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

function updateButtonStates() {
  const rows = document.querySelector('table').rows.length;
  const cols = document.querySelector('table').rows[0].cells.length;

  appendRow.disabled = rows >= 10;
  removeRow.disabled = rows <= 2;
  appendCol.disabled = cols >= 10;
  removeCol.disabled = cols <= 2;
}

appendRow.addEventListener('click', () => {
  const table = document.querySelector('.field');
  const rowCount = table.rows.length;

  if (rowCount < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const cell = newRow.insertCell();

      cell.textContent = `Row ${table.rows.length} Cell ${i + 1}`;
    }
  }
  updateButtonStates();
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
  updateButtonStates();
});

appendCol.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const cell = table.rows[i].insertCell();

      cell.textContent = `Row ${i + 1} Cell ${table.rows[i].cells.length}`;
    }
  }
  updateButtonStates();
});

removeCol.addEventListener('click', () => {
  const table = document.querySelector('table');

  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  }
  updateButtonStates();
});
