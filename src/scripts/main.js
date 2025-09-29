'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

// кількість рядків
let rows = table.rows.length;
// кількість колонок
let cols = table.rows[0].cells.length;

function updateButtons() {
  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;
  appendColBtn.disabled = cols >= 10;
  removeColBtn.disabled = cols <= 2;
}

// Додати рядок
appendRowBtn.addEventListener('click', () => {
  if (rows < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < cols; i++) {
      newRow.insertCell();
    }
    rows++;
    updateButtons();
  }
});

// Видалити рядок
removeRowBtn.addEventListener('click', () => {
  if (rows > 2) {
    // видаляє останній рядок
    table.deleteRow(-1);
    rows--;
    updateButtons();
  }
});

// Додати колонку
appendColBtn.addEventListener('click', () => {
  if (cols < 10) {
    for (let i = 0; i < rows; i++) {
      table.rows[i].insertCell();
    }
    cols++;
    updateButtons();
  }
});

// Видалити колонку
removeColBtn.addEventListener('click', () => {
  if (cols > 2) {
    for (let i = 0; i < rows; i++) {
      // видаляє останню клітинку
      table.rows[i].deleteCell(-1);
    }
    cols--;
    updateButtons();
  }
});

// ініціалізація
updateButtons();
