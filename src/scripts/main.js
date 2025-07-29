'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field')

const maxColumns = 10;
const maxRows = 10;
const minColumns = 2;
const minRows = 2;

let columnsCounter = 4;
let rowCounter = 4;



function updateControls() {
  appendColumn.disabled = columnsCounter >= maxColumns;
  removeColumn.disabled = columnsCounter <= minColumns;
  appendRow.disabled = rowCounter >= maxRows;
  removeRow.disabled = rowCounter <= minRows;
}

appendColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  rows.forEach((element) => {
    const newColumnt = document.createElement('td');
    element.appendChild(newColumnt);
  });
  columnsCounter++;
  updateControls();
});

removeColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  rows.forEach((element) => {
    if (element.children.length > minColumns) {
      element.removeChild(element.lastChild);
    }
  });
  columnsCounter--;
  updateControls();
});

appendRow.addEventListener('click', () => {
  const originalRow = document.querySelector('tr');
  const newRow = originalRow.cloneNode(true);
  table.appendChild(newRow);
  rowCounter++;
  updateControls();
});

removeRow.addEventListener('click', () => {
  const lastRow = table.querySelector('tr:last-of-type');
  if (lastRow && lastRow.parentNode && rowCounter > minRows) {
    lastRow.parentNode.removeChild(lastRow);
    rowCounter--;
    updateControls();
  }
});

updateControls();
