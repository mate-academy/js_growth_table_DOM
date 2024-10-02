'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');

  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  const maxRows = 10;
  const minRows = 2;
  const maxColumns = 10;
  const minColumns = 2;

  // Налаштовуємо умови видимості кнопки
  function updateButtons() {
    const currentRows = table.rows.length;
    const currentColumns = table.rows[0].cells.length;

    appendRowButton.disabled = currentRows >= maxRows;
    removeRowButton.disabled = currentRows <= minRows;
    appendColumnButton.disabled = currentColumns >= maxColumns;
    removeColumnButton.disabled = currentColumns <= minColumns;
  }

  // Додаємо рядок
  appendRowButton.addEventListener('click', () => {
    if (table.rows.length < maxRows) {
      const newRow = table.insertRow();
      const cellsCount = table.rows[0].cells.length;

      for (let i = 0; i < cellsCount; i++) {
        newRow.insertCell();
      }

      updateButtons();
    }
  });

  // Видаляємо рядок
  removeRowButton.addEventListener('click', () => {
    if (table.rows.length > minRows) {
      table.deleteRow(-1);
    }

    updateButtons();
  });

  // Додаємо стовпець
  appendColumnButton.addEventListener('click', () => {
    if (table.rows[0].cells.length < maxColumns) {
      Array.from(table.rows).forEach((row) => {
        row.insertCell();
      });
    }

    updateButtons();
  });

  // Видаляємо стовпець
  removeColumnButton.addEventListener('click', () => {
    if (table.rows[0].cells.length > minColumns) {
      Array.from(table.rows).forEach((row) => {
        row.deleteCell(-1);
      });
    }

    updateButtons();
  });

  updateButtons();
});
