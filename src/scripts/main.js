'use strict';

const table = document.querySelector('.field');
const rowButtons = document.querySelectorAll('[class*="row"]');
const columnButtons = document.querySelectorAll('[class*="column"]');
const MIN_PARTS = 2;
const MAX_PARTS = 10;

document.body.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button) {
    return null;
  }

  const rows = [...table.querySelectorAll('tr')];
  const column = rows[0].cells;
  let rowsNumber = rows.length;
  let columnNumber = column.length;
  const appendRegex = /append/g;
  const buttonFunc = [...button.classList];
  const containRows = [...rowButtons].includes(button);
  const isAppendOperation = buttonFunc.some((cls) => appendRegex.test(cls));

  if (containRows) {
    if (isAppendOperation) {
      rowsNumber++;

      const newRow = table.insertRow();

      for (let col = 0; col < columnNumber; col++) {
        newRow.insertCell(col);
      }
    } else {
      rowsNumber--;
      rows[0].remove();
    }

    updateButtonStates(rowsNumber, button, rowButtons);

    return;
  }

  if (isAppendOperation) {
    columnNumber++;

    rows.forEach((row) => {
      row.insertCell();
    });
  } else {
    columnNumber--;

    rows.forEach((row) => {
      row.children[0].remove();
    });
  }

  updateButtonStates(columnNumber, button, columnButtons);
});

function updateButtonStates(tablePart, button, tableButtons) {
  if (tablePart <= MIN_PARTS || tablePart >= MAX_PARTS) {
    button.setAttribute('disabled', '');
  } else {
    tableButtons.forEach((but) => but.removeAttribute('disabled'));
  }
}
