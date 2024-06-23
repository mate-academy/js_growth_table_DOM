'use strict';

const table = document.querySelector('.field');
const rowButtons = document.querySelectorAll('[class*="row"]');
const columnButtons = document.querySelectorAll('[class*="column"]');
const rows = [...table.querySelectorAll('tr')];
const column = rows[0].cells;
let rowsNumber = rows.length;
let columnNumber = column.length;

document.body.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (button) {
    const buttonFunc = [...button.classList];
    const regex = /column/g;
    const containColumns = buttonFunc.some((cls) => regex.test(cls));

    table.innerHTML = '';

    if (containColumns) {
      const appendRegex = /append/g;
      const isRegexTrue = buttonFunc.some((cls) => appendRegex.test(cls));

      if (isRegexTrue) {
        columnNumber++;

        if (columnNumber >= 10) {
          button.setAttribute('disabled', '');
          columnNumber = 10;
        } else {
          columnButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      } else {
        columnNumber--;

        if (columnNumber <= 2) {
          button.setAttribute('disabled', '');
          columnNumber = 2;
        } else {
          columnButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      }
    } else {
      const appendRegex = /append/g;
      const isRegexTrue = buttonFunc.some((cls) => appendRegex.test(cls));

      if (isRegexTrue) {
        rowsNumber++;

        if (rowsNumber >= 10) {
          button.setAttribute('disabled', '');
          rowsNumber = 10;
        } else {
          rowButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      } else {
        rowsNumber--;

        if (rowsNumber <= 2) {
          button.setAttribute('disabled', '');
          rowsNumber = 2;
        } else {
          rowButtons.forEach((but) => but.removeAttribute('disabled'));
        }
      }
    }

    for (let row = 1; row <= rowsNumber; row++) {
      const newRow = document.createElement('tr');

      for (let col = 1; col <= columnNumber; col++) {
        const newCol = document.createElement('td');

        newRow.appendChild(newCol);
      }

      table.appendChild(newRow);
    }
  }
});
