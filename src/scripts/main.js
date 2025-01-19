'use strict';

const buttons = [...document.querySelectorAll('.button')];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.createElement('tbody');
const fieldDom = document.querySelector('.field');
const defaultRows = 4;
const defaultColumns = 4;
const field = outerFunc(defaultRows, defaultColumns);

addListeners();
renderField(field.getMatrix());

function addListeners() {
  buttons.forEach((button) => {
    switch (button.classList[0]) {
      case 'append-row':
        button.addEventListener('click', () => field.addRow());
        break;
      case 'remove-row':
        button.addEventListener('click', () => field.deleteRow());
        break;
      case 'append-column':
        button.addEventListener('click', () => field.addCulumn());
        break;
      case 'remove-column':
        button.addEventListener('click', () => field.deleteColumn());
        break;
      default:
        break;
    }
  });
}

function renderField(matrixArg) {
  [...fieldDom.children].forEach((row) => row.remove());
  [...tbody.children].forEach((row) => row.remove());

  fieldDom.appendChild(tbody);

  const rows = field.getRows();
  const columns = field.getColumns();

  if (rows <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (columns <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (rows >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (columns >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  matrixArg.forEach((row) => {
    const tr = document.createElement('tr');

    row.forEach(() => {
      const td = document.createElement('td');

      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
}

function outerFunc(rows, columns) {
  let rowsOuter = rows;
  let columnsOuter = columns;

  function createMatrix(rowstoSet, columnsToSet) {
    return Array.from({ length: rowstoSet }, () => Array(columnsToSet).fill(0));
  }

  return {
    getRows() {
      return rowsOuter;
    },
    getColumns() {
      return columnsOuter;
    },
    addRow() {
      rowsOuter = rowsOuter < 10 ? rowsOuter + 1 : rowsOuter;
      renderField(this.getMatrix());
    },
    deleteRow() {
      rowsOuter = rowsOuter > 2 ? rowsOuter - 1 : rowsOuter;
      renderField(this.getMatrix());
    },
    addCulumn() {
      columnsOuter = columnsOuter < 10 ? columnsOuter + 1 : columnsOuter;
      renderField(this.getMatrix());
    },
    deleteColumn() {
      columnsOuter = columnsOuter > 2 ? columnsOuter - 1 : columnsOuter;
      renderField(this.getMatrix());
    },
    getMatrix() {
      return createMatrix(rowsOuter, columnsOuter);
    },
  };
}
