'use strict';

const container = document.querySelector('.container');
const field = container.querySelector('.field');
const tBody = field.querySelector('tbody');
const appendRow = container.querySelector('.append-row');
const appendColumn = container.querySelector('.append-column');
const removeRow = container.querySelector('.remove-row');
const removeColumn = container.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  const allRows = field.querySelectorAll('tr'); // Отримує колекцію всіх рядків
  const maxCount = 10;
  const minCount = 2;

  const updateRows = field.querySelectorAll('tr').length;
  const updateColumns = field.querySelectorAll('tr')
    ? field.querySelectorAll('tr').cells.length
    : 0;

  appendRow.disabled = updateRows >= maxCount;
  removeRow.disabled = updateRows <= minCount;
  appendColumn.disabled = updateColumns >= maxCount;
  removeColumn.disabled = updateColumns <= minCount;

  if (e.target === appendColumn) {
    if (updateColumns < maxCount) {
      allRows.forEach((row) => {
        row.insertCell();
      });
    }
  }

  if (e.target === removeColumn) {
    if (updateColumns > minCount) {
      allRows.forEach((row) => {
        row.deleteCell(updateColumns - 1);
      });
    }
  }

  if (e.target === removeRow) {
    if (updateRows > minCount) {
      tBody.deleteRow(updateRows - 1); // видалення останього рядку
    }
  }

  if (e.target === appendRow) {
    if (updateRows < maxCount) {
      const newR = tBody.insertRow();

      for (let i = 0; i < updateColumns; i++) {
        // Додаємо нову комірку в кінець (індекс не потрібен)
        newR.insertCell(i);
      }
    }
  }
});
