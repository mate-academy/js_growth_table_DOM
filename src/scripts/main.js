'use strict';

const MIN_ROWS = 2;
const MAX_ROWS = 10;
const MIN_COLUMNS = 2;
const MAX_COLUMNS = 10;

const buttons = document.querySelectorAll('button');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

const tableEl = document.querySelector('table');
const bodyEl = tableEl.tBodies[0];

function getColumnsCount() {
  return bodyEl.rows[0].cells.length;
}

function isMaxRows() {
  return bodyEl.rows.length >= MAX_ROWS;
}

function isMinRows() {
  return bodyEl.rows.length <= MIN_ROWS;
}

function isMaxColumns() {
  return getColumnsCount() >= MAX_COLUMNS;
}

function isMinColumns() {
  return getColumnsCount() <= MIN_COLUMNS;
}

function updateButtonsState() {
  buttonAppendRow.disabled = isMaxRows();
  buttonRemoveRow.disabled = isMinRows();

  buttonAppendColumn.disabled = isMaxColumns();
  buttonRemoveColumn.disabled = isMinColumns();
}

function appendRow() {
  if (isMaxRows()) {
    return;
  }

  const columnsCount = getColumnsCount();
  const newRow = bodyEl.insertRow(-1);

  for (let i = 0; i < columnsCount; i++) {
    newRow.insertCell();
  }
}

function removeRow() {
  if (isMinRows()) {
    return;
  }

  bodyEl.deleteRow(-1);
}

function appendColumn() {
  if (isMaxColumns()) {
    return;
  }

  [...bodyEl.rows].forEach((row) => row.insertCell());
}

function removeColumn() {
  if (isMinColumns()) {
    return;
  }

  [...bodyEl.rows].forEach((row) => row.deleteCell(-1));
}

function handleTableControlClick(e) {
  switch (e.currentTarget) {
    case buttonAppendRow:
      appendRow();
      break;

    case buttonRemoveRow:
      removeRow();
      break;

    case buttonAppendColumn:
      appendColumn();
      break;

    case buttonRemoveColumn:
      removeColumn();
      break;
  }

  updateButtonsState();
}

buttons.forEach((btn) => {
  btn.addEventListener('click', handleTableControlClick);
});

updateButtonsState();
