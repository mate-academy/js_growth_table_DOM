'use strict';

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('.field');

function getTableDimensions() {
  const rows = document.querySelectorAll('.field tr');
  const columns = rows.length ? rows[0].children.length : 0;

  return { rowsQuantity: rows.length, columnsQuantity: columns };
}

function updateButtonsState() {
  const { rowsQuantity, columnsQuantity } = getTableDimensions();

  btnAppendRow.disabled = rowsQuantity >= 10;
  btnRemoveRow.disabled = rowsQuantity <= 2;

  btnAppendColumn.disabled = columnsQuantity >= 10;
  btnRemoveColumn.disabled = columnsQuantity <= 2;
}

btnAppendRow.addEventListener('click', () => {
  const { rowsQuantity, columnsQuantity } = getTableDimensions();

  if (rowsQuantity < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnsQuantity; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    tableBody.appendChild(newRow);
    updateButtonsState();
  }
});

btnRemoveRow.addEventListener('click', () => {
  const { rowsQuantity } = getTableDimensions();

  if (rowsQuantity > 2) {
    tableBody.removeChild(tableBody.lastElementChild);
    updateButtonsState();
  }
});

btnAppendColumn.addEventListener('click', () => {
  const { columnsQuantity } = getTableDimensions();

  if (columnsQuantity < 10) {
    const rows = document.querySelectorAll('.field tr');

    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
    updateButtonsState();
  }
});

btnRemoveColumn.addEventListener('click', () => {
  const { columnsQuantity } = getTableDimensions();

  if (columnsQuantity > 2) {
    const rows = document.querySelectorAll('.field tr');

    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
    updateButtonsState();
  }
});

updateButtonsState();
