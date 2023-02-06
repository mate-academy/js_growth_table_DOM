'use strict';

const table = document.querySelector('.field');
const buttonPlusRow = document.querySelector('.append-row');
const buttonMinusRow = document.querySelector('.remove-row');
const buttonPlusCol = document.querySelector('.append-column');
const buttonMinusCol = document.querySelector('.remove-column');
const maxLimit = 10;
const minLimit = 2;

function growthTable() {
  buttonPlusRow.addEventListener('click', (e) => {
    if (e.target === buttonPlusRow) {
      table.append(table.rows[0].cloneNode(true));
    }

    buttonPlusRow.disabled = (table.rows.length === maxLimit);
    buttonMinusRow.disabled = (table.rows.length === minLimit);
  });

  buttonMinusRow.addEventListener('click', (e) => {
    if (e.target === buttonMinusRow) {
      table.rows[0].remove();
    }

    buttonPlusRow.disabled = (table.rows.length === maxLimit);
    buttonMinusRow.disabled = (table.rows.length === minLimit);
  });

  buttonPlusCol.addEventListener('click', (e) => {
    if (e.target === buttonPlusCol) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].append(document.createElement('td'));
      }
    }

    buttonPlusCol.disabled = (table.rows[0].cells.length === maxLimit);
    buttonMinusCol.disabled = (table.rows[0].cells.length === minLimit);
  });

  buttonMinusCol.addEventListener('click', (e) => {
    if (e.target === buttonMinusCol) {
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].lastElementChild.remove();
      }
    }

    buttonPlusCol.disabled = (table.rows[0].cells.length === maxLimit);
    buttonMinusCol.disabled = (table.rows[0].cells.length === minLimit);
  });
}

growthTable();
