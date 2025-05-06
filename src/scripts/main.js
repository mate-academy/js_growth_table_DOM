'use strict';

const table = document.querySelector('table.field');
const appendRowBtn = document.querySelector('button.append-row');
const removeRowBtn = document.querySelector('button.remove-row');
const appendColumnBtn = document.querySelector('button.append-column');
const removeColumnBtn = document.querySelector('button.remove-column');

let tbody = table.querySelector('tbody');

if (!tbody) {
  tbody = document.createElement('tbody');

  const directRows = Array.from(table.children).filter(
    (child) => child.tagName === 'TR',
  );

  directRows.forEach((row) => tbody.appendChild(row));
  table.appendChild(tbody);
}

function updateButtonStates() {
  const rowCount = tbody.rows.length;
  const colCount = rowCount > 0 ? tbody.rows[0].cells.length : 0;

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;

  appendColumnBtn.disabled = colCount >= 10;
  removeColumnBtn.disabled = colCount <= 2;
}

function appendRow() {
  const currentRowsInTbody = tbody.rows.length;

  if (currentRowsInTbody < 10) {
    const newRow = document.createElement('tr');
    let columnsToCreate;

    if (currentRowsInTbody === 0) {
      columnsToCreate = 2; // Створюємо з мінімальною к-тю стовпчиків
    } else {
      columnsToCreate = tbody.rows[0].cells.length;
    }

    for (let i = 0; i < columnsToCreate; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }
    tbody.appendChild(newRow);
    updateButtonStates();
  }
}

function removeRow() {
  const rowCount = tbody.rows.length;

  if (rowCount > 2) {
    if (tbody.lastElementChild) {
      tbody.lastElementChild.remove();
    }
    updateButtonStates();
  }
}

function appendColumn() {
  const currentRowsInTbody = tbody.rows.length;
  // Додавати стовпчики можна лише якщо є хоча б один рядок,
  // до якого можна додати комірки. Інакше colCount буде 0,
  // але кнопка додавання стовпчика має бути заблокована,
  // якщо немає рядків (або якщо досягнуто ліміту стовпчиків).
  // Логіка updateButtonStates має це врах
  const colCount = currentRowsInTbody > 0 ? tbody.rows[0].cells.length : 0;

  if (colCount < 10) {
    // Якщо рядків немає, то додавати стовпчик нікуди.
    // Кнопка appendColumnBtn має бутиrrentRowsInTbody === 0.
    // Це має оброблятися в updateButtonStates тут можлива проблема)
    // Давайте змінимо updateButtonStates для colCount
    if (currentRowsInTbody === 0 && colCount === 0) {
      // Немає сенсу додавати стовпці, якщо немає рядків.
      // Але якщо завданяви рядків), то код нижче спрацює.
      // Краще, щоб правильно обробляє colCount=0 коли немає рядків.
    }

    for (const row of tbody.rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }
    updateButtonStates();
  }
}

function removeColumn() {
  const currentRowsInTbody = tbody.rows.length;
  const colCount = currentRowsInTbody > 0 ? tbody.rows[0].cells.length : 0;

  if (colCount > 2) {
    for (const row of tbody.rows) {
      if (row.cells.length > 0) {
        if (row.lastElementChild && row.lastElementChild.tagName === 'TD') {
          row.lastElementChild.remove();
        }
      }
    }
    updateButtonStates();
  }
}

// Removed duplicate declaration of updateButtonStates

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtonStates();
