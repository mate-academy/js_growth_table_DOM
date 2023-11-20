'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const tableBody = document.querySelector('tbody');

appendRow.addEventListener('click', () => {
  removeRow.hasAttribute('disabled') && removeRow.removeAttribute('disabled');

  const newRow = tableBody.insertRow();

  for (let i = 0; i < tableBody.rows[0].cells.length; i++) {
    newRow.insertCell(i);
  };

  if (tableBody.rows.length === 10) {
    appendRow.setAttribute('disabled', '');
  }
});

removeRow.addEventListener('click', () => {
  appendRow.hasAttribute('disabled') && appendRow.removeAttribute('disabled');
  tableBody.deleteRow(tableBody.rows.length - 1);

  if (tableBody.rows.length === 2) {
    removeRow.setAttribute('disabled', '');
  }
});

appendCol.addEventListener('click', () => {
  removeCol.hasAttribute('disabled') && removeCol.removeAttribute('disabled');

  for (let i = 0; i < tableBody.rows.length; i++) {
    tableBody.rows[i].insertCell();
  }

  if (tableBody.rows[0].cells.length === 10) {
    appendCol.setAttribute('disabled', '');
  }
});

removeCol.addEventListener('click', () => {
  appendCol.hasAttribute('disabled') && appendCol.removeAttribute('disabled');

  for (let i = 0; i < tableBody.rows.length; i++) {
    tableBody.rows[i].deleteCell(tableBody.rows[0].cells.length - 1);
  }

  if (tableBody.rows[0].cells.length === 2) {
    removeCol.setAttribute('disabled', '');
  }
});
