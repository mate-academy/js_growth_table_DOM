'use strict';

const container = document.querySelector('.container');
const tBody = document.querySelector('.field > tbody');

const addColumn = () => {
  for (const row of tBody.rows) {
    if (row.cells.length === 10) {
      return;
    }

    const lastIndex = row.cells.length - 1;

    row.cells[lastIndex].after(row.cells[lastIndex].cloneNode(true));
  }
};

const removeColumn = () => {
  for (const row of tBody.rows) {
    if (row.cells.length === 2) {
      return;
    }

    const lastIndex = row.cells.length - 1;

    row.cells[lastIndex].remove();
  }
};

const addRow = () => {
  if (tBody.rows.length === 10) {
    return;
  }

  const lastIndex = tBody.rows.length - 1;

  tBody.rows[lastIndex].after(tBody.rows[lastIndex].cloneNode(true));
};

const removeRow = () => {
  if (tBody.rows.length === 2) {
    return;
  }

  const lastIndex = tBody.rows.length - 1;

  tBody.rows[lastIndex].remove();
};

const buttonSwitcher = (colCount, rowCount) => {
  if (colCount === 2) {
    const button = document.querySelector('.remove-column');

    button.disabled = true;
  } else if (colCount === 10) {
    const button = document.querySelector('.append-column');

    button.disabled = true;
  } else {
    const buttonRemove = document.querySelector('.remove-column');
    const buttonAppend = document.querySelector('.append-column');

    buttonRemove.disabled = false;
    buttonAppend.disabled = false;
  }

  if (rowCount === 2) {
    const button = document.querySelector('.remove-row');

    button.disabled = true;
  } else if (rowCount === 10) {
    const button = document.querySelector('.append-row');

    button.disabled = true;
  } else {
    const buttonRemove = document.querySelector('.remove-row');
    const buttonAppend = document.querySelector('.append-row');

    buttonRemove.disabled = false;
    buttonAppend.disabled = false;
  }
};

container.addEventListener('click', e => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const action = e.target.classList[0];

  switch (action) {
    case 'append-column':
      addColumn();
      break;

    case 'append-row':
      addRow();
      break;

    case 'remove-row':
      removeRow();
      break;

    case 'remove-column':
      removeColumn();
      break;
  }

  const rowCount = tBody.rows.length;
  const colCount = tBody.rows[0].cells.length;

  buttonSwitcher(colCount, rowCount);
});
