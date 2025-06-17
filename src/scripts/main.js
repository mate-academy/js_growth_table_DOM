'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  const MAX = 10;
  const MIN = 2;

  const updateButtonStates = () => {
    const rows = table.rows.length;
    const cols = table.rows[0].cells.length;

    appendRowBtn.disabled = rows >= MAX;
    removeRowBtn.disabled = rows <= MIN;
    appendColBtn.disabled = cols >= MAX;
    removeColBtn.disabled = cols <= MIN;
  };

  appendRowBtn.addEventListener('click', () => {
    if (table.rows.length < MAX) {
      const cols = table.rows[0].cells.length;
      const newRow = document.createElement('tr');

      for (let i = 0; i < cols; i++) {
        newRow.appendChild(document.createElement('td'));
      }
      table.appendChild(newRow);
      updateButtonStates();
    }
  });

  removeRowBtn.addEventListener('click', () => {
    if (table.rows.length > MIN) {
      table.deleteRow(-1);
      updateButtonStates();
    }
  });

  appendColBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length < MAX) {
      for (const row of table.rows) {
        row.appendChild(document.createElement('td'));
      }
      updateButtonStates();
    }
  });

  removeColBtn.addEventListener('click', () => {
    if (table.rows[0].cells.length > MIN) {
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      updateButtonStates();
    }
  });

  updateButtonStates();
});
