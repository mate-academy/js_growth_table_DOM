'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const trNode = table.rows;

const checkAmount = () => {
  const rowsCount = table.rows.length;
  const columnsCount = table.rows[0].cells.length;
  const minAmountOfElements = 2;
  const maxAmountOfElements = 10;

  appendRow.disabled = rowsCount >= maxAmountOfElements;
  removeRow.disabled = rowsCount <= minAmountOfElements;
  appendCol.disabled = columnsCount >= maxAmountOfElements;
  removeCol.disabled = columnsCount <= minAmountOfElements;
};

appendRow.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  table.append(tr.cloneNode(true));

  checkAmount();
});

removeRow.addEventListener('click', () => {
  const tr = document.querySelector('tr');

  tr.remove();

  checkAmount();
});

appendCol.addEventListener('click', () => {
  [ ...trNode ].forEach(el => el.append(document.createElement('td')));

  checkAmount();
});

removeCol.addEventListener('click', () => {
  [ ...trNode ].forEach(el => el.cells[el.cells.length - 1].remove());

  checkAmount();
});
