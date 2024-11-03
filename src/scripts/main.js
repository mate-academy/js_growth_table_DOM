'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

let rowCount = table.rows.length;
let colCount = table.rows[0].cells.length;

function updateButtons() {
  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColBtn.disabled = colCount >= 10;
  removeColBtn.disabled = colCount <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (rowCount < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
    rowCount++;
    updateButtons();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (rowCount > 2) {
    table.deleteRow(-1);
    rowCount--;
    updateButtons();
  }
});

appendColBtn.addEventListener('click', () => {
  if (colCount < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }
    colCount++;
    updateButtons();
  }
});

removeColBtn.addEventListener('click', () => {
  if (colCount > 2) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    colCount--;
    updateButtons();
  }
});

updateButtons();
