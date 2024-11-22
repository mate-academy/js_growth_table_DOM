'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

appendRow.addEventListener('click', () => {
  const createRow = document.createElement('tr');
  const columnCount = table.rows[0].cells.length;

  if (tbody.rows.length >= 10) {
    appendRow.setAttribute('disabled', 'true');
  }

  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    createRow.append(td);
  }
  tbody.appendChild(createRow);
});

removeRow.addEventListener('click', () => {
  if (tbody.rows.length > 2) {
    tbody.deleteRow(tbody.rows.length - 1);
  }

  if (tbody.rows.length <= 2) {
    removeRow.setAttribute('disabled', 'true');
  }
});

removeColumn.addEventListener('click', () => {
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(columnCount - 1);
  }

  if (table.rows[0].cells.length - 1 < 2) {
    removeColumn.setAttribute('disabled', 'true');
  }
});

appendColumn.addEventListener('click', () => {
  const columnCount = table.rows.length;

  for (let i = 0; i < columnCount; i++) {
    table.rows[i].insertCell(-1);
  }

  if (table.rows[0].cells.length > 10) {
    appendColumn.setAttribute('disabled', true);
  }
});
// write code here
