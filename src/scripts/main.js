'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const field = document.querySelector('.field tbody');

const appendLimit = 10;
const removeLimit = 2;

appendRow.addEventListener('click', () => {
  if (field.children.length >= appendLimit) {
    return;
  }

  const oneRow = field.querySelector('tr');
  const clonedRow = oneRow.cloneNode(true);

  field.append(clonedRow);

  const currentRows = field.children.length;

  if (currentRows > removeLimit) {
    removeRow.disabled = false;
  }

  if (currentRows >= appendLimit) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  if (field.children.length <= removeLimit) {
    return;
  }

  const rows = field.querySelectorAll('tr');
  const rowToRemove = rows[rows.length - 1];

  rowToRemove.remove();

  const currentRowsCount = field.children.length;

  if (currentRowsCount < appendLimit) {
    appendRow.disabled = false;
  }

  if (currentRowsCount <= removeLimit) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  if (rows[0].children.length >= appendLimit) {
    return;
  }

  rows.forEach((row) => {
    const targetCell = row.children[0];

    if (targetCell) {
      const clonedCell = targetCell.cloneNode(true);

      row.append(clonedCell);
    }
  });

  const currentColumns = rows[0].children.length;

  if (currentColumns > removeLimit) {
    removeColumn.disabled = false;
  }

  if (currentColumns >= appendLimit) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  if (rows[0].children.length <= removeLimit) {
    return;
  }

  rows.forEach((row) => {
    const lastIndex = row.children.length - 1;
    const removeCell = row.children[lastIndex];

    if (removeCell) {
      removeCell.remove();
    }
  });

  const currentColumnsCount = rows[0].children.length;

  if (currentColumnsCount < appendLimit) {
    appendColumn.disabled = false;
  }

  if (currentColumnsCount <= removeLimit) {
    removeColumn.disabled = true;
  }
});
