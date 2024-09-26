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
  const currentLength = table.rows[0].cells.length;

  if (currentLength > minCount) {
    [...table.rows].forEach(element => {
      element.deleteCell(0);
    });
    removeColumnButton.disabled = table.rows[0].cells.length === minCount;
    addColumnButton.disabled = false;
  }
}

function addColumn() {
  const currentLength = table.rows[0].cells.length;

  if (currentLength < maxCount) {
    [...table.rows].forEach(element => {
      element.insertCell(0);
    });
    addColumnButton.disabled = table.rows[0].cells.length === maxCount;
    removeColumnButton.disabled = false;
  }
}

function removeRow() {
  const currentLength = table.rows.length;

  if (currentLength > minCount) {
    table.deleteRow(0);
    removeRowButton.disabled = table.rows.length === minCount;
    addRowButton.disabled = false;
  }
}

function addRow() {
  const currentLength = table.rows.length;

  if (currentLength < maxCount) {
    table.tBodies[0].append(table.rows[0].cloneNode(true));
    addRowButton.disabled = table.rows.length === maxCount;
    removeRowButton.disabled = false;
  }
}
