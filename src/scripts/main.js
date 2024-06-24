'use strict';

const field = document.querySelector('.field tbody');
const rows = field.children;

let rowsCounter = rows.length;
let colsCounter = document.querySelector('tr').children.length;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

if (rowsCounter === 2) {
  removeRow.disabled = true;
}

if (colsCounter === 10) {
  appendColumn.disabled = true;
}

if (colsCounter === 2) {
  removeColumn.disabled = true;
}

function constructorRow(colsCount, operation) {
  if (operation === 'addRow') {
    const newRow = document.createElement('tr');

    for (let i = 0; i < colsCount; i++) {
      newRow.append(document.createElement('td'));
    }

    field.append(newRow);
  }

  if (operation === 'removeRow') {
    const firstRow = field.firstElementChild;

    field.removeChild(firstRow);
  }
}

function constructorCol(rowsCount, operation) {
  if (operation === 'addColumn') {
    for (let i = 0; i < rowsCount; i++) {
      const row = field.children[i];

      row.append(document.createElement('td'));
    }
  }

  if (operation === 'removeColumn') {
    for (let i = 0; i < rowsCount; i++) {
      const row = field.children[i];
      const firstTd = row.firstElementChild;

      row.removeChild(firstTd);
    }
  }
}

appendRow.addEventListener('click', (e) => {
  rowsCounter += 1;
  constructorRow(colsCounter, 'addRow');
  removeRow.disabled = false;

  if (rowsCounter === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', (e) => {
  rowsCounter -= 1;
  constructorRow(colsCounter, 'removeRow');
  appendRow.disabled = false;

  if (rowsCounter === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (e) => {
  colsCounter += 1;
  constructorCol(rowsCounter, 'addColumn');
  removeColumn.disabled = false;

  if (colsCounter === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', (e) => {
  colsCounter -= 1;
  constructorCol(rowsCounter, 'removeColumn');
  appendColumn.disabled = false;

  if (colsCounter === 2) {
    removeColumn.disabled = true;
  }
});
