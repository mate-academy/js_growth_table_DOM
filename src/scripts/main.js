'use strict';

const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');
const container = document.querySelector('.container');

let rowCount = table.children.length;
let colCount = table.firstElementChild.children.length;

container.addEventListener('click', (e) => {
  const target = e.target.classList[0];

  switch (target) {
    case 'append-row':
      if (rowCount < 10) {
        const cloneRow = table.firstElementChild.cloneNode(true);

        table.append(cloneRow);
      }
      rowCount++;
      break;

    case 'remove-row':
      if (rowCount > 2) {
        table.lastElementChild.remove();
      }
      rowCount--;
      break;

    case 'append-column':
      if (colCount < 10) {
        for (let i = 0; i < rowCount; i++) {
          const cell = document.createElement('td');

          table.children[i].append(cell);
        }
      }
      colCount++;
      break;

    case 'remove-column':
      if (colCount > 2) {
        for (let i = 0; i < rowCount; i++) {
          table.children[i].lastElementChild.remove();
        }
      }
      colCount--;
      break;
  }
  addCol.disabled = colCount === 10;
  remCol.disabled = colCount === 2;
  addRow.disabled = rowCount === 10;
  remRow.disabled = rowCount === 2;
});
