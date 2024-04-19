'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');

appendRowButton.addEventListener('click', () => {
  const newRow = tableBody.children[0].cloneNode(true);

  tableBody.appendChild(newRow);

  updateButtonsState();
});

removeRowButton.addEventListener('click', () => {
  tableBody.lastElementChild.remove();

  updateButtonsState();
});

appendColumnButton.addEventListener('click', () => {
  tableBody.querySelectorAll('tr').forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });

  updateButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  tableBody.querySelectorAll('tr').forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtonsState();
});

function getTableRowsCount() {
  return document.querySelectorAll('tr').length;
}

function getColumnsCount() {
  return tableBody.children[0].children.length;
}

function updateButtonsState() {
  removeRowButton.disabled = getTableRowsCount() <= 2;
  appendRowButton.disabled = getTableRowsCount() >= 10;
  removeColumnButton.disabled = getColumnsCount() <= 2;
  appendColumnButton.disabled = getColumnsCount() >= 10;
}
