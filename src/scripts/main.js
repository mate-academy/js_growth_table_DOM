'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const maxCount = 10;
const minCount = 2;

function updateButton() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (rowCount >= maxCount) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (rowCount <= minCount) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (columnCount >= maxCount) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (columnCount <= minCount) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
}

appendRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount < maxCount) {
    const newRow = table.insertRow();

    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }
  }

  updateButton();

  // console.log('Додаємо рядок');
});

removeRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount > minCount) {
    table.deleteRow(rowCount - 1);
  }

  updateButton();

  // console.log('Delete рядок');
});

appendColumn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (columnCount < maxCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }
  }

  updateButton();

  // console.log('Додаємо column');
});

removeColumn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (columnCount > minCount) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(columnCount - 1);
    }
  }

  updateButton();

  // console.log('Delete column');
});
