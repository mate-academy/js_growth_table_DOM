'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const bodyTable = document.querySelector('tbody');

addRow.addEventListener('click', () => {
  if (bodyTable.children.length <= 10) {
    const clone = bodyTable.lastElementChild.cloneNode(true);

    bodyTable.appendChild(clone);
  }

  if (bodyTable.children.length === 10) {
    addRow.disabled = true;
  }

  if (bodyTable.children.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  addRow.disabled = false;

  if (bodyTable.children.length >= 2) {
    bodyTable.removeChild(bodyTable.lastElementChild);
  }

  if (bodyTable.children.length === 2) {
    removeRow.disabled = true;
  }
});

addColumn.addEventListener('click', () => {
  for (let i = 0; i < bodyTable.children.length; i++) {
    const clone = bodyTable.children[i].lastElementChild.cloneNode();

    removeColumn.disabled = false;

    if (bodyTable.children[0].children.length === 10) {
      addColumn.disabled = true;
    }

    if (bodyTable.children[0].children.length <= 10) {
      bodyTable.children[i].appendChild(clone);
    }
  }
});

removeColumn.addEventListener('click', () => {
  for (let i = 0; i < bodyTable.children.length; i++) {
    addColumn.disabled = false;

    if (bodyTable.children[0].children.length === 2) {
      removeColumn.disabled = true;
    }

    if (bodyTable.children[0].children.length >= 2) {
      bodyTable.children[i].removeChild(bodyTable.children[i].lastElementChild);
    }
  }
});
