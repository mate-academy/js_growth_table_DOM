'use strict';

const tbody = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rowsCount = tbody.children.length;
let columnsCount = tbody.querySelector('tr').children.length;

document.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.closest('.button') === appendRow) {
    doingTable('appendRow');
  }

  if (e.target.closest('.button') === removeRow) {
    doingTable('removeRow');
  }

  if (e.target.closest('.button') === appendColumn) {
    doingTable('appendColumn');
  }

  if (e.target.closest('.button') === removeColumn) {
    doingTable('removeColumn');
  }
}

function doingTable(change) {
  const rowAll = tbody.querySelectorAll('tr');
  const row = rowAll[rowAll.length - 1];
  const column = tbody.querySelectorAll('tr');

  if (change === 'appendRow' && rowsCount < 10) {
    tbody.append(row.cloneNode(true));
    rowsCount++;
    setCount();
  }

  if (change === 'removeRow' && rowsCount > 2) {
    row.remove();
    rowsCount--;
    setCount();
  }

  if (change === 'appendColumn' && columnsCount < 10) {
    column.forEach((tr, index) => {
      tr.append(tr.lastElementChild.cloneNode(true));
    });
    columnsCount++;
    setCount();
  }

  if (change === 'removeColumn' && columnsCount > 2) {
    column.forEach((tr, index) => {
      tr.lastElementChild.remove();
    });
    columnsCount--;
    setCount();
  }
}

function setCount() {
  if (rowsCount === 10) {
    appendRow.setAttribute('disabled', '');
  } else {
    appendRow.removeAttribute('disabled');
  }

  if (rowsCount === 2) {
    removeRow.setAttribute('disabled', '');
  } else {
    removeRow.removeAttribute('disabled');
  }

  if (columnsCount === 10) {
    appendColumn.setAttribute('disabled', '');
  } else {
    appendColumn.removeAttribute('disabled');
  }

  if (columnsCount === 2) {
    removeColumn.setAttribute('disabled', '');
  } else {
    removeColumn.removeAttribute('disabled');
  }
}
