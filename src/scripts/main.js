'use strict';

// let buttContainer = document.querySelector('.container');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const maxCountRows = 10;
const minCountRows = 2;

// If the handler is an arrow function

const handleButtonClick = (e) => {
  // add row

  if (
    e.currentTarget.classList.contains('append-row') &&
    table.rows.length < maxCountRows
  ) {
    const newRow = table.insertRow();

    for (let c = 0; c < table.rows[0].cells.length; c++) {
      newRow.insertCell();
    }
  }

  // remove row

  if (
    e.currentTarget.classList.contains('remove-row') &&
    table.rows.length > minCountRows
  ) {
    table.deleteRow(table.rows.length - 1);
  }

  // add column
  if (
    e.currentTarget.classList.contains('append-column') &&
    table.rows[0].cells.length < maxCountRows
  ) {
    const table1 = document.querySelector('table');

    for (let c = 0; c < table1.rows.length; c++) {
      table.rows[c].insertCell();
    }
  }
  // remove column

  if (
    e.currentTarget.classList.contains('remove-column') &&
    table.rows[0].cells.length > minCountRows
  ) {
    for (let c = 0; c < table.rows.length; c++) {
      table.rows[c].deleteCell(0);
    }
  }

  // button status checker

  if (table.rows.length >= maxCountRows) {
    buttonAppendRow.disabled = true;
  } else {
    buttonAppendRow.disabled = false;
  }

  if (table.rows[0].cells.length >= maxCountRows) {
    buttonAppendColumn.disabled = true;
  } else {
    buttonAppendColumn.disabled = false;
  }

  if (table.rows.length <= minCountRows) {
    buttonRemoveRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
  }

  if (table.rows[0].cells.length === minCountRows) {
    buttonRemoveColumn.disabled = true;
  } else {
    buttonRemoveColumn.disabled = false;
  }
};

buttonAppendRow.addEventListener('click', handleButtonClick);
buttonRemoveRow.addEventListener('click', handleButtonClick);
buttonAppendColumn.addEventListener('click', handleButtonClick);
buttonRemoveColumn.addEventListener('click', handleButtonClick);
