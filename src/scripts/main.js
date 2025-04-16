'use strict';

const table = document.querySelector('table');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function updateButtonsState() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColBtn.disabled = colCount >= MAX;
  removeColBtn.disabled = colCount <= MIN;
}

appendRowBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  updateButtonsState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > MIN) {
    table.deleteRow(-1);
  }

  updateButtonsState();
});

appendColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= MAX) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonsState();
});

removeColBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= MIN) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonsState();
});

// Ініціалізуємо стан кнопок при завантаженні
updateButtonsState();
