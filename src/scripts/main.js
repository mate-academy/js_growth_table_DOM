'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  let rowCount = table.rows.length;
  let colCount = table.rows[0].cells.length;

  updateButtonState();

  function updateButtonState() {
    if (rowCount >= 10) {
      appendRowButton.disabled = true;
      removeRowButton.disabled = false;
    } else if (rowCount <= 2) {
      appendRowButton.disabled = false;
      removeRowButton.disabled = true;
    } else {
      appendRowButton.disabled = false;
      removeRowButton.disabled = false;
    }

    if (colCount >= 10) {
      appendColumnButton.disabled = true;
      removeColumnButton.disabled = false;
    } else if (colCount <= 2) {
      appendColumnButton.disabled = false;
      removeColumnButton.disabled = true;
    } else {
      appendColumnButton.disabled = false;
      removeColumnButton.disabled = false;
    }
  }

  appendRowButton.addEventListener('click', () => {
    if (rowCount < 10) {
      rowCount++;

      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
      updateButtonState();
    }
  });

  removeRowButton.addEventListener('click', () => {
    if (rowCount > 2) {
      rowCount--;
      table.deleteRow(table.rows.length - 1);
      updateButtonState();
    }
  });

  appendColumnButton.addEventListener('click', () => {
    if (colCount < 10) {
      colCount++;

      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      updateButtonState();
    }
  });

  removeColumnButton.addEventListener('click', () => {
    if (colCount > 2) {
      colCount--;

      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(table.rows[i].cells.length - 1);
      }
      updateButtonState();
    }
  });
});
