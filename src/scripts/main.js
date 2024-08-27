'use strict';

// write code here
const table = document.querySelector('.field');
const MIN = 2;
const MAX = 10;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const tr = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    tr.insertCell();
  }

  table.appendChild(tr);
  checkDisabilityForButtons(table.rows.length, appendRow);
});

removeRow.addEventListener('click', (e) => {
  const tr = document.querySelector('tr');

  tr.remove();
  checkDisabilityForButtons();
});

appendColumn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  checkDisabilityForButtons();
});

removeColumn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    row.lastChild.remove();
  });

  checkDisabilityForButtons();
});

function checkDisabilityForButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= MAX;
  removeRow.disabled = rowCount <= MIN;
  appendColumn.disabled = columnCount >= MAX;
  removeColumn.disabled = columnCount <= MIN;
}
