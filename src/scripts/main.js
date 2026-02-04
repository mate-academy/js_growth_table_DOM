'use strict';

const table = document.querySelector('.field');
const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendCol = document.querySelector('.append-column');
const btnRemoveCol = document.querySelector('.remove-column');

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  btnAppendRow.disabled = rowCount >= 10;
  btnRemoveRow.disabled = rowCount <= 2;
  btnAppendCol.disabled = colCount >= 10;
  btnRemoveCol.disabled = colCount <= 2;
}

btnAppendRow.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }
  updateButtons();
});

btnRemoveRow.addEventListener('click', () => {
  table.deleteRow(-1);
  updateButtons();
});

btnAppendCol.addEventListener('click', () => {
  for (const row of table.rows) {
    row.insertCell();
  }
  updateButtons();
});

btnRemoveCol.addEventListener('click', () => {
  for (const row of table.rows) {
    row.deleteCell(-1);
  }
  updateButtons();
});

updateButtons();
