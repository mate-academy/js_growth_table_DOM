'use strict';

const table = document.querySelector('.field');
const buttonAddRows = document.querySelector('.append-row');
const buttonRemoveRows = document.querySelector('.remove-row');
const buttonAddCol = document.querySelector('.append-column');
const buttonRemoveCol = document.querySelector('.remove-column');
const allRows = table.rows;

function updateButtons() {
  buttonAddRows.disabled = allRows.length >= 10;
  buttonRemoveRows.disabled = allRows.length <= 2;

  const colCount = allRows[0].cells.length;

  buttonAddCol.disabled = colCount >= 10;
  buttonRemoveCol.disabled = colCount <= 2;
}

buttonAddRows.addEventListener('click', function () {
  if (allRows.length >= 10) {
    return;
  }

  const newRow = allRows[0].cloneNode(true);

  table.appendChild(newRow);
  updateButtons();
});

buttonRemoveRows.addEventListener('click', function () {
  if (allRows.length <= 2) {
    return;
  }

  table.deleteRow(0);
  updateButtons();
});

buttonAddCol.addEventListener('click', function () {
  if (allRows[0].cells.length >= 10) {
    return;
  }

  for (const row of allRows) {
    const newTd = row.cells[0].cloneNode(true);

    row.appendChild(newTd);
  }
  updateButtons();
});

buttonRemoveCol.addEventListener('click', function () {
  if (allRows[0].cells.length <= 2) {
    return;
  }

  for (const row of allRows) {
    row.deleteCell(0);
  }
  updateButtons();
});

updateButtons();
