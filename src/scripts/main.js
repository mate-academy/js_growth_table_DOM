'use strict';

// write code here
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtons() {
  if (countRow >= 10) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }

  if (countRow <= 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (countColumn >= 10) {
    appendColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }

  if (countColumn <= 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

let countRow = table.rows.length;

const firstRow = table.rows[0];
let countColumn = firstRow.cells.length;

appendRowButton.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  for (let i = 0; i < countColumn; i++) {
    const cell = document.createElement('td');

    newRow.append(cell);
  }

  table.append(newRow);
  countRow++;
  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const rowIndex = countRow - 1;

  table.deleteRow(rowIndex);
  countRow--;
  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const newAllRows = [...document.querySelectorAll('tr')];

  for (const row of newAllRows) {
    const newCell = document.createElement('td');

    row.append(newCell);
  }

  countColumn++;
  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const newAllRows = [...document.querySelectorAll('tr')];

  for (const row of newAllRows) {
    const lastCell = row.cells[row.cells.length - 1];

    lastCell.remove();
  }

  countColumn--;
  updateButtons();
});
