'use strict';

const div = document.querySelector('div');
const buttonAppendRow = div.querySelector('.append-row');
const buttonRemoveRow = div.querySelector('.remove-row');
const buttonAppendColumn = div.querySelector('.append-column');
const buttonRemoveColumn = div.querySelector('.remove-column');

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody') || table;

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function updateButtons() {
  const rows = tbody.querySelectorAll('tr');
  const rowCount = rows.length;
  const columnCount = rowCount > 0 ? rows[0].children.length : 0;

  buttonAppendRow.disabled = rowCount >= MAX_COUNT;
  buttonRemoveRow.disabled = rowCount <= MIN_COUNT;
  buttonAppendColumn.disabled = columnCount >= MAX_COUNT;
  buttonRemoveColumn.disabled = columnCount <= MIN_COUNT;
}

buttonAppendRow.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  const numberOfColumns = rows.length > 0 ? rows[0].children.length : 0;

  if (rows.length < MAX_COUNT) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < numberOfColumns; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tbody.appendChild(newRow);

    updateButtons();
  }
});

buttonRemoveRow.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length > MIN_COUNT) {
    const lastRow = rows[rows.length - 1];

    if (lastRow.parentNode === tbody) {
      tbody.removeChild(lastRow);
    } else {
    }
    updateButtons();
  }
});

buttonAppendColumn.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length > 0) {
    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });

    updateButtons();
  }
});

buttonRemoveColumn.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');
  const columnCount = rows.length > 0 ? rows[0].children.length : 0;

  if (columnCount > MIN_COUNT) {
    rows.forEach((row) => {
      const lastCell = row.lastElementChild;

      if (lastCell) {
        row.removeChild(lastCell);
      } else {
      }
    });

    updateButtons();
  }
});

updateButtons();
