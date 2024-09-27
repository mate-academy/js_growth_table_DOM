'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const rowsCollection = tbody.rows;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (rowsCollection.length >= 10) {
    return;
  }

  removeRowButton.disabled = false;

  tbody.insertAdjacentHTML('beforeend', `
    ${rowsCollection[rowsCollection.length - 1].outerHTML}
  `);

  if (rowsCollection.length >= 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  if (rowsCollection.length <= 2) {
    return;
  }

  appendRowButton.disabled = false;

  tbody.deleteRow(rowsCollection.length - 1);

  if (rowsCollection.length <= 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  if (rowsCollection[0].cells.length >= 10) {
    return;
  }

  removeColumnButton.disabled = false;

  for (let i = 0; i < rowsCollection.length; i++) {
    const cube = rowsCollection[0].cells[0];

    rowsCollection[i].insertAdjacentHTML('beforeend', cube.outerHTML);
  }

  if (rowsCollection[0].cells.length >= 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  if (rowsCollection[0].cells.length <= 2) {
    return;
  }

  appendColumnButton.disabled = false;

  for (let i = 0; i < rowsCollection.length; i++) {
    const columnCollection = rowsCollection[i].cells;

    columnCollection[columnCollection.length - 1].outerHTML
      = null;
  }

  if (rowsCollection[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  }
});
