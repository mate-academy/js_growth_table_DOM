'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MIN = 2;
const MAX = 10;

function updateButtons() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX;
  removeRowBtn.disabled = rowCount <= MIN;
  appendColBtn.disabled = colCount >= MAX;
  removeColBtn.disabled = colCount <= MIN;
}

// Dodawanie wiersza
appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows[0].cells.length;
  const newRow = table.insertRow();
  for (let i = 0; i < rowCount; i++) {
    newRow.insertCell();
  }
  updateButtons();
});

// Usuwanie wiersza
removeRowBtn.addEventListener('click', () => {
  table.deleteRow(table.rows.length - 1);
  updateButtons();
});

// Dodawanie kolumny
appendColBtn.addEventListener('click', () => {
  for (let row of table.rows) {
    row.insertCell();
  }
  updateButtons();
});

// Usuwanie kolumny
removeColBtn.addEventListener('click', () => {
  for (let row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }
  updateButtons();
});

// Inicjalizacja stanu przycisków
updateButtons();
