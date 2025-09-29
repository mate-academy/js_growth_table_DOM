/* eslint-disable max-len */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const appendRowBtn = document.querySelector('.append-row');
  const removeRowBtn = document.querySelector('.remove-row');
  const appendColBtn = document.querySelector('.append-column');
  const removeColBtn = document.querySelector('.remove-column');

  // Перевірка, чи таблиця та tbody існують
  const tbody = table ? table.tBodies[0] || table.querySelector('tbody') : null;

  if (!tbody || tbody.rows.length === 0) {
    return;
  }

  // кількість рядків (колекція всіх <tr> у tbody)
  let rows = tbody.rows.length;
  // кількість колонок (колекція всіх клітинок (<td>) лише з першого рядка tbody)
  let cols = tbody.rows[0].cells.length;

  function updateButtons() {
    appendRowBtn.disabled = rows >= 10;
    removeRowBtn.disabled = rows <= 2;
    appendColBtn.disabled = cols >= 10;
    removeColBtn.disabled = cols <= 2;
  }

  // Додати рядок
  appendRowBtn.addEventListener('click', () => {
    if (rows < 10) {
      // створює новий рядок <tr> в кінці tbody.
      const newRow = tbody.insertRow();

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
      // видаляє останній рядок у tbody (явний індекс)
      tbody.deleteRow(rows - 1);
      rows--;
      updateButtons();
    }
  });

  // Додати колонку
  appendColBtn.addEventListener('click', () => {
    if (cols < 10) {
      for (let i = 0; i < rows; i++) {
        // У кожному рядку tbody викликаємо insertCell(), щоб додати нову клітинку <td> у кінець цього рядка.
        tbody.rows[i].insertCell();
      }

      cols++;
      updateButtons();
    }
  });

  // Видалити колонку
  removeColBtn.addEventListener('click', () => {
    if (cols > 2) {
      for (let i = 0; i < rows; i++) {
        // видаляє останню клітинку (явний індекс)
        tbody.rows[i].deleteCell(cols - 1);
      }

      cols--;
      updateButtons();
    }
  });

  // ініціалізація
  updateButtons();
});

// -----------------------------------------------------------------------------

// Чистий код без всяких перевірок на безпечність і тд + пояснення коду
// І працюємо напряму, а не через tbody (як у першому варіанті)

// const table = document.querySelector('.field');
// const appendRowBtn = document.querySelector('.append-row');
// const removeRowBtn = document.querySelector('.remove-row');
// const appendColBtn = document.querySelector('.append-column');
// const removeColBtn = document.querySelector('.remove-column');

// // кількість рядків (колекція всіх <tr>)
// let rows = table.rows.length;
// // кількість колонок (колекція всіх клітинки (<td>) лише з першого рядка.)
// let cols = table.rows[0].cells.length;

// function updateButtons() {
//   appendRowBtn.disabled = rows >= 10;
//   removeRowBtn.disabled = rows <= 2;
//   appendColBtn.disabled = cols >= 10;
//   removeColBtn.disabled = cols <= 2;
// }

// // Додати рядок
// appendRowBtn.addEventListener('click', () => {
//   if (rows < 10) {
//     // створює новий рядок <tr> в кінці таблиці.
//     const newRow = table.insertRow();

//     for (let i = 0; i < cols; i++) {
//       newRow.insertCell();
//     }

//     rows++;
//     updateButtons();
//   }
// });

// // Видалити рядок
// removeRowBtn.addEventListener('click', () => {
//   if (rows > 2) {
//     // видаляє останній рядок
//     table.deleteRow(-1);
//     rows--;
//     updateButtons();
//   }
// });

// // Додати колонку
// appendColBtn.addEventListener('click', () => {
//   if (cols < 10) {
//     for (let i = 0; i < rows; i++) {
//       // У кожному рядку викликаємо insertCell(), щоб додати нову клітинку <td> у кінець цього рядка.
//       table.rows[i].insertCell();
//     }

//     cols++;
//     updateButtons();
//   }
// });

// // Видалити колонку
// removeColBtn.addEventListener('click', () => {
//   if (cols > 2) {
//     for (let i = 0; i < rows; i++) {
//       // видаляє останню клітинку
//       table.rows[i].deleteCell(-1);
//     }

//     cols--;
//     updateButtons();
//   }
// });

// // ініціалізація
// updateButtons();

// Логіка
// В ряд видаляємо один 'tr' у tbody
// В колонку видаляємо в кожному 'tr' останній 'td'
// <tr1> <td>1</td> <td>2</td> <td>3</td> <td>4</td> </tr1>
// <tr2> <td>1</td> <td>2</td> <td>3</td> <td>4</td> </tr2>
