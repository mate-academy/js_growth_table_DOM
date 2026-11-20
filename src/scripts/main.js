'use strict';

// write code here
const table = document.querySelector('.field');
const tBody = table.querySelector('tbody');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

function updateButtons() {
  const rowCount = tBody.rows.length;
  const cellCount = tBody.rows[0].cells.length;

  buttonAppendRow.disabled = rowCount >= 10;
  buttonRemoveRow.disabled = rowCount <= 2;

  buttonAppendColumn.disabled = cellCount >= 10;
  buttonRemoveColumn.disabled = cellCount <= 2;
}

updateButtons();

buttonAppendRow.addEventListener('click', () => {
  const rowCount = tBody.rows.length;
  const cellCount = tBody.rows[0].cells.length;

  if (rowCount < 10) {
    const row = tBody.insertRow();

    for (let i = 0; i < cellCount; i++) {
      row.insertCell();
    }

    updateButtons();
  }
});

buttonRemoveRow.addEventListener('click', () => {
  const rowCount = tBody.rows.length;

  if (rowCount >= 2) {
    tBody.deleteRow(-1);
  }

  updateButtons();
});

buttonAppendColumn.addEventListener('click', () => {
  const rowCount = tBody.rows.length;
  const cellCount = tBody.rows[0].cells.length;

  if (cellCount < 10) {
    for (let i = 0; i < rowCount; i++) {
      tBody.rows[i].insertCell();
    }
  }

  updateButtons();
});

buttonRemoveColumn.addEventListener('click', () => {
  const rowCount = tBody.rows.length;
  const cellCount = tBody.rows[0].cells.length;

  if (cellCount > 2) {
    for (let i = 0; i < rowCount; i++) {
      tBody.rows[i].deleteCell(-1);
    }
  }

  updateButtons();
});
