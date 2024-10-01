'use strict';

const buttonContainer = document.querySelector('.container');
const tableBody = document.querySelector('.field tbody');

const updateButtonState = () => {
  const firstRowCells = tableBody.querySelector('tr');
  const columnCount = firstRowCells.querySelectorAll('td').length;
  const rowCount = tableBody.rows.length;

  buttonContainer.querySelector('.append-row').disabled = rowCount >= 10;
  buttonContainer.querySelector('.remove-row').disabled = rowCount <= 2;
  buttonContainer.querySelector('.append-column').disabled = columnCount >= 10;
  buttonContainer.querySelector('.remove-column').disabled = columnCount <= 2;
};

buttonContainer.addEventListener('click', (e) => {
  const button = e.target.closest('.button');
  const firstRowCells = tableBody.querySelector('tr');
  const columnCount = firstRowCells.querySelectorAll('td').length;
  const rowCount = tableBody.rows.length;
  const allRows = tableBody.querySelectorAll('tr');

  if (button.classList.contains('append-row')) {
    if (rowCount >= 10) {
      button.setAttribute('disabled', '');

      return;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < columnCount; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
  }

  if (button.classList.contains('remove-row')) {
    if (rowCount <= 2) {
      button.setAttribute('disabled', '');

      return;
    }

    tableBody.lastElementChild.remove();
  }

  if (button.classList.contains('append-column')) {
    if (columnCount >= 10) {
      button.setAttribute('disabled', '');

      return;
    }

    allRows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  }

  if (button.classList.contains('remove-column')) {
    if (columnCount <= 2) {
      button.setAttribute('disabled', '');

      return;
    }

    allRows.forEach((row) => {
      row.lastElementChild.remove();
    });
  }

  updateButtonState();
});

updateButtonState();
