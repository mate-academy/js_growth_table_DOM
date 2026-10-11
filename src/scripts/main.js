'use strict';

const mainTable = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const rowsCount = mainTable.rows.length;
  const columnsCount = mainTable.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= 10;
  removeRowButton.disabled = rowsCount <= 2;
  appendColumnButton.disabled = columnsCount >= 10;
  removeColumnButton.disabled = columnsCount <= 2;
}

appendRowButton.addEventListener('click', () => {
  const rowsCount = mainTable.rows.length;
  const columnsCount = mainTable.rows[0].cells.length;

  if (rowsCount >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columnsCount; i++) {
    const newColumn = document.createElement('td');

    newRow.append(newColumn);
  }

  mainTable.tBodies[0].append(newRow);

  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const rowsCount = mainTable.rows.length;

  if (rowsCount <= 2) {
    return;
  }

  mainTable.deleteRow(-1);

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const rows = mainTable.rows;
  const columnsCount = mainTable.rows[0].cells.length;

  if (columnsCount >= 10) {
    return;
  }

  for (const row of rows) {
    const newColumn = document.createElement('td');

    row.append(newColumn);
  }

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const rows = mainTable.rows;
  const columnsCount = mainTable.rows[0].cells.length;

  if (columnsCount <= 2) {
    return;
  }

  for (const row of rows) {
    row.deleteCell(-1);
  }

  updateButtons();
});
