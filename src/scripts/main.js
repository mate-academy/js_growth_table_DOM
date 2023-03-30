'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('table').tBodies[0];

function checkAmount() {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendCol.disabled = columnsCount >= 10;
  removeCol.disabled = columnsCount <= 2;
}

appendRow.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  table.append(tr.cloneNode(true));

  checkAmount();
});

appendCol.addEventListener('click', () => {
  const trNode = table.rows;
  const trArray = [ ...trNode ];

  trArray.forEach(tr => tr.append(document.createElement('td')));

  checkAmount();
});

removeRow.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  tr.remove();

  checkAmount();
});

removeCol.addEventListener('click', () => {
  const trNode = table.rows;
  const trArray = [ ...trNode ];

  trArray.forEach(tr => tr.cells[tr.cells.length - 1].remove());

  checkAmount();
});
