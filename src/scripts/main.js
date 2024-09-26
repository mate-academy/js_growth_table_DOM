/* eslint-disable max-len */
'use strict';

const table = document.querySelector('.field');
const maxRows = 10;
const minRows = 2;
const maxCols = 10;
const minCols = 2;
let colCount;
let rowCount;

function buttonBoundaries() {
  rowCount = table.rows.length;

  colCount = table.rows[0].cells.length;

  document.querySelector('.append-row').disabled = rowCount >= maxRows;
  document.querySelector('.remove-row').disabled = rowCount <= minRows;
  document.querySelector('.append-column').disabled = colCount >= maxCols;
  document.querySelector('.remove-column').disabled = colCount <= minCols;
}

function appendRow() {
  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }
  buttonBoundaries();
}

document.querySelector('.append-row').addEventListener('click', appendRow);

function deleteRow() {
  table.deleteRow(-1);

  buttonBoundaries();
}

document.querySelector('.remove-row').addEventListener('click', deleteRow);

function appendCol() {
  for (let i = 0; i < rowCount; i++) {
    table.rows[i].insertCell();
  }
  buttonBoundaries();
}

document.querySelector('.append-column').addEventListener('click', appendCol);

function deleteCol() {
  for (let i = 0; i < rowCount; i++) {
    table.rows[i].deleteCell(-1);
  }
  buttonBoundaries();
}

buttonBoundaries();

document.querySelector('.remove-column').addEventListener('click', deleteCol);
