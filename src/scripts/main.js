'use strict';

const minCells = 2;
const maxCells = 10;
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

let currentRows = table.querySelectorAll('tr').length;

let currentColumns = table.querySelectorAll('td').length
  / table.querySelectorAll('tr').length;

appendRow.addEventListener('click', (e) => {
  const tr = document.createElement('tr');

  table.children[0].append(tr);

  for (let i = 0; i < currentColumns; i++) {
    const td = document.createElement('td');

    tr.append(td);
  }
  currentRows += 1;
  checkBorderForRows();
});

appendColumn.addEventListener('click', (e) => {
  for (let i = 0; i < currentRows; i++) {
    const td = document.createElement('td');

    table.children[0].children[i].append(td);
  }
  currentColumns += 1;
  checkBorderForColumns();
});

removeRow.addEventListener('click', (e) => {
  table.children[0].children[0].remove();
  currentRows -= 1;
  checkBorderForRows();
});

removeColumn.addEventListener('click', (e) => {
  for (let i = 0; i < currentRows; i++) {
    table.children[0].children[i].children[0].remove();
  }
  currentColumns -= 1;
  checkBorderForColumns();
});

function checkBorderForRows() {
  switch (currentRows) {
    case minCells:
      removeRow.setAttribute('disabled', true);
      appendRow.removeAttribute('disabled');
      break;

    case maxCells:
      appendRow.setAttribute('disabled', true);
      removeRow.removeAttribute('disabled');
      break;

    default:
      appendRow.removeAttribute('disabled');
      removeRow.removeAttribute('disabled');
      break;
  }
};

function checkBorderForColumns() {
  switch (currentColumns) {
    case minCells:
      removeColumn.setAttribute('disabled', true);
      appendColumn.removeAttribute('disabled');
      break;

    case maxCells:
      appendColumn.setAttribute('disabled', true);
      removeColumn.removeAttribute('disabled');
      break;

    default:
      appendColumn.removeAttribute('disabled');
      removeColumn.removeAttribute('disabled');
      break;
  }
};
