'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const MIN_ROWS = 2;
  const MAX_ROWS = 10;
  const MIN_COLS = 2;
  const MAX_COLS = 10;

  function updateButtonsState() {
    const rows = table.rows.length;
    const cols = table.rows[0].cells.length;

    appendRowBtn.disabled = rows >= MAX_ROWS;
    removeRowBtn.disabled = rows <= MIN_ROWS;

    appendColBtn.disabled = cols >= MAX_COLS;
    removeColBtn.disabled = cols <= MIN_COLS;
  }

  appendRowBtn.addEventListener('click', () => {
    const cols = table.rows[0].cells.length;
    const newRow = table.insertRow();

    for (let i = 0; i < cols; i++) {
      newRow.insertCell();
    }
    updateButtonsState();
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > MIN_ROWS) {
      table.deleteRow(-1);
    }
    updateButtonsState();
  });

  appendColBtn.addEventListener('click', () => {
    const cols = table.rows[0].cells.length;

    if (cols >= MAX_COLS) {
      return;
    }

    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtonsState();
  });

  removeColBtn.addEventListener('click', () => {
    const cols = table.rows[0].cells.length;

    if (cols <= MIN_COLS) {
      return;
    }

    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtonsState();
  });

  updateButtonsState();
});
