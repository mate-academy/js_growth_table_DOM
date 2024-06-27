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
  const rowProveRegex = /row/g;
  const appendRegex = /append/g;
  const buttonFunc = [...button.classList];
  const containRows = buttonFunc.some((cls) => rowProveRegex.test(cls));
  const isRegexTrue = buttonFunc.some((cls) => appendRegex.test(cls));

  if (containRows) {
    switch (isRegexTrue) {
      case true:
        rowsNumber++;

        const newRow = table.insertRow();

        for (let col = 0; col < columnNumber; col++) {
          newRow.insertCell(col);
        }
        break;
      default:
        rowsNumber--;
        rows[0].remove();
        break;
    }

    tablePartHandle(rowsNumber, button, rowButtons);

    return;
  }

  switch (isRegexTrue) {
    case true:
      columnNumber++;

      rows.forEach((row) => {
        row.insertCell();
      });
      break;
    default:
      columnNumber--;

      rows.forEach((row) => {
        row.children[0].remove();
      });
      break;
  }

  tablePartHandle(columnNumber, button, columnButtons);
});

function tablePartHandle(tablePart, button, tableButtons) {
  if (tablePart <= MIN_PARTS || tablePart >= MAX_PARTS) {
    button.setAttribute('disabled', '');
  } else {
    tableButtons.forEach((but) => but.removeAttribute('disabled'));
  }
}
