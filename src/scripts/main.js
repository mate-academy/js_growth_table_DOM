'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const field = document.querySelector('.field');

  const addRowBut = document.querySelector('.append-row');
  const removeRowBut = document.querySelector('.remove-row');
  const addColumnBut = document.querySelector('.append-column');
  const removeColumnBut = document.querySelector('.remove-column');

  function getRowCount() {
    return field.querySelectorAll('tr').length;
  }

  function getColumnCount() {
    const firstRow = field.querySelector('tr');

    return firstRow ? firstRow.querySelectorAll('td').length : 0;
  }

  function updateButtonStates() {
    const currentRows = getRowCount();
    const currentColumns = getColumnCount();

    addRowBut.disabled = currentRows >= 10;
    removeRowBut.disabled = currentRows <= 2;

    addColumnBut.disabled = currentColumns >= 10;
    removeColumnBut.disabled = currentColumns <= 2;
  }

  updateButtonStates();

  addRowBut.addEventListener('click', () => {
    if (getRowCount() < 10) {
      const newRow = field.insertRow();
      const currentColumns = getColumnCount();

      for (let i = 0; i < currentColumns; i++) {
        newRow.insertCell();
      }
      updateButtonStates();
    }
  });

  removeRowBut.addEventListener('click', () => {
    if (getRowCount() > 2) {
      field.deleteRow(getRowCount() - 1);
      updateButtonStates();
    }
  });

  addColumnBut.addEventListener('click', () => {
    if (getColumnCount() < 10) {
      const rows = field.querySelectorAll('tr');

      rows.forEach((row) => {
        row.insertCell();
      });
      updateButtonStates();
    }
  });

  removeColumnBut.addEventListener('click', () => {
    if (getColumnCount() > 2) {
      const rows = field.querySelectorAll('tr');
      const lastColumnIndex = getColumnCount() - 1;

      rows.forEach((row) => {
        row.deleteCell(lastColumnIndex);
      });
      updateButtonStates();
    }
  });
});
