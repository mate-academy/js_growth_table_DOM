'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount === 9) {
    appendRowBtn.disabled = true;
  }

  if (rowCount < 10) {
    const newRow = table.insertRow(-1);
    const columnCount = table.rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell(i);
    }
  }
});

removeRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount === 3) {
    removeRowBtn.disabled = true;
  }

  if (rowCount > 2) {
    table.deleteRow(rowCount - 1);
  }
});

appendColumnBtn.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount === 9) {
    appendColumnBtn.disabled = true;
  }

  if (columnCount < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell(-1);
    }
  }
});

removeColumnBtn.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  if (columnCount === 3) {
    removeColumnBtn.disabled = true;
  }

  if (columnCount > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(columnCount - 1);
    }
  }
});
