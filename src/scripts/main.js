'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');
const rowsDefault = tableBody.rows;

const max = 10;
const min = 2;
let rowsCount = rowsDefault.length;
let columnsCount = rowsDefault[0].querySelectorAll('td').length;

const minMaxCheck = (currentCount, btnAppend, btnRemove) => {
  currentCount === max ? btnAppend.disabled = true : btnAppend.disabled = false;
  currentCount === min ? btnRemove.disabled = true : btnRemove.disabled = false;
};

appendRow.addEventListener('click', () => {
  tableBody.append(tableBody.rows[rowsCount - 1].cloneNode(true));
  rowsCount++;

  minMaxCheck(rowsCount, appendRow, removeRow);
});

removeRow.addEventListener('click', () => {
  tableBody.deleteRow(-1);
  rowsCount--;

  minMaxCheck(rowsCount, appendRow, removeRow);
});

appendColumn.addEventListener('click', () => {
  [...tableBody.rows].forEach(row => row.insertCell(-1));
  columnsCount++;

  minMaxCheck(columnsCount, appendColumn, removeColumn);
});

removeColumn.addEventListener('click', () => {
  [...tableBody.rows].forEach(row => row.deleteCell(-1));
  columnsCount--;

  minMaxCheck(columnsCount, appendColumn, removeColumn);
});
