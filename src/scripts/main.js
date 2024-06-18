'use strict';

// Кнопки
const rowAdd = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const columnAdd = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');

const table = document.querySelector('.field');

rowAdd.addEventListener('click', () => {
  rowRemove.disabled = false;

  if (table.rows.length < 10) {
    const cellCount = table.querySelector('tr').children.length;
    const row = table.insertRow(-1);

    for (let i = 0; i < cellCount; i++) {
      row.insertCell();
    }
    rowAdd.disabled = table.rows.length >= 10;
  }
});

rowRemove.addEventListener('click', () => {
  rowAdd.disabled = false;

  if (table.rows.length > 2) {
    table.deleteRow(table.rows.length - 1);

    rowRemove.disabled = table.rows.length <= 2;
  }
});

columnAdd.addEventListener('click', () => {
  columnRemove.disabled = false;

  const rowCount = table.rows.length;
  const cellCount = table.rows[0].cells.length;

  if (cellCount < 10) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell(-1);
    }
    columnAdd.disabled = cellCount >= 9;
  }
});

columnRemove.addEventListener('click', () => {
  columnAdd.disabled = false;

  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length > 2) {
      row.deleteCell(-1);

      columnRemove.disabled = row.children.length <= 2;
    }
  });
});
