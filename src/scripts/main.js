'use strict';

const tableElement = document.querySelector('tbody');
const plusRowButton = document.querySelector('.append-row');
const plusColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_LIMIT = 10;
const MIN_LIMIT = 2;

function updateButtonState() {
  const rows = tableElement.querySelectorAll('tr').length;
  const firstRow = tableElement.querySelector('tr');
  const columns = firstRow ? firstRow.children.length : 0;

  plusRowButton.disabled = rows >= MAX_LIMIT;
  plusColumnButton.disabled = columns >= MAX_LIMIT;
  removeRowButton.disabled = rows <= MIN_LIMIT;
  removeColumnButton.disabled = columns <= MIN_LIMIT;
}

plusRowButton.addEventListener('click', () => {
  const numberOfRows = tableElement.querySelectorAll('tr').length;

  if (numberOfRows >= MAX_LIMIT) {
    return;
  }

  const firstRow = tableElement.querySelector('tr');
  const numberOfCells = firstRow ? firstRow.children.length : 1;
  const newRow = document.createElement('tr');

  for (let i = 0; i < numberOfCells; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  tableElement.appendChild(newRow);
  updateButtonState();
});

plusColumnButton.addEventListener('click', () => {
  const rows = tableElement.querySelectorAll('tr');
  const firstRow = tableElement.querySelector('tr');
  const numberOfColumns = firstRow ? firstRow.children.length : 0;

  if (numberOfColumns >= MAX_LIMIT) {
    return;
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  updateButtonState();
});

removeRowButton.addEventListener('click', () => {
  const rows = tableElement.querySelectorAll('tr');

  if (rows.length > MIN_LIMIT) {
    rows[rows.length - 1].remove();
  }

  updateButtonState();
});

removeColumnButton.addEventListener('click', () => {
  const rows = tableElement.querySelectorAll('tr');
  const firstRow = tableElement.querySelector('tr');

  if (firstRow && firstRow.children.length > MIN_LIMIT) {
    // console.log(`clicked`);
    rows.forEach((row) => {
      row.lastElementChild.remove();
    });
    updateButtonState();
  }
});

updateButtonState();
