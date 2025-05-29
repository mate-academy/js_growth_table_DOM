'use strict';

const table = document.querySelector('table');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

function updateButtonsStatus() {
  const numRows = table.rows.length;
  const numColumns = table.rows[0].cells.length;

  buttonAppendRow.disabled = numRows >= 10;
  buttonRemoveRow.disabled = numRows <= 2;
  buttonAppendColumn.disabled = numColumns >= 10;
  buttonRemoveColumn.disabled = numColumns <= 2;
}

buttonAppendRow.addEventListener('click', () => {
  const numRows = table.rows.length;
  const numColumns = table.rows[0].cells.length;

  if (numRows >= 10) {
    return;
  }

  const row = table.insertRow(numRows);

  for (let i = 0; i < numColumns; i++) {
    row.insertCell(i);
  }

  updateButtonsStatus();
});

buttonRemoveRow.addEventListener('click', () => {
  table.deleteRow(-1);

  updateButtonsStatus();
});

buttonAppendColumn.addEventListener('click', () => {
  const numRows = table.rows.length;
  const numColumns = table.rows[0].cells.length;

  if (numColumns >= 10) {
    return;
  }

  for (let i = 0; i < numRows; i++) {
    const newCell = document.createElement('td');

    table.rows[i].appendChild(newCell);
  }

  updateButtonsStatus();
});

buttonRemoveColumn.addEventListener('click', () => {
  const numRows = table.rows.length;

  for (let i = 0; i < numRows; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateButtonsStatus();
});
