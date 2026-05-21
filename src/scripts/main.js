'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const rowCount = table.rows.length;

  if (rowCount < 10) {
    table.insertRow();
  }
  
  const newCount = table.rows.length;
  appendRow.disabled = newCount >= 10;
  removeRow.disabled = newCount <= 2;
});

removeRow.addEventListener('click', (e) => {
  const rowCount = table.rows.length;

  if(rowCount >= 2) {
    table.deleteRow(-1);
  }

  const newCount = table.rows.length;
  appendRow.disabled = newCount >= 10;
  removeRow.disabled = newCount <= 2;
});

appendCol.addEventListener('click', (e) => {
  const colCount = table.rows[0].cells.length;

  if (colCount < 10) {
    for (let row of table.rows) {
      row.insertCell();
    }
  }

  const newCount = table.rows[0].cells.length;
  appendCol.disabled = newCount >= 10;
  removeCol.disabled = newCount <= 2;

});

removeCol.addEventListener('click', (e) => {
  const colCount = table.rows[0].cells.length;
  if (colCount > 2) {
    for (let row of table.rows) {
      row.deleteCell(-1);
    }
  }

  const newCount = table.rows[0].cells.length;
  appendCol.disabled = newCount >= 10;
  removeCol.disabled = newCount <= 2;
});