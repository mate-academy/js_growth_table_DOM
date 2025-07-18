'use strict';

// write code here
const table = document.querySelector('table.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0]?.cells.length || 0;

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColBtn.disabled = colCount >= MAX;
  removeColBtn.disabled = colCount <= MIN;
}

appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (rowCount < MAX) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    updateButtons();
  }
});

removeRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount > MIN) {
    table.deleteRow(rowCount - 1);
    updateButtons();
  }
});

appendColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount < MAX) {
    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtons();
  }
});

removeColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > MIN) {
    for (const row of table.rows) {
      row.deleteCell(colCount - 1);
    }
    updateButtons();
  }
});
