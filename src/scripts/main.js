'use strict';

const table = document.querySelector('.field');

const appendColumnButton = document.querySelector('.append-column');

const removeColumnButton = document.querySelector('.remove-column');

const appendRowButton = document.querySelector('.append-row');

const removeRowButton = document.querySelector('.remove-row');

function appendColumn() {
  const rowsCollection = document.querySelectorAll('tr');

  for (const row of rowsCollection) {
    if (row.cells.length === 10) {
      return;
    }

    if (row.cells.length === 9) {
      appendColumnButton.setAttribute('disabled', 'true');
    }

    if (row.cells.length === 2) {
      removeColumnButton.removeAttribute('disabled');
    }

    const newTd = document.createElement('td');

    row.append(newTd);
  }
}

function removeColumn() {
  const rowsCollection = document.querySelectorAll('tr');

  for (const row of rowsCollection) {
    if (row.cells.length === 2) {
      return;
    }

    if (row.cells.length === 3) {
      removeColumnButton.setAttribute('disabled', 'true');
    }

    if (row.cells.length === 10) {
      appendColumnButton.removeAttribute('disabled');
    }

    const lastTd = row.cells[row.cells.length - 1];

    lastTd.remove();
  }
}

function appendRow() {
  const rowsCollection = document.querySelectorAll('tr');

  if (rowsCollection.length === 10) {
    return;
  }

  if (rowsCollection.length === 9) {
    appendRowButton.setAttribute('disabled', 'true');
  }

  if (rowsCollection.length === 2) {
    removeRowButton.removeAttribute('disabled');
  }

  const firstRow = document.querySelector('tr');
  const rowClone = firstRow.cloneNode(true);

  table.append(rowClone);
}

function removeRow() {
  const rowsCollection = document.querySelectorAll('tr');

  if (rowsCollection.length === 2) {
    return;
  }

  if (rowsCollection.length === 3) {
    removeRowButton.setAttribute('disabled', 'true');
  }

  if (rowsCollection.length === 10) {
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
