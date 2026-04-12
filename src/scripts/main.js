'use strict';

// let buttContainer = document.querySelector('.container');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const MAX_COUNT_ROWS = 10;
const MIN_COUNT_ROWS = 2;

// If the handler is an arrow function

const handleButtonClick = (e) => {
  // add row

  if (
    e.currentTarget.classList.contains('append-row') &&
    table.rows.length < MAX_COUNT_ROWS
  ) {
    const newRow = table.insertRow();

    for (let c = 0; c < table.rows[0].cells.length; c++) {
      newRow.insertCell();
    }
    buttonStatusChecker();
  }

  // remove row

  if (
    e.currentTarget.classList.contains('remove-row') &&
    table.rows.length > MIN_COUNT_ROWS
  ) {
    table.deleteRow(table.rows.length - 1);
    buttonStatusChecker();
  }

  // add column
  if (
    e.currentTarget.classList.contains('append-column') &&
    table.rows[0].cells.length < MAX_COUNT_ROWS
  ) {
    for (let c = 0; c < table.rows.length; c++) {
      table.rows[c].insertCell();
    }
    buttonStatusChecker();
  }
  // remove column

  if (
    e.currentTarget.classList.contains('remove-column') &&
    table.rows[0].cells.length > MIN_COUNT_ROWS
  ) {
    for (let c = 0; c < table.rows.length; c++) {
      const row = table.rows[c];

      row.deleteCell(row.cells.length - 1);
    }
    buttonStatusChecker();
  }
};

const buttonStatusChecker = function () {
  if (table.rows.length >= MAX_COUNT_ROWS) {
    buttonAppendRow.disabled = true;
  } else {
    buttonAppendRow.disabled = false;
  }

  if (table.rows[0].cells.length >= MAX_COUNT_ROWS) {
    buttonAppendColumn.disabled = true;
  } else {
    buttonAppendColumn.disabled = false;
  }

  if (table.rows.length <= MIN_COUNT_ROWS) {
    buttonRemoveRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
  }

  if (table.rows[0].cells.length === MIN_COUNT_ROWS) {
    buttonRemoveColumn.disabled = true;
  } else {
    buttonRemoveColumn.disabled = false;
  }
};

buttonAppendRow.addEventListener('click', handleButtonClick);
buttonRemoveRow.addEventListener('click', handleButtonClick);
buttonAppendColumn.addEventListener('click', handleButtonClick);
buttonRemoveColumn.addEventListener('click', handleButtonClick);

buttonStatusChecker();
