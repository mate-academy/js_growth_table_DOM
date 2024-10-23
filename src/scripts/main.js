'use strict';

const table = document.querySelector('table');
const buttonAddRows = document.querySelector('.append-row');
const buttonRemoveRows = document.querySelector('.remove-row');
const buttonAddCol = document.querySelector('.append-column');
const buttonRemoveCol = document.querySelector('.remove-column');
const maxLimit = 10;
const minLimit = 2;

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  buttonAddRows.disabled = rowCount >= maxLimit;
  buttonRemoveRows.disabled = rowCount <= minLimit;
  buttonAddCol.disabled = colCount >= maxLimit;
  buttonRemoveCol.disabled = colCount <= minLimit;
}

buttonAddRows.addEventListener('click', () => {
  if (table.rows.length < maxLimit) {
    const newRow = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }

    updateButtons();
  }
});

buttonRemoveRows.addEventListener('click', () => {
  if (table.rows.length > minLimit) {
    table.deleteRow(-1);
    updateButtons();
  }
});

buttonAddCol.addEventListener('click', () => {
  if (table.rows[0].cells.length < maxLimit) {
    for (const row of table.rows) {
      row.insertCell();
    }

    updateButtons();
  }
});

buttonRemoveCol.addEventListener('click', () => {
  if (table.rows[0].cells.length > minLimit) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }

    updateButtons();
  }
});

updateButtons();
