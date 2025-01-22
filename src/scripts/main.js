'use strict';

const field = document.querySelector('.field');
const buttons = [...document.querySelectorAll('.button')];

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

const updateButtonsState = () => {
  const rows = field.querySelectorAll('tr');
  const rowCount = rows.length;
  const columnCount = rows[0].children.length || 0;

  document.querySelector('.append-row').disabled = rowCount >= MAX_ROWS;
  document.querySelector('.remove-row').disabled = rowCount <= MIN_ROWS;

  document.querySelector('.append-column').disabled =
    columnCount >= MAX_COLUMNS;

  document.querySelector('.remove-column').disabled =
    columnCount <= MIN_COLUMNS;
};

updateButtonsState();

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const rows = field.querySelectorAll('tr');
    const rowCount = rows.length;
    const columnCount = rows[0].children.length || 0;

    if (button.classList.contains('append-row')) {
      if (rowCount < MAX_ROWS) {
        const newRow = document.createElement('tr');

        for (let i = 0; i < columnCount; i++) {
          const newCell = document.createElement('td');

          newRow.append(newCell);
        }

        field.append(newRow);
      }
    }

    if (button.classList.contains('remove-row')) {
      if (rowCount > MIN_ROWS) {
        field.lastElementChild.remove();
      }
    }

    if (button.classList.contains('append-column')) {
      if (columnCount < MAX_COLUMNS) {
        rows.forEach((row) => {
          const newCell = document.createElement('td');

          row.append(newCell);
        });
      }
    }

    if (button.classList.contains('remove-column')) {
      if (columnCount > MIN_COLUMNS) {
        rows.forEach((row) => {
          row.lastElementChild.remove();
        });
      }
    }

    updateButtonsState();
  });
});
