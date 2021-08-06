'use strict';

const table = document.querySelector('tbody');
let numOfRows = table.childElementCount;
let numOfCols = table.firstChild.childElementCount;

const removeCol = document.querySelector('.remove-column');
const addCol = document.querySelector('.append-column');

const removeRow = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');

addRow.addEventListener('click', (e) => {
  numOfRows++;

  const newRow = document.createElement('tr');

  for (let i = 0; i < numOfCols; i++) {
    const newCol = document.createElement('td');

    newRow.append(newCol);
  }
  table.prepend(newRow);
  numOfRows === 10 ? addRow.disabled = true : addRow.disabled = false;
  numOfRows === 2 ? removeRow.disabled = true : removeRow.disabled = false;
});

removeRow.addEventListener('click', (e) => {
  numOfRows--;
  table.removeChild(table.children[0]);

  numOfRows === 10 ? addRow.disabled = true : addRow.disabled = false;
  numOfRows === 2 ? removeRow.disabled = true : removeRow.disabled = false;
});

addCol.addEventListener('click', (e) => {
  numOfCols++;
  numOfCols === 10 ? addCol.disabled = true : addCol.disabled = false;
  numOfCols === 2 ? removeCol.disabled = true : removeCol.disabled = false;

  const allRows = [...document.querySelectorAll('tr')];

  allRows.forEach(row => {
    const newUnit = document.createElement('td');

    row.append(newUnit);
  });

  table.prepend(...allRows);

  numOfCols === 10 ? addCol.disabled = true : addCol.disabled = false;
  numOfCols === 2 ? removeCol.disabled = true : removeCol.disabled = false;
});

removeCol.addEventListener('click', (e) => {
  numOfCols--;
  removeCol.disabled = false;

  const allRows = [...document.querySelectorAll('tr')];

  allRows.forEach(row => {
    row.removeChild(row.firstElementChild);
  });

  table.prepend(...allRows);

  numOfCols === 10 ? addCol.disabled = true : addCol.disabled = false;
  numOfCols === 2 ? removeCol.disabled = true : removeCol.disabled = false;
});
