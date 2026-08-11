'use strict';

const MIN = 2;
const MAX = 10;

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const field = document.querySelector('.field');

function updateButtonState() {
  const totalCells = field.rows[0]?.cells.length ?? 0;
  const totalRows = field.rows.length;

  appendColumn.disabled = totalCells >= MAX;
  removeColumn.disabled = totalCells <= MIN;
  appendRow.disabled = totalRows >= MAX;
  removeRow.disabled = totalRows <= MIN;
}

appendColumn.addEventListener('click', () => {
  const totalCells = field.rows[0]?.cells.length ?? 0;

  appendColumn.disabled = totalCells >= MAX;

  if (totalCells === MAX) {
    return;
  }

  [...field.rows].forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });

  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  const totalCells = field.rows[0]?.cells.length ?? 0;

  removeColumn.disabled = totalCells >= MIN;

  if (totalCells === MIN) {
    return;
  }

  [...field.rows].forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtonState();
});

appendRow.addEventListener('click', () => {
  const totalRow = field.rows.length;

  if (totalRow === MAX) {
    return;
  }

  const totalCells = field.rows[0]?.cells.length ?? 0;
  const newRow = field.insertRow(-1);

  for (let i = 0; i < totalCells; i++) {
    newRow.insertCell();
  }

  updateButtonState();
});

removeRow.addEventListener('click', () => {
  const totalRow = field.rows.length;

  removeRow.disabled = totalRow <= MIN;

  if (totalRow === MIN) {
    return;
  }

  field.rows[field.rows.length - 1].remove();

  updateButtonState();
});
