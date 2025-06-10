'use strict';

// write code here
document.addEventListener('DOMContentLoaded', (e) => {
  const field = document.querySelector('.field tbody');

  const addRowButton = document.querySelector('.append-row');

  const deleteRowButton = document.querySelector('.remove-row');

  const addColumnButton = document.querySelector('.append-column');

  const deleteColumnButton = document.querySelector('.remove-column');

  const updateButtonStates = () => {
    const fieldRows = [...field.children];
    const rowCount = fieldRows.length;
    const colCount = fieldRows[0].children.length;

    addRowButton.disabled = rowCount >= 10;
    deleteRowButton.disabled = rowCount <= 2;

    addColumnButton.disabled = colCount >= 10;
    deleteColumnButton.disabled = colCount <= 2;
  };

  addRowButton.addEventListener('click', () => {
    const fieldRows = [...field.children];

    if (fieldRows.length === 10) {
      return;
    }

    const cellCount = fieldRows[0].children.length;

    const newRow = document.createElement('tr');

    for (let i = 0; i < cellCount; i++) {
      newRow.appendChild(document.createElement('td'));
    }

    field.appendChild(newRow);

    updateButtonStates();
  });

  deleteRowButton.addEventListener('click', () => {
    const fieldRows = [...field.children];

    if (fieldRows.length === 2) {
      return;
    }

    fieldRows[fieldRows.length - 1].remove();

    updateButtonStates();
  });

  addColumnButton.addEventListener('click', () => {
    const fieldRows = [...field.children];
    const cellCount = fieldRows[0].children.length;

    if (cellCount === 10) {
      return;
    }

    fieldRows.forEach((row) => {
      row.appendChild(document.createElement('td'));
    });

    updateButtonStates();
  });

  deleteColumnButton.addEventListener('click', () => {
    const fieldRows = [...field.children];
    const cellCount = fieldRows[0].children.length;

    if (cellCount === 2) {
      return;
    }

    fieldRows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    updateButtonStates();
  });
});
