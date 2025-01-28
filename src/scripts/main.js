'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');
const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_ROWS = 2;
const MIN_COLUMS = 2;

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

function appendRow(e) {
  const newRow = tableBody.firstChild.cloneNode(true);

  tableBody.append(newRow);

  if (tableBody.rows.length === MAX_ROWS) {
    e.currentTarget.setAttribute('disabled', '');
  }

  if (tableBody.rows.length > MIN_ROWS) {
    removeRowButton.removeAttribute('disabled');
  }
}

function removeRow(e) {
  const removedRow = tableBody.lastElementChild;

  removedRow.remove();

  if (tableBody.rows.length === MIN_ROWS) {
    e.currentTarget.setAttribute('disabled', '');
  }

  if (tableBody.rows.length < MAX_ROWS) {
    appendRowButton.removeAttribute('disabled');
  }
}

function appendColumn(e) {
  const td = document.createElement('td');
  const tableBodyArr = [...tableBody.rows];

  for (let i = 0; i < tableBodyArr.length; i++) {
    const newTd = td.cloneNode();

    tableBodyArr[i].append(newTd);
  }

  if (tableBody.rows[0].cells.length === MAX_COLUMNS) {
    e.currentTarget.setAttribute('disabled', '');
  }

  if (tableBody.rows[0].cells.length > MIN_COLUMS) {
    removeColumnButton.removeAttribute('disabled');
  }
}

function removeColumn(e) {
  const tableBodyArr = [...tableBody.rows];

  for (let i = 0; i < tableBodyArr.length; i++) {
    tableBodyArr[i].lastElementChild.remove();
  }

  if (tableBody.rows[0].cells.length === MIN_COLUMS) {
    e.currentTarget.setAttribute('disabled', '');
  }

  if (tableBody.rows[0].cells.length < MAX_COLUMNS) {
    appendColumnButton.removeAttribute('disabled');
  }
}
