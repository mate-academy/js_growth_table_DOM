'use strict';

const table = document.querySelector('table');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

// Получаем количество строк
function getRowCount() {
  return table.rows.length;
}

// Получаем количество колонок (в первой строке)
function getColCount() {
  return table.rows[0]?.cells.length || 0;
}

// Обновляем активность кнопок
function updateButtons() {
  const rowCount = getRowCount();
  const colCount = getColCount();

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColBtn.disabled = colCount >= 10;
  removeColBtn.disabled = colCount <= 2;
}

// Добавление строки
appendRowBtn.addEventListener('click', () => {
  const colCount = getColCount();
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }
  updateButtons();
});

// Удаление строки
removeRowBtn.addEventListener('click', () => {
  if (getRowCount() > 2) {
    table.deleteRow(-1);
  }
  updateButtons();
});

// Добавление колонки
appendColBtn.addEventListener('click', () => {
  const rowCount = getRowCount();

  for (let i = 0; i < rowCount; i++) {
    table.rows[i].insertCell();
  }
  updateButtons();
});

// Удаление колонки
removeColBtn.addEventListener('click', () => {
  const colCount = getColCount();

  if (colCount > 2) {
    const rowCount = getRowCount();

    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
  }
  updateButtons();
});

// При загрузке — обновляем кнопки
updateButtons();
