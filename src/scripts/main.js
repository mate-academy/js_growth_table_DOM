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

  if (field.children.length > removeLimit) {
    removeRow.disabled = false;
  }

  const appendCount = field.children.length;

  if (appendCount >= appendLimit) {
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

  if (field.children.length < appendLimit) {
    appendRow.disabled = false;
  }

  const removeCount = field.children.length;

  if (removeCount <= removeLimit) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length >= appendLimit) {
      return;
    }

    const targetCell = row.children[0];

    if (targetCell) {
      const clonedCell = targetCell.cloneNode(true);

      row.append(clonedCell);
    }

    if (row.children.length > removeLimit) {
      removeColumn.disabled = false;
    }

    const appendNumber = row.children.length + 1;

    if (appendNumber > appendLimit) {
      appendColumn.disabled = true;
    }
  });
});

removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length <= removeLimit) {
      return;
    }

    const lastIndex = row.children.length - 1;
    const removeCell = row.children[lastIndex];

    if (removeCell) {
      removeCell.remove();
    }

    if (row.children.length < appendLimit) {
      appendColumn.disabled = false;
    }

    const removeNumber = row.children.length;

    if (removeNumber <= removeLimit) {
      removeColumn.disabled = true;
    }
  });
});
