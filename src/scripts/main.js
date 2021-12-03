'use strict';

// write code here
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const buttonAR = document.querySelector('.append-row');
const buttonRR = document.querySelector('.remove-row');
const buttonAC = document.querySelector('.append-column');
const buttonRC = document.querySelector('.remove-column');

const column = (events) => {
  const newColumn = table.rows;
  const limitColumn = table.rows[0].cells.length + 1;

  if (limitColumn <= 10) {
    for (let i = 0, l = newColumn.length; i < l; i++) {
      newColumn[i].insertCell(-1);
    }

    if (limitColumn === 10) {
      events.target.style.background = 'grey';
    }

    if (limitColumn > 2 && limitColumn !== 10) {
      buttonRC.style.background = '#ffac00';
    }
  }
};

const delColumn = (events) => {
  const oldColumn = table.rows;
  const limitColumn = table.rows[0].cells.length - 1;

  if (limitColumn >= 2) {
    for (let i = 0; i < oldColumn.length; i++) {
      oldColumn[i].deleteCell(-1);
    }

    if (limitColumn === 2) {
      events.target.style.background = 'grey';
    }

    if (limitColumn < 10) {
      buttonAC.style.background = '#ffac00';
    }
  }
};

const row = (events) => {
  const colsLength = table.rows[0].cells.length;
  const limitRow = table.rows.length;

  if (limitRow <= 10) {
    const newRow = table.insertRow(-1);

    for (let i = 0; i < colsLength; i++) {
      newRow.insertCell(-1);
    }

    if (limitRow === 10) {
      events.target.style.background = 'grey';
    }

    if (limitRow > 0 && limitRow !== 10) {
      buttonRR.style.background = '#ffac00';
    }
  }
};

const delRow = (events) => {
  const oldRow = table.rows.length;
  const limitRow = table.rows.length - 1;

  if (limitRow >= 2) {
    table.deleteRow(oldRow - 1);

    if (limitRow === 2) {
      events.target.style.background = 'grey';
    }

    if (limitRow < 12) {
      buttonAR.style.background = '#ffac00';
    }
  }
};

appendColumn.addEventListener('click', column);
removeColumn.addEventListener('click', delColumn);
appendRow.addEventListener('click', row);
removeRow.addEventListener('click', delRow);
