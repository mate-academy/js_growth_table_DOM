'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

// Оновлюємо стан кнопок
function updateButtons() {
  const rowCount = tbody.rows.length;
  const columnCount = tbody.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;

  appendColumnButton.disabled = columnCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
}

// Додаємо новий рядок
appendRowButton.addEventListener('click', () => {
  if (tbody.rows.length >= 10) {
    return;
  }

  const row = document.createElement('tr');
  const columnCount = tbody.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const cell = document.createElement('td');

    row.append(cell);
  }

  tbody.append(row);

  updateButtons();
});

// Видаляємо останній рядок
removeRowButton.addEventListener('click', () => {
  if (tbody.rows.length <= 2) {
    return;
  }

  tbody.lastElementChild.remove();

  updateButtons();
});

// Додаємо новий стовпець
appendColumnButton.addEventListener('click', () => {
  const rows = tbody.rows;

  if (rows[0].cells.length >= 10) {
    return;
  }

  for (let i = 0; i < rows.length; i++) {
    const cell = document.createElement('td');

    rows[i].append(cell);
  }

  updateButtons();
});

// Видаляємо останній стовпець
removeColumnButton.addEventListener('click', () => {
  const rows = tbody.rows;

  if (rows[0].cells.length <= 2) {
    return;
  }

  for (let i = 0; i < rows.length; i++) {
    rows[i].lastElementChild.remove();
  }

  updateButtons();
});

// Встановлюємо початковий стан кнопок
updateButtons();
