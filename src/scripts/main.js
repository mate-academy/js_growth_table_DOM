'use strict';

const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

const MIN = 2;
const MAX = 10;

function updateButtons() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  appendRowBtn.disabled = rows >= MAX;
  removeRowBtn.disabled = rows <= MIN;
  appendColBtn.disabled = cols >= MAX;
  removeColBtn.disabled = cols <= MIN;
}

// ➕ Додаємо рядок
appendRowBtn.addEventListener('click', () => {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  if (rows < MAX) {
    const newRow = table.insertRow();

    for (let i = 0; i < cols; i++) {
      newRow.insertCell();
    }
    updateButtons();
  }
});

// ➖ Видаляємо рядок
removeRowBtn.addEventListener('click', () => {
  const rows = table.rows.length;

  if (rows > MIN) {
    table.deleteRow(-1);
    updateButtons();
  }
});

// ➕ Додаємо стовпець
appendColBtn.addEventListener('click', () => {
  const cols = table.rows[0].cells.length;

  if (cols < MAX) {
    for (const row of table.rows) {
      row.insertCell();
    }
    updateButtons();
  }
});

// ➖ Видаляємо стовпець
removeColBtn.addEventListener('click', () => {
  const cols = table.rows[0].cells.length;

  if (cols > MIN) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    updateButtons();
  }
});

// Початкове оновлення кнопок
updateButtons();
