'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const table = document.querySelector('.field');

// 1. Функція оновлення кнопок рядків
function updateRowButtons() {
  if (table.rows.length === 10) {
    appendRowButton.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }

  if (table.rows.length === 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
}

// 2. Додавання рядка
appendRowButton.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    updateRowButtons();
  }
});

// 3. Видалення рядка
removeRowButton.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.rows[table.rows.length - 1].remove();

    updateRowButtons();
  }
});

// 4. Функція оновлення кнопок стовпців
function updateColumnButtons() {
  if (table.rows[0].cells.length === 10) {
    appendColumnButton.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }

  if (table.rows[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
}

// 5. Додавання стовпця
appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = document.createElement('td');

      table.rows[i].append(newCell);
    }

    updateColumnButtons();
  }
});

// 6. Видалення стовпця
removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      const lastCell = table.rows[i].cells.length - 1;

      table.rows[i].cells[lastCell].remove();
    }

    updateColumnButtons();
  }
});

// 7. Перевірка стану кнопок під час завантаження сторінки
updateRowButtons();
updateColumnButtons();
