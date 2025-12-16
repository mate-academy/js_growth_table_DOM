/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
'use strict';

const tbody = document.querySelector('.field tbody');
const rows = tbody.querySelectorAll('tr');
let countRows = rows.length;
let countCells = rows[0].querySelectorAll('td').length;

const buttonAddRow = document.querySelector('button.append-row');
const buttonRemoveRow = document.querySelector('button.remove-row');
const buttonAddColumn = document.querySelector('button.append-column');
const buttonRemoveColumn = document.querySelector('button.remove-column');

const refreshColumnButtons = () => {
  if (countCells === 2) {
    buttonRemoveColumn.disabled = true;
    buttonAddColumn.disabled = false;
  } else if (countCells === 10) {
    buttonRemoveColumn.disabled = false;
    buttonAddColumn.disabled = true;
  } else {
    buttonRemoveColumn.disabled = false;
    buttonAddColumn.disabled = false;
  }
};

const refreshRowButtons = () => {
  if (countRows === 2) {
    buttonRemoveRow.disabled = true;
    buttonAddRow.disabled = false;
  } else if (countRows === 10) {
    buttonRemoveRow.disabled = false;
    buttonAddRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
    buttonAddRow.disabled = false;
  }
};

const appendRow = () => {
  if (countRows === 10) {
    return;
  }

  const row = document.createElement('tr');

  for (let i = 0; i < countCells; i++) {
    const td = document.createElement('td');

    row.append(td);
  }

  tbody.append(row);
  countRows++;
  refreshRowButtons();
};

const removeRow = () => {
  if (countRows === 2) {
    return;
  }

  const lastRow = tbody.querySelector('tr:last-child');

  lastRow.remove();
  countRows--;
  refreshRowButtons();
};

const appendColumn = () => {
  if (countCells === 10) {
    return;
  }

  const rowsCurrent = tbody.querySelectorAll('tr');

  rowsCurrent.forEach((row) => {
    const td = document.createElement('td');

    row.append(td);
  });
  countCells++;

  refreshColumnButtons();
};

const removeColumn = () => {
  if (countCells === 2) {
    return;
  }

  const rowsCurrent = tbody.querySelectorAll('tr');

  rowsCurrent.forEach((row) => {
    const lastTd = row.querySelector('td:last-child');

    lastTd.remove();
  });

  countCells--;

  refreshColumnButtons();
};

buttonAddRow.addEventListener('click', appendRow);
buttonRemoveRow.addEventListener('click', removeRow);
buttonAddColumn.addEventListener('click', appendColumn);
buttonRemoveColumn.addEventListener('click', removeColumn);

refreshColumnButtons();
refreshRowButtons();
