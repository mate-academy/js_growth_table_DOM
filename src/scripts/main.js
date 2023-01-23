'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const container = document.querySelector('.container');
let rowsCount = table.rows.length;
let colsCount = table.rows[0].cells.length;

const disableRowsBtn = (value) => {
  switch (value) {
    case 2:
      removeRowBtn.setAttribute('disabled', true);

      break;
    case 10:
      appendRowBtn.setAttribute('disabled', true);

      break;
    default:
      removeRowBtn.removeAttribute('disabled');
      appendRowBtn.removeAttribute('disabled');
  }
};

const disableColsBtn = (value) => {
  switch (value) {
    case 2:
      removeColBtn.setAttribute('disabled', true);

      break;

    case 10:
      appendColBtn.setAttribute('disabled', true);

      break;

    default:
      removeColBtn.removeAttribute('disabled');
      appendColBtn.removeAttribute('disabled');
  }
};

const appendRow = () => {
  const newRow = table.insertRow();

  for (let i = 0; i < colsCount; i++) {
    newRow.appendChild(document.createElement('td'));
  }
  rowsCount++;

  return rowsCount;
};

const removeRow = () => {
  table.deleteRow(--rowsCount);

  return rowsCount;
};

const appendColumn = () => {
  for (const row of table.rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }

  colsCount++;

  return colsCount;
};

const removeColumn = () => {
  for (const row of table.rows) {
    row.removeChild(row.cells[row.cells.length - 1]);
  }
  colsCount--;

  return colsCount;
};

container.addEventListener('click', e => {
  switch (e.target.classList[0]) {
    case 'append-row':
      disableRowsBtn(appendRow());
      break;
    case 'remove-row':
      disableRowsBtn(removeRow());
      break;
    case 'append-column':
      disableColsBtn(appendColumn());
      break;
    case 'remove-column':
      disableColsBtn(removeColumn());
  }
});
