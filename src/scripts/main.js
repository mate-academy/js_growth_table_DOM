'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

function updateButtonsState() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowsCount >= 10;
  removeRowBtn.disabled = rowsCount <= 2;
  appendColBtn.disabled = colsCount >= 10;
  removeColBtn.disabled = colsCount <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = document.createElement('tr');
  const columnsCount = table.rows[0].cells.length;

  for (let i = 0; i < columnsCount; i++) {
    const td = document.createElement('td');

    newRow.append(td);
  }

  tbody.append(newRow);
  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);
  updateButtonsState();
});

appendColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const td = document.createElement('td');

    row.append(td);
  }
  updateButtonsState();
});

removeColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }
  updateButtonsState();
});

updateButtonsState();
