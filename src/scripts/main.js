'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');

function addLimitation() {
  const amountOfRows = tableBody.rows.length;
  const amountOfColumns = tableBody.rows[0].cells.length;

  addColumn.disabled = amountOfColumns >= 10;
  removeColumn.disabled = amountOfColumns <= 2;
  addRow.disabled = amountOfRows >= 10;
  removeRow.disabled = amountOfRows <= 2;
}

addRow.addEventListener('click', () => {
  const amountOfRows = tableBody.rows.length;
  const amountOfColumns = tableBody.rows[0].cells.length;

  if (amountOfRows < 10) {
    const addNewRow = tableBody.insertRow();

    for (let i = 0; i < amountOfColumns; i++) {
      addNewRow.insertCell();
    }
    addLimitation();
  }
});

removeRow.addEventListener('click', () => {
  const amountOfRows = tableBody.rows.length;

  if (amountOfRows > 2) {
    tableBody.deleteRow(-1);
    addLimitation();
  }
});

addColumn.addEventListener('click', () => {
  const amountOfColumns = tableBody.rows[0].cells.length;

  if (amountOfColumns < 10) {
    for (const row of tableBody.rows) {
      row.insertCell();
    }
    addLimitation();
  }
});

removeColumn.addEventListener('click', () => {
  const amountOfColumns = tableBody.rows[0].cells.length;

  if (amountOfColumns > 2) {
    for (const row of tableBody.rows) {
      row.deleteCell(-1);
    }
    addLimitation();
  }
});

addLimitation();
