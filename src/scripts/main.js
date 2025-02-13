'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function isDisabled() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;
  appendColumn.disabled = colCount >= 10;
  removeColumn.disabled = colCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
    isDisabled();
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
    isDisabled();
  }
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    for (const row of table.rows) {
      row.insertCell();
    }
    isDisabled();
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
    isDisabled();
  }
});
