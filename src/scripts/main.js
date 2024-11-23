'use strict';

const append = document.querySelector('.append-row');
const appendRemove = document.querySelector('.remove-row');
const column = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

// Додавання стовпця
append.addEventListener('click', () => {
  const rows = table.rows;

  // Перевіряємо, чи не перевищує кількість стовпців 10
  if (rows[0].children.length < 10) {
    Array.from(rows).forEach((element) => {
      const newBlock = document.createElement('td');

      element.appendChild(newBlock);
    });
  }
});

// Видалення стовпця
appendRemove.addEventListener('click', () => {
  const rows = table.rows;

  // Перевіряємо, чи є більше ніж 2 стовпці
  if (rows[0].children.length > 2) {
    Array.from(rows).forEach((element) => {
      const lastElement = element.lastElementChild;

      lastElement.remove();
    });
  }
});

// Додавання нового рядка
column.addEventListener('click', () => {
  const rowCount = tbody.querySelectorAll('tr').length;

  // Перевіряємо, чи не перевищує кількість рядків 10
  if (rowCount < 10) {
    const baseRow = tbody.querySelector('tr');
    const newRow = baseRow.cloneNode(true);

    tbody.appendChild(newRow);
  }
});

// Видалення останнього рядка
columnRemove.addEventListener('click', () => {
  const rowCount = tbody.querySelectorAll('tr').length;

  // Перевіряємо, чи є більше ніж 2 рядки
  if (rowCount > 2) {
    const lastNode = tbody.lastElementChild;

    lastNode.remove();
  }
});
