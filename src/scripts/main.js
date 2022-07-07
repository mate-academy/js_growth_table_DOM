'use strict';

const table = document.querySelector('tbody');
let numOfRows = table.childElementCount;
let numOfCols = table.firstChild.childElementCount;

const removeCol = document.querySelector('.remove-column');
const addCol = document.querySelector('.append-column');

const removeRow = document.querySelector('.remove-row');
const addRow = document.querySelector('.append-row');

document.querySelector('.container').addEventListener('click', (e) => {
  switch (e.target) {
    case addRow:
      numOfRows++;

      const newRow = document.createElement('tr');

      for (let i = 0; i < numOfCols; i++) {
        const newCol = document.createElement('td');

        newRow.append(newCol);
      }
      table.prepend(newRow);
      break;
    case removeRow:
      numOfRows--;
      table.removeChild(table.children[0]);
      break;
    case addCol:
      numOfCols++;

      let allRows = [...document.querySelectorAll('tr')];

      allRows.forEach(row => {
        const newUnit = document.createElement('td');

        row.append(newUnit);
      });

      table.prepend(...allRows);

      break;
    case removeCol:
      numOfCols--;
      removeCol.disabled = false;

      allRows = [...document.querySelectorAll('tr')];

      allRows.forEach(row => {
        row.removeChild(row.firstElementChild);
      });

      table.prepend(...allRows);
      break;
  }

  numOfRows === 10 ? addRow.disabled = true : addRow.disabled = false;
  numOfRows === 2 ? removeRow.disabled = true : removeRow.disabled = false;
  numOfCols === 10 ? addCol.disabled = true : addCol.disabled = false;
  numOfCols === 2 ? removeCol.disabled = true : removeCol.disabled = false;
});
