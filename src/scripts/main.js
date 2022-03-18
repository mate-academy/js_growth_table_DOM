'use strict';

let rowsCurrentNumber;
let columnsCurrentNumber;

const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

const initialTable = document.querySelector('.field');

function addRow(table, myEvent) {
  rowsCurrentNumber = table.rows.length;

  if (rowsCurrentNumber === 9) {
    myEvent.target.disabled = !myEvent.target.disabled;
  }

  if (rowsCurrentNumber === 2) {
    removeRowButton.disabled = !removeRowButton.disabled;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
};

function addColumn(table, myEvent) {
  columnsCurrentNumber = table.rows[0].cells.length;

  if (columnsCurrentNumber === 9) {
    myEvent.target.disabled = !myEvent.target.disabled;
  }

  if (columnsCurrentNumber === 2) {
    removeColumnButton.disabled = !removeColumnButton.disabled;
  }

  const rowsNumber = table.rows.length;

  for (let i = 0; i < rowsNumber; i++) {
    table.rows[i].insertCell();
  }
};

function removeRow(table, myEvent) {
  rowsCurrentNumber = table.rows.length;

  if (rowsCurrentNumber === 3) {
    myEvent.target.disabled = !myEvent.target.disabled;
  }

  if (rowsCurrentNumber === 10) {
    appendRowButton.disabled = !appendRowButton.disabled;
  }

  table.deleteRow(table.rows - 1);
}

function removeColumn(table, myEvent) {
  columnsCurrentNumber = table.rows[0].cells.length;

  if (columnsCurrentNumber === 3) {
    myEvent.target.disabled = !myEvent.target.disabled;
  }

  if (columnsCurrentNumber === 10) {
    appendColumnButton.disabled = !appendColumnButton.disabled;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(table.rows[i].cells.length - 1);
  }
}

appendRowButton.addEventListener('click', e => addRow(initialTable, e));

appendColumnButton.addEventListener('click', e => addColumn(initialTable, e));

removeRowButton.addEventListener('click', e => removeRow(initialTable, e));

removeColumnButton.addEventListener('click', e =>
  removeColumn(initialTable, e));
