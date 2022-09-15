'use strict';

const tableRows = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');

const removeRow = document.querySelector('.remove-row');

const addColumn = document.querySelector('.append-column');

const removeColumn = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  const lastRow = tableRows.lastElementChild;

  if (tableRows.children.length === 9) {
    tableRows.append(lastRow.cloneNode(true));
    addRow.disabled = true;
  } else {
    tableRows.append(lastRow.cloneNode(true));
  }

  if (removeRow.disabled) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const lastRow = tableRows.lastElementChild;

  if (tableRows.children.length === 3) {
    lastRow.remove();
    removeRow.disabled = true;
  } else {
    lastRow.remove();
  }

  if (addRow.disabled) {
    addRow.disabled = false;
  }
});

addColumn.addEventListener('click', () => {
  const collectionOfRows = tableRows.rows;

  for (let i = 0; i < collectionOfRows.length; i++) {
    const lastData = collectionOfRows[i].lastElementChild;

    if (collectionOfRows[i].childElementCount === 9) {
      addColumn.disabled = true;
    }

    collectionOfRows[i].append(lastData.cloneNode(true));
  }

  if (removeColumn.disabled) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const collectionOfRows = tableRows.rows;

  for (let i = 0; i < collectionOfRows.length; i++) {
    const lastData = collectionOfRows[i].lastElementChild;

    if (collectionOfRows[i].childElementCount === 3) {
      removeColumn.disabled = true;
    }

    lastData.remove();
  }

  if (addColumn.disabled) {
    addColumn.disabled = false;
  }
});
