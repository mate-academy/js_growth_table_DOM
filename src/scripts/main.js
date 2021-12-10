'use strict';

// write code here
const div = document.querySelector('.container');
const table = document.querySelector('.field');
const buttonAR = document.querySelector('.append-row');
const buttonRR = document.querySelector('.remove-row');
const buttonAC = document.querySelector('.append-column');
const buttonRC = document.querySelector('.remove-column');

div.addEventListener('click', (events) => {
  const buttonClick = events.target;

  if (buttonClick.className === 'append-row button') {
    const colsLength = table.rows[0].cells.length;
    const limitRow = table.rows.length;

    if (limitRow <= 10) {
      const newRow = table.insertRow(-1);

      for (let i = 0; i < colsLength; i++) {
        newRow.insertCell(-1);
      }

      if (limitRow === 10) {
        buttonClick.classList.add('disabled');
        buttonClick.style.background = 'grey';
      }

      if (limitRow > 0 && limitRow !== 10) {
        buttonRR.style.background = '#ffac00';
        buttonRR.classList.remove('disabled');
      }
    }
  };

  if (buttonClick.className === 'remove-row button') {
    const oldRow = table.rows.length;
    const limitRow = table.rows.length - 1;

    if (limitRow >= 2) {
      table.deleteRow(oldRow - 1);

      if (limitRow === 2) {
        buttonClick.classList.add('disabled');
        buttonClick.style.background = 'grey';
      }

      if (limitRow < 12) {
        buttonAR.style.background = '#ffac00';
        buttonAR.classList.remove('disabled');
      }
    }
  };

  if (buttonClick.className === 'append-column button') {
    const newColumn = table.rows;
    const limitColumn = table.rows[0].cells.length + 1;

    if (limitColumn <= 10) {
      for (let i = 0, l = newColumn.length; i < l; i++) {
        newColumn[i].insertCell(-1);
      }

      if (limitColumn === 10) {
        buttonClick.classList.add('disabled');
        buttonClick.style.background = 'grey';
      }

      if (limitColumn > 2 && limitColumn !== 10) {
        buttonRC.style.background = '#ffac00';
        buttonRC.classList.remove('disabled');
      }
    }
  }

  if (buttonClick.className === 'remove-column button') {
    const oldColumn = table.rows;
    const limitColumn = table.rows[0].cells.length - 1;

    if (limitColumn >= 2) {
      for (let i = 0; i < oldColumn.length; i++) {
        oldColumn[i].deleteCell(-1);
      }

      if (limitColumn === 2) {
        buttonClick.classList.add('disabled');
        buttonClick.style.background = 'grey';
      }

      if (limitColumn < 10) {
        buttonAC.style.background = '#ffac00';
        buttonAC.classList.remove('disabled');
      }
    }
  }
});
