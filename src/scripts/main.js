'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableRef = document.querySelector('.field');

appendRow.addEventListener('click', function() {
  notDisable(removeRow);

  const lengthR = tableRef.querySelectorAll('tr').length;

  if (lengthR > 8) {
    appendRow.setAttribute('disabled', 'disabled');
  }

  const row = tableRef.insertRow(tableRef.rows.length);

  for (let i = 0; i < tableRef.rows[0].cells.length; i++) {
    createCell(row.insertCell(i), 'row');
  }
});

removeRow.addEventListener('click', function() {
  notDisable(appendRow);

  const row = tableRef.querySelectorAll('tr');

  if (row.length < 4) {
    removeRow.setAttribute('disabled', 'disabled');
  }

  tableRef.deleteRow(0);
});

removeColumn.addEventListener('click', function() {
  notDisable(appendColumn);

  const row = tableRef.querySelectorAll('tr');

  for (let i = 0; i < row.length; i++) {
    row[i].deleteCell(0);
  }

  if (tableRef.rows[0].cells.length < 3) {
    removeColumn.setAttribute('disabled', 'disabled');
  }
});

appendColumn.addEventListener('click', function() {
  notDisable(removeColumn);

  for (let i = 0; i < tableRef.rows.length; i++) {
    const cellCount = tableRef.rows[i].cells.length;
    const rowCount = tableRef.rows[i].insertCell(cellCount);

    createCell(rowCount, 'col');
  }

  if (tableRef.rows[0].cells.length > 9) {
    appendColumn.setAttribute('disabled', 'disabled');
  }
});

function createCell(cell, style) {
  const div = document.createElement('div');

  div.setAttribute('class', style);
  div.setAttribute('className', style);
  cell.appendChild(div);
}

function notDisable(button) {
  if (event) {
    button.removeAttribute('disabled', 'disabled');
  }
}
