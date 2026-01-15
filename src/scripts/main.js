'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addEventListener('click', (e) => {
  const rowsCount = tbody.children.length;
  const columnsCount = getColumnsCount();

  if (e.target === appendRow) {
    if (rowsCount >= 10) {
      return;
    }

    const newRow = document.createElement('tr');

    for (let i = 0; i < columnsCount; i++) {
      const td = document.createElement('td');

      newRow.appendChild(td);
    }
    tbody.appendChild(newRow);
  }

  if (e.target === removeRow) {
    if (rowsCount <= 2) {
      return;
    }

    if (tbody.lastElementChild) {
      tbody.lastElementChild.remove();
    }
  }

  if (e.target === appendColumn) {
    if (columnsCount >= 10) {
      return;
    }

    tbody.querySelectorAll('tr').forEach((tr) => {
      const td = document.createElement('td');

      tr.appendChild(td);
    });
  }

  if (e.target === removeColumn) {
    if (columnsCount <= 2) {
      return;
    }

    tbody.querySelectorAll('tr').forEach((tr) => {
      if (tr.lastElementChild) {
        tr.lastElementChild.remove();
      }
    });
  }

  updateButtonsState();
});

function updateButtonsState() {
  const rowsCount = tbody.children.length;
  const columnsCount = getColumnsCount();

  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;

  appendColumn.disabled = columnsCount >= 10;
  removeColumn.disabled = columnsCount <= 2;
}

function getColumnsCount() {
  const firstRow = tbody.querySelector('tr');

  if (firstRow) {
    return firstRow.children.length;
  } else {
    return 2;
  }
}
