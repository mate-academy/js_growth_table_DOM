'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateRowButtons() {
  const rowCount = table.rows.length;

  appendRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;
}

appendRowButton.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const numberOfCells = table.rows[0].cells.length;

  if (rowCount >= 10) {
    return;
  }

  const tableRef = document.querySelector('.field');
  const newRow = tableRef.insertRow(-1);

  for (let i = 0; i < numberOfCells; i++) {
    const newCell = newRow.insertCell(0);
    const newText = document.createTextNode('');

    newCell.appendChild(newText);
  }

  updateRowButtons();
});

removeRowButton.addEventListener('click', () => {
  table.deleteRow(table.rows.length - 1);

  updateRowButtons();
});

function updateColumnButtons() {
  const columnCount = table.rows[0].cells.length;

  appendColumnButton.disabled = columnCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
}

appendColumnButton.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount >= 10) {
    return;
  }

  for (const row of table.rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }

  updateColumnButtons();
});

removeColumnButton.addEventListener('click', () => {
  for (const row of table.rows) {
    if (row.cells.length > 0) {
      row.deleteCell(-1);
    }
  }

  updateColumnButtons();
});
