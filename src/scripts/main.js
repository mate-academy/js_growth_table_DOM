'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const bodyTable = document.querySelector('tbody');

const min = 2;
const max = 10;

addRow.addEventListener('click', () => {
  if (bodyTable.children.length <= max) {
    const clone = bodyTable.lastElementChild.cloneNode(true);

    bodyTable.appendChild(clone);
  }

  if (bodyTable.children.length === max) {
    addRow.disabled = true;
  }

  if (bodyTable.children.length > min) {
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
    const size = bodyTable.children[0].children.length;

    removeColumn.disabled = false;

    if (size === max) {
      addColumn.disabled = true;
    }

    if (size <= max) {
      bodyTable.children[i].appendChild(clone);
    }
  }
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < bodyTable.children.length; i++) {
    addColumn.disabled = false;

    const size = bodyTable.children[0].children.length;

    if (size === min) {
      removeColumn.disabled = true;
    }

    if (size >= min) {
      bodyTable.children[i].removeChild(bodyTable.children[i].lastElementChild);
    }
  }
});
