'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

const actions = {
  'append-row': addRow,
  'remove-row': rmvRow,
  'append-column': addColumn,
  'remove-column': rmvColumn,
};

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', () => {
    const actionKey = Object.keys(actions).find(
      (key) => button.classList.contains(key),
      // eslint-disable-next-line function-paren-newline
    );

    if (actionKey) {
      actions[actionKey]();
    }
  });
});

function addRow() {
  const rows = getRows();

  if (rows.length < 10) {
    const lastRow = field.querySelector('tr:last-child');
    const clonedRow = lastRow.cloneNode(true);

    field.append(clonedRow);
  }

  checkTable();
}

function rmvRow() {
  const rows = getRows();

  if (rows.length > 2) {
    const lastRow = field.querySelector('tr:last-child');

    lastRow.remove();
  }

  checkTable();
}

function addColumn() {
  const rows = getRows();
  const columns = getColumns();

  if (columns >= 10) {
    return;
  }

  for (const row of rows) {
    const lastCell = row.lastElementChild;

    row.append(lastCell.cloneNode(true));
  }

  checkTable();
}

function rmvColumn() {
  const rows = getRows();
  const columns = getColumns();

  if (columns <= 2) {
    return;
  }

  for (const row of rows) {
    row.lastElementChild.remove();
  }

  checkTable();
}

function getRows() {
  const rows = field.querySelectorAll('tr');

  return rows;
}

function getColumns() {
  const columns = field.querySelector('tr').children.length;

  return columns;
}

function checkTable() {
  const rowsCount = getRows().length;
  const columns = getColumns();

  if (rowsCount >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (columns >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (rowsCount <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (columns <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
}

checkTable();
