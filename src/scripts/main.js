'use strict';

const MAXAMOUNT = 10;
const MINAMOUNT = 2;

const table = document.querySelector('.field');
const rows = table.rows;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (rows.length < MAXAMOUNT) {
    const newRow = table.insertRow();
    const columnCount = rows[0].cells.length;

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }

    removeRowButton.disabled = false;

    if (rows.length === MAXAMOUNT) {
      appendRowButton.disabled = true;
    }
  }
});

removeRowButton.addEventListener('click', () => {
  table.deleteRow(0);

  appendRowButton.disabled = false;

  if (rows.length === MINAMOUNT) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  const columnCount = rows[0].cells.length;

  if (columnCount < MAXAMOUNT) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell(-1);
    }

    removeColumnButton.disabled = false;

    if (rows[0].cells.length === MAXAMOUNT) {
      appendColumnButton.disabled = true;
    }
  }
});

removeColumnButton.addEventListener('click', () => {
  const columnCount = rows[0].cells.length;

  if (columnCount > MINAMOUNT) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(-1);
    }

    appendColumnButton.disabled = false;

    if (rows[0].cells.length === MINAMOUNT) {
      removeColumnButton.disabled = true;
    }
  }
});
