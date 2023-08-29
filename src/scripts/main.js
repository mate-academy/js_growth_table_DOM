'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const maxCount = 10;
const minCount = 2;

function disableButton(button) {
  button.disabled = true;
}

function activateButton(button) {
  button.disabled = false;
}

function appendRow() {
  const rowsCount = table.rows.length;
  const row = table.insertRow(-1);
  const cellCount = table.rows[0].cells.length;

  if (rowsCount <= maxCount - 1) {
    for (let i = 0; i < cellCount; i++) {
      row.insertCell(i);
    }
  }

  if (rowsCount === maxCount - 1) {
    disableButton(appendRowButton);
  }
}

function appendColumn() {
  const columnsCount = table.rows[0].cells.length;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(table.rows[i].cells.length);
  }

  if (columnsCount === maxCount - 1) {
    disableButton(appendColumnButton);
  }
}

function deleteColumn() {
  const columnsCount = table.rows[0].cells.length;

  if (columnsCount > minCount) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(columnsCount - 1);
    }
  }

  if (columnsCount === minCount + 1) {
    disableButton(removeColumnButton);
  }
}

function deleteRow() {
  const rowsCount = table.rows.length;

  if (rowsCount > minCount) {
    table.deleteRow(rowsCount - 1);
  }

  if (rowsCount === minCount + 1) {
    disableButton(removeRowButton);
  }
}

appendRowButton.addEventListener('click', e => {
  appendRow();
  activateButton(removeRowButton);
});

removeRowButton.addEventListener('click', e => {
  deleteRow();
  activateButton(appendRowButton);
});

appendColumnButton.addEventListener('click', e => {
  appendColumn();
  activateButton(removeColumnButton);
});

removeColumnButton.addEventListener('click', e => {
  deleteColumn();
  activateButton(appendColumnButton);
});
