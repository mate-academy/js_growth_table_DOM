'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColumnBtn = document.querySelector('.append-column');
  const removeColumnBtn = document.querySelector('.remove-column');

  let rowCount = table.rows.length; // Initial row count
  let colCount = table.rows[0].cells.length; // Initial column count

  const MIN_SIZE = 2;
  const MAX_SIZE = 10;

  // Update button states based on current size
  function updateButtons() {
    appendRowBtn.disabled = rowCount >= MAX_SIZE;
    removeRowBtn.disabled = rowCount <= MIN_SIZE;
    appendColumnBtn.disabled = colCount >= MAX_SIZE;
    removeColumnBtn.disabled = colCount <= MIN_SIZE;
  }

  // Append a new row
  appendRowBtn.addEventListener('click', () => {
    if (rowCount < MAX_SIZE) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
      rowCount++;
      updateButtons();
    }
  });

  // Remove the last row
  removeRowBtn.addEventListener('click', () => {
    if (rowCount > MIN_SIZE) {
      table.deleteRow(-1);
      rowCount--;
      updateButtons();
    }
  });

  // Append a new column
  appendColumnBtn.addEventListener('click', () => {
    if (colCount < MAX_SIZE) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      colCount++;
      updateButtons();
    }
  });

  // Remove the last column
  removeColumnBtn.addEventListener('click', () => {
    if (colCount > MIN_SIZE) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }
      colCount--;
      updateButtons();
    }
  });

  // Initialize button states
  updateButtons();
});
