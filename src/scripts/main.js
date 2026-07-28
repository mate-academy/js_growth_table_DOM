'use strict';

// write code here
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const minSize = 2;
const maxSize = 10;

appendRowButton.addEventListener('click', () => {
  const currentCountOfRows = getCurrentCountOfRows();

  if (currentCountOfRows === maxSize) {
    return;
  }

  const newRow = document.createElement('tr');
  const currentCountOfColumns = getCurrentCountOfColumns();

  for (let i = 0; i < currentCountOfColumns; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  tbody.append(newRow);
  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const currentCountOfRows = getCurrentCountOfRows();

  if (currentCountOfRows === minSize) {
    return;
  }

  tbody.lastElementChild.remove();
  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const currentCountOfColumns = getCurrentCountOfColumns();

  if (currentCountOfColumns === maxSize) {
    return;
  }

  const currentRows = tbody.querySelectorAll('tr');

  for (const row of currentRows) {
    const newColumn = document.createElement('td');

    row.append(newColumn);
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const currentCountOfColumns = getCurrentCountOfColumns();

  if (currentCountOfColumns === minSize) {
    return;
  }

  const currentRows = tbody.querySelectorAll('tr');

  for (const row of currentRows) {
    row.lastElementChild.remove();
  }

  updateButtons();
});

function getCurrentCountOfRows() {
  return [...tbody.querySelectorAll('tr')].length;
}

function getCurrentCountOfColumns() {
  return tbody.querySelector('tr').children.length;
}

function updateButtons() {
  const currentCountOfRows = getCurrentCountOfRows();
  const currentCountOfColumns = getCurrentCountOfColumns();

  appendRowButton.disabled = currentCountOfRows === maxSize;
  removeRowButton.disabled = currentCountOfRows === minSize;

  appendColumnButton.disabled = currentCountOfColumns === maxSize;
  removeColumnButton.disabled = currentCountOfColumns === minSize;
}

updateButtons();
