'use strict';

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

const updateButtonStates = () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  btnAppendRow.disabled = rowCount >= MAX_ROWS;
  btnRemoveRow.disabled = rowCount <= MIN_ROWS;
  btnAppendColumn.disabled = colCount >= MAX_COLUMNS;
  btnRemoveColumn.disabled = colCount <= MIN_COLUMNS;
};

const appendRow = () => {
  if (table.rows.length < MAX_ROWS) {
    const newRow = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }

    updateButtonStates();
  }
};

const removeRow = () => {
  if (table.rows.length > MIN_ROWS) {
    table.deleteRow(-1);

    updateButtonStates();
  }
};

const appendColumn = () => {
  if (table.rows[0].cells.length < MAX_COLUMNS) {
    for (let row of table.rows) {
      row.insertCell();
    }

    updateButtonStates();
  }
};

const removeColumn = () => {
  if (table.rows[0].cells.length > MIN_COLUMNS) {
    for (let row of table.rows) {
      row.deleteCell(-1);
    }

    updateButtonStates();
  }
};

btnAppendRow.addEventListener('click', appendRow);
btnRemoveRow.addEventListener('click', removeRow);
btnAppendColumn.addEventListener('click', appendColumn);
btnRemoveColumn.addEventListener('click', removeColumn);

updateButtonStates();
