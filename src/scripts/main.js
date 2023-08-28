'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function appendRow() {
  const rowsCount = table.rows.length;
  const row = table.insertRow(-1);
  const cellCount = table.rows[0].cells.length;

  if (rowsCount <= 9) {
    for (let i = 0; i < cellCount; i++) {
      row.insertCell(i);
    }
  }

  if (rowsCount === 9) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
}

function appendColumn() {
  const columnsCount = table.rows[0].cells.length;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(table.rows[i].cells.length);
  }

  if (columnsCount === 9) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
}

function deleteColumn() {
  const columnsCount = table.rows[0].cells.length;

  if (columnsCount > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(columnsCount - 1);
    }
  }

  if (columnsCount === 3) {
    removeColumnButton.disabled = true;
  }

  appendColumnButton.disabled = false;
}

function deleteRow() {
  const rowsCount = table.rows.length;

  if (rowsCount > 2) {
    table.deleteRow(rowsCount - 1);
  }

  if (rowsCount === 3) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
}

appendRowButton.addEventListener('click', e => {
  appendRow();
});

removeRowButton.addEventListener('click', e => {
  deleteRow();
});

appendColumnButton.addEventListener('click', e => {
  appendColumn();
});

removeColumnButton.addEventListener('click', e => {
  deleteColumn();
});
