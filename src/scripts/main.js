'use strict';

// write code here
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const column = () => {
  const newColumn = table.rows;
  const limitColumn = table.rows[0].cells.length + 1;

  if (limitColumn <= 10) {
    for (let i = 0, l = newColumn.length; i < l; i++) {
      newColumn[i].insertCell(-1);
    }
  }
};

const delColumn = () => {
  const oldColumn = table.rows;
  const limitColumn = table.rows[0].cells.length - 1;

  if (limitColumn >= 2) {
    for (let i = 0; i < oldColumn.length; i++) {
      oldColumn[i].deleteCell(-1);
    }
  }
};

const row = () => {
  const colsLength = table.rows[0].cells.length;
  const limitRow = table.rows.length;

  if (limitRow <= 10) {
    const newRow = table.insertRow(-1);

    for (let i = 0; i < colsLength; i++) {
      newRow.insertCell(-1);
    }
  }
};

const delRow = () => {
  const oldRow = table.rows.length;
  const limitRow = table.rows.length - 1;

  if (limitRow >= 2) {
    table.deleteRow(oldRow - 1);
  }
};

appendColumn.addEventListener('click', column);
removeColumn.addEventListener('click', delColumn);
appendRow.addEventListener('click', row);
removeRow.addEventListener('click', delRow);
