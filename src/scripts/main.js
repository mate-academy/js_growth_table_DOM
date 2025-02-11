'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const MAX_SIZE = 10;
  const MIN_SIZE = 2;

  // Function to update the buttons' state
  const updateButtonsState = () => {
    const rows = table.rows.length;
    const columns = table.rows[0].cells.length;

    // Disable or enable row buttons
    removeRowButton.disabled = rows <= MIN_SIZE;
    appendRowButton.disabled = rows >= MAX_SIZE;

    // Disable or enable column buttons
    removeColumnButton.disabled = columns <= MIN_SIZE;
    appendColumnButton.disabled = columns >= MAX_SIZE;
  };

  // Append a row to the table
  appendRowButton.addEventListener('click', () => {
    const newRow = table.insertRow();
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell(); // No need to assign it to a variable
    }

    updateButtonsState();
  });

  // Remove the last row from the table
  removeRowButton.addEventListener('click', () => {
    table.deleteRow(table.rows.length - 1);
    updateButtonsState();
  });

  // Append a column to each row
  appendColumnButton.addEventListener('click', () => {
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell();
    }
    updateButtonsState();
  });

  // Remove the last column from each row
  removeColumnButton.addEventListener('click', () => {
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(rows[i].cells.length - 1);
    }
    updateButtonsState();
  });

  // Initial state check
  updateButtonsState();
});
