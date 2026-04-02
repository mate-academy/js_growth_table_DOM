'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

/**
 * Оновлює стан кнопок (disabled), базуючись на кількості рядків та стовпців
 */
function updateButtonsState() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;
  appendColBtn.disabled = colCount >= MAX_SIZE;
  removeColBtn.disabled = colCount <= MIN_SIZE;
}

// Додати рядок
appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (rowCount < MAX_SIZE) {
    const newRow = table.insertRow(-1); // додає в кінець

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell(-1);
    }
  }

  updateButtonsState();
});

// Видалити рядок
removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > MIN_SIZE) {
    table.deleteRow(-1);
  }

  updateButtonsState();
});

// Додати стовпець
appendColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount < MAX_SIZE) {
    for (const row of table.rows) {
      row.insertCell(-1);
    }
  }

  updateButtonsState();
});

// Видалити стовпець
removeColBtn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > MIN_SIZE) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }

  updateButtonsState();
});

// Ініціалізація стану кнопок при завантаженні
//  (на випадок, якщо початковий HTML інший)
updateButtonsState();
