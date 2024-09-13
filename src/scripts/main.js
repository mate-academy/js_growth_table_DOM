'use strict';

const tbody = document.querySelector('tbody');

const appendColumnButton = document.querySelector('.append-column');

const removeColumnButton = document.querySelector('.remove-column');

const appendRowButton = document.querySelector('.append-row');

const removeRowButton = document.querySelector('.remove-row');

const minTabSize = 2;

const preMinTabSize = 3;

const preMaxTabSize = 9;

const maxTabSize = 10;

function appendColumn() {
  const rowsCollection = document.querySelectorAll('tr');

  for (const row of rowsCollection) {
    if (row.cells.length === maxTabSize) {
      return;
    }

    if (row.cells.length === preMaxTabSize) {
      appendColumnButton.setAttribute('disabled', 'true');
    }

    if (row.cells.length === minTabSize) {
      removeColumnButton.removeAttribute('disabled');
    }

    const newTd = document.createElement('td');

    row.append(newTd);
  }
}

function removeColumn() {
  const rowsCollection = document.querySelectorAll('tr');

  for (const row of rowsCollection) {
    if (row.cells.length === minTabSize) {
      return;
    }

    if (row.cells.length === preMinTabSize) {
      removeColumnButton.setAttribute('disabled', 'true');
    }

    if (row.cells.length === maxTabSize) {
      appendColumnButton.removeAttribute('disabled');
    }

    const lastTd = row.cells[row.cells.length - 1];

    lastTd.remove();
  }
}

function appendRow() {
  const rowsCollection = document.querySelectorAll('tr');

  if (rowsCollection.length === maxTabSize) {
    return;
  }

  if (rowsCollection.length === preMaxTabSize) {
    appendRowButton.setAttribute('disabled', 'true');
  }

  if (rowsCollection.length === minTabSize) {
    removeRowButton.removeAttribute('disabled');
  }

  const firstRow = document.querySelector('tr');
  const rowClone = firstRow.cloneNode(true);

  tbody.append(rowClone);
}

function removeRow() {
  const rowsCollection = document.querySelectorAll('tr');

  if (rowsCollection.length === minTabSize) {
    return;
  }

  if (rowsCollection.length === preMinTabSize) {
    removeRowButton.setAttribute('disabled', 'true');
  }

  if (rowsCollection.length === maxTabSize) {
    appendRowButton.removeAttribute('disabled');
  }

  const lastRow = rowsCollection[rowsCollection.length - 1];

  lastRow.remove();
}

document.addEventListener('click', function (ev) {
  if (ev.target === appendColumnButton) {
    appendColumn();
  }

  if (ev.target === removeColumnButton) {
    removeColumn();
  }

  if (ev.target === appendRowButton) {
    appendRow();
  }

  if (ev.target === removeRowButton) {
    removeRow();
  }
});
