'use strict';

const table = document.querySelector('.field');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const maxRow = 10;
const minRow = 2;
const maxColumns = 10;
const minColumns = 2;

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => {
    changeTable(button);

    const currentRows = table.rows.length;
    const currentColumns = table.rows[0].children.length;

    if (currentRows < maxRow) {
      addRowButton.disabled = false;
    } else {
      addRowButton.disabled = true;
    }

    if (currentRows > minRow) {
      removeRowButton.disabled = false;
    } else {
      removeRowButton.disabled = true;
    }

    if (currentColumns < maxColumns) {
      addColumnButton.disabled = false;
    } else {
      addColumnButton.disabled = true;
    }

    if (currentColumns > minColumns) {
      removeColumnButton.disabled = false;
    } else {
      removeColumnButton.disabled = true;
    }
  });
});

function changeTable(el) {
  const action = el.classList[0];

  switch (action) {
    case 'append-row':
      addRow();
      break;
    case 'remove-row':
      removeRow();
      break;
    case 'append-column':
      addColumn();
      break;
    case 'remove-column':
      removeColumn();
      break;
  }
}

function addRow() {
  const newRow = document.createElement('tr');
  const columnCount = table.rows[0].cells.length;

  for (let i = 0; i < columnCount; i++) {
    const newColumn = document.createElement('td');

    newRow.appendChild(newColumn);
  }

  table.children[0].appendChild(newRow);
}

function removeRow() {
  const countRows = table.rows.length;
  const lastRow = document.querySelectorAll('tr')[countRows - 1];

  table.children[0].removeChild(lastRow);
}

function addColumn() {
  for (let i = 0; i < table.rows.length; i++) {
    const newCell = document.createElement('td');

    table.rows[i].appendChild(newCell);
  }
}

function removeColumn() {
  const columnCount = table.rows[0].children.length;

  for (let i = 0; i < table.rows.length; i++) {
    const lastCell = table.rows[i].children[columnCount - 1];

    table.rows[i].removeChild(lastCell);
  }
}
