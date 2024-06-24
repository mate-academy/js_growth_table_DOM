'use strict';

const table = document.querySelector('.field');
const rowButtons = document.querySelectorAll('[class*="row"]');
const columnButtons = document.querySelectorAll('[class*="column"]');

document.body.addEventListener('click', (e) => {
  const button = e.target.closest('.button');
  const rows = [...table.querySelectorAll('tr')];
  const column = rows[0].cells;
  const rowsNumber = rows.length;
  const columnNumber = column.length;

  if (button) {
    const buttonFunc = [...button.classList];
    const rowProveRegex = /row/g;
    const appendRegex = /append/g;
    const containRows = buttonFunc.some((cls) => rowProveRegex.test(cls));
    const isRegexTrue = buttonFunc.some((cls) => appendRegex.test(cls));

    if (containRows) {
      if (isRegexTrue) {
        const newRow = table.insertRow();

        for (let col = 0; col < columnNumber; col++) {
          newRow.insertCell(col);
        }

        if (rowsNumber + 1 >= 10) {
          button.setAttribute('disabled', '');
        } else {
          rowButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      } else {
        rows[0].remove();

        if (rowsNumber - 1 <= 2) {
          button.setAttribute('disabled', '');
        } else {
          rowButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      }
    } else {
      if (isRegexTrue) {
        rows.forEach((row) => {
          row.insertCell();
        });

        if (columnNumber + 1 >= 10) {
          button.setAttribute('disabled', '');
        } else {
          columnButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      } else {
        rows.forEach((row) => {
          row.children[0].remove();
        });

        if (columnNumber - 1 <= 2) {
          button.setAttribute('disabled', '');
        } else {
          columnButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      }
    }
  }
});
