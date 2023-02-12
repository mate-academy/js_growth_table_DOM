'use strict';

const table = document.querySelector('table').tBodies[0];
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const minLimit = 2;
const maxLimit = 10;

addRow.addEventListener('click', e => {
  const amountRows = table.children.length;
  const amountCellsInRow = table.children[0].children.length;
  const newRow = document.createElement('tr');

  if (amountRows < maxLimit) {
    for (let i = 0; i < amountCellsInRow; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    removeRow.removeAttribute('disabled');
    table.append(newRow);
  } else {
    addRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', e => {
  const amountRows = table.children.length;

  if (amountRows > minLimit) {
    const lastRow = table.lastElementChild;

    addRow.removeAttribute('disabled');
    lastRow.remove();
  } else {
    removeRow.setAttribute('disabled', true);
  }
});

addColumn.addEventListener('click', e => {
  const amountRows = table.children.length;
  const amountCellsInRow = table.children[0].children.length;

  if (amountCellsInRow < maxLimit) {
    for (let i = 0; i < amountRows; i++) {
      const newCell = document.createElement('td');
      const currentRow = table.children[i];

      currentRow.append(newCell);
    }

    removeColumn.removeAttribute('disabled');
  } else {
    addColumn.setAttribute('disabled', true);
  }
});

removeColumn.addEventListener('click', e => {
  const amountRows = table.children.length;
  const amountCellsInRow = table.children[0].children.length;

  if (amountCellsInRow > minLimit) {
    for (let i = 0; i < amountRows; i++) {
      const lastCell = table.children[i].lastElementChild;

      lastCell.remove();
    }

    addColumn.removeAttribute('disabled');
  } else {
    removeColumn.setAttribute('disabled', true);
  }
});
