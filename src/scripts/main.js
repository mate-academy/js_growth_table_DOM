'use strict';

const minCount = 2;
const maxCount = 10;

const container = document.querySelector('.container');
const table = container.querySelector('table');
const addColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');
const addRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');

container.addEventListener('click', (e) => {
  if (e.target.tagName.toLowerCase() !== 'button') {
    return;
  }

  const buttonClass = e.target.className;

  buttonStrategies[buttonClass]();
});

const buttonStrategies = {
  [addRowButton.className]: addRow,
  [removeRowButton.className]: removeRow,
  [addColumnButton.className]: addColumn,
  [removeColumnButton.className]: removeColumn,
};

function removeColumn() {
  [...table.rows].forEach(element => {
    element.deleteCell(0);
  });
  validateColumnSize();
}

function addColumn() {
  [...table.rows].forEach(element => {
    element.insertCell(0);
  });
  validateColumnSize();
}

function removeRow() {
  table.deleteRow(0);
  validateRowSize();
}

function addRow() {
  table.tBodies[0].append(table.rows[0].cloneNode(true));
  validateRowSize();
}

function validateRowSize() {
  const currentLength = table.rows.length;

  addRowButton.disabled = currentLength === maxCount;
  removeRowButton.disabled = currentLength === minCount;
}

function validateColumnSize() {
  const currentLength = table.rows[0].cells.length;

  addColumnButton.disabled = currentLength === maxCount;
  removeColumnButton.disabled = currentLength === minCount;
}
