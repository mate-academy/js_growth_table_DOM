'use strict';

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');
const maxSells = 10;
const minSells = 2;
let currentRows = 4;
let currentColumns = 4;

function createTable(rows, columns) {
  const table = document.querySelector('.field');

  table.remove();

  const tableCopy = document.createElement('table');

  const tbody = document.createElement('tbody');

  tableCopy.append(tbody);

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    tbody.append(row);

    for (let j = 0; j < columns; j++) {
      const column = document.createElement('td');

      row.append(column);
    }
  }

  tableCopy.classList.add('field');
  document.querySelector('.container').append(tableCopy);
}

createTable(currentRows, currentColumns);

btnAppendRow.addEventListener('click', () => {
  if (currentRows >= maxSells) {
    return;
  }

  currentRows++;

  if (currentRows >= maxSells) {
    btnAppendRow.setAttribute('disabled', '');
  }

  if (currentRows !== 2) {
    btnRemoveRow.removeAttribute('disabled');
  }

  createTable(currentRows, currentColumns);
});

btnRemoveRow.addEventListener('click', () => {
  if (currentRows <= minSells) {
    return;
  }

  currentRows--;

  if (currentRows <= minSells) {
    btnRemoveRow.setAttribute('disabled', '');
  }

  if (currentRows !== 10) {
    btnAppendRow.removeAttribute('disabled');
  }

  createTable(currentRows, currentColumns);
});

btnAppendColumn.addEventListener('click', () => {
  if (currentColumns >= maxSells) {
    return;
  }

  currentColumns++;

  if (currentColumns >= maxSells) {
    btnAppendColumn.setAttribute('disabled', '');
  }

  if (currentColumns !== 2) {
    btnRemoveColumn.removeAttribute('disabled');
  }

  createTable(currentRows, currentColumns);
});

btnRemoveColumn.addEventListener('click', () => {
  if (currentColumns <= minSells) {
    return;
  }

  currentColumns--;

  if (currentColumns <= minSells) {
    btnRemoveColumn.setAttribute('disabled', '');
  }

  if (currentColumns !== 10) {
    btnAppendColumn.removeAttribute('disabled');
  }

  createTable(currentRows, currentColumns);
});
