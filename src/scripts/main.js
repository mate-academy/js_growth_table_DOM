'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const bodyTable = document.querySelector('tbody');

const min = 2;
const max = 10;
const size = bodyTable.children.length;
let sizeColumn = bodyTable.children[0].children.length;

addRow.addEventListener('click', () => {
  if (size <= max) {
    const clone = bodyTable.lastElementChild.cloneNode(true);

    bodyTable.appendChild(clone);
  }

  if (size === max) {
    addRow.disabled = true;
  }

  if (size > min) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  addRow.disabled = false;

  if (bodyTable.children.length >= min) {
    bodyTable.removeChild(bodyTable.lastElementChild);
  }

  if (bodyTable.children.length === min) {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  for (let i = 0; i < bodyTable.children.length; i++) {
    const clone = bodyTable.children[i].lastElementChild.cloneNode();

    sizeColumn = bodyTable.children[0].children.length;

    removeColumn.disabled = false;

    if (sizeColumn === max) {
      addColumn.disabled = true;
    }

    if (sizeColumn <= max) {
      bodyTable.children[i].appendChild(clone);
    }
  }
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < bodyTable.children.length; i++) {
    addColumn.disabled = false;
    sizeColumn = bodyTable.children[0].children.length;

    if (sizeColumn === min) {
      removeColumn.disabled = true;
    }

    if (sizeColumn >= min) {
      bodyTable.children[i].removeChild(bodyTable.children[i].lastElementChild);
    }
  }
});
