'use strict';

const buttonAddRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAddColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const tableData = {
  maxRows: 10,
  minRows: 2,
  maxColumns: 10,
  minColumns: 2,
};

buttonAddRow.addEventListener('click', () => {
  const newRow = table.insertRow(-1);

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }

  if (table.rows.length >= tableData.maxRows) {
    buttonAddRow.disabled = true;
  }
  buttonRemoveRow.disabled = false;
});

buttonRemoveRow.addEventListener('click', () => {
  table.deleteRow(-1);

  if (table.rows.length <= tableData.minRows) {
    buttonRemoveRow.disabled = true;
  }
  buttonAddRow.disabled = false;
});

buttonAddColumn.addEventListener('click', () => {
  [...table.rows].forEach(row => row.insertCell(-1));

  if (table.rows[0].cells.length >= tableData.maxColumns) {
    buttonAddColumn.disabled = true;
  }
  buttonRemoveColumn.disabled = false;
});

buttonRemoveColumn.addEventListener('click', () => {
  [...table.rows].forEach(row => row.deleteCell(-1));

  if (table.rows[0].cells.length <= tableData.minColumns) {
    buttonRemoveColumn.disabled = true;
  }
  buttonAddColumn.disabled = false;
});
