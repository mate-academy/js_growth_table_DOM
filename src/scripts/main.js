'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // максимальна кіслькість рядків і стовців
  const maxRow = 10;
  const maxColumn = 10;
  const minRow = 2;
  const MinColumn = 2;

  const div = document.querySelector('.container');
  const appendRow = div.querySelector('.append-row ');
  const removeRow = div.querySelector('.remove-row');
  const appendColumn = div.querySelector('.append-column');
  const removeColumn = div.querySelector('.remove-column');
  const table = div.querySelector('.field');

  // функція видалення якщо кількість рядків зменшилась
  function updateRowButtons() {
    removeRow.disabled = table.rows.length <= minRow;
    appendRow.disabled = table.rows.length >= maxRow;
  }

  function updateColumnButtons() {
    removeColumn.disabled = table.rows[0].cells.length <= MinColumn;
    appendColumn.disabled = table.rows[0].cells.length >= maxColumn;
  }

  //  кнопка додавання рядка//
  appendRow.addEventListener('click', () => {
    if (table.rows.length < maxRow) {
      // створюю рядок
      const newRow = document.createElement('tr');

      // додаю до рядка декілька клітинок
      for (let i = 0; i < table.rows[0].cells.length; i++) {
        // свторюю нову клітинку
        const newCellRow = document.createElement('td');

        // заповнюю клюітинку вмістом
        newCellRow.textContent = '';

        // доадаю клітинка до рядка
        newRow.appendChild(newCellRow);
      }
      // додаю новий рядрк до таблиці
      table.appendChild(newRow);
    }
    updateRowButtons();
  });

  // кнопка видалення //
  removeRow.addEventListener('click', () => {
    if (table.rows.length > minRow) {
      table.deleteRow(table.rows.length - 1); // Видаляємо останній рядок
      updateRowButtons();
    }
  });

  // кнопка додавання стопця //
  appendColumn.addEventListener('click', () => {
    // отрммую кількість рядків в талиці
    const numberOfRows = table.rows.length;
    // перевіряю кількість стовпців в першому рядку таблиці
    const numberOfColumns = table.rows[0].cells.length;

    if (numberOfColumns < maxColumn) {
      // проходжусь по кожному рядку таблиці
      for (let i = 0; i < numberOfRows; i++) {
        const newCellColumn = document.createElement('td');

        newCellColumn.textContent = '';

        table.rows[i].appendChild(newCellColumn);
      }
    }
    updateColumnButtons();
  });

  // копка видаленння стопця //
  removeColumn.addEventListener('click', () => {
    // отрммую кількість рядків в талиці
    const numberOfRows = table.rows.length;
    // перевіряю кількість стовпців в першому рядку таблиці
    const numberOfColumns = table.rows[0].cells.length;

    //  перевіряю чи рядок
    if (numberOfColumns > MinColumn) {
      //  видаляю останій стовпець в кожному рядку
      for (let i = 0; i < numberOfRows; i++) {
        //  видаляю останю клітинку вкожному рядку
        table.rows[i].deleteCell(-1);
      }
    }
    updateColumnButtons();
  });
});
