'use strict';

'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtonsState() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0] ? table.rows[0].cells.length : 0;

  appendRowBtn.disabled = rowsCount >= 10;
  removeRowBtn.disabled = rowsCount <= 2;
  appendColumnBtn.disabled = colsCount >= 10;
  removeColumnBtn.disabled = colsCount <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const currentColsCount = table.rows[0].cells.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < currentColsCount; i++) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }

  tbody.appendChild(newRow);

  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  const lastRow = table.rows[table.rows.length - 1];

  if (lastRow) {
    lastRow.remove();
  }

  updateButtonsState();
});

appendColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  }

  updateButtonsState();
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    const lastCell = row.cells[row.cells.length - 1];

    if (lastCell) {
      lastCell.remove();
    }
  }

  updateButtonsState();
});

updateButtonsState();
