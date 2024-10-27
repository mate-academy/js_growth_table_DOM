'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX_SIZE = 10;
const MIN_SIZE = 2;

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= MAX_SIZE;
  removeRowButton.disabled = rowCount <= MIN_SIZE;

  appendColumnButton.disabled = colCount >= MAX_SIZE;
  removeColumnButton.disabled = colCount <= MIN_SIZE;
}

appendRowButton.addEventListener('click', () => {
  if (table.rows.length < MAX_SIZE) {
    const newRow = table.insertRow();
    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < cellCount; i++) {
      newRow.insertCell();
    }
    updateButtons();
  }
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > MIN_SIZE) {
    table.deleteRow(-1);
    updateButtons();
  }
});

appendColumnButton.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount < MAX_SIZE) {
    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtons();
  }
});

removeColumnButton.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > MIN_SIZE) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtons();
  }
});

updateButtons();
