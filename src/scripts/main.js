'use strict';

/** елементи */
const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

/** отримання к-ті рядків та колонок */
function updateButtonsState() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  removeRowButton.disabled = rowCount <= 2;
  appendRowButton.disabled = rowCount >= 10;

  removeColumnButton.disabled = colCount <= 2;
  appendColumnButton.disabled = colCount >= 10;
}

/** додаю рядок */
appendRowButton.onclick = () => {
  if (table.rows.length >= 10) {
    return;
  }

  const columnCount = table.rows[0].cells.length;

  const newRow = table.insertRow();

  for (let i = 0; i < columnCount; i++) {
    newRow.insertCell();
  }

  updateButtonsState();
};

/** видалення рядка(row) */
removeRowButton.onclick = () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);

  updateButtonsState();
};

/** додаю колонки(column) */
appendColumnButton.onclick = () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonsState();
};

/** видаляю column */
removeColumnButton.onclick = () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonsState();
};

updateButtonsState();
