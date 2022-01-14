'use strict';

const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');

const appendRow = () => {
  const rowCount = table.children.length;

  if (rowCount < 10) {
    const cloneRow = table.firstElementChild.cloneNode(true);

    table.append(cloneRow);
  }

  if (rowCount >= 10) {
    addRow.disabled = true;
  } else {
    remRow.disabled = null;
  }
};

const deleteRow = () => {
  const rowCount = table.children.length;

  if (rowCount > 2) {
    table.lastElementChild.remove();
  }

  if (rowCount <= 2) {
    remRow.disabled = true;
  } else {
    addRow.disabled = null;
  }
};

const appendCol = () => {
  const colCount = table.firstElementChild.children.length;
  const rowCount = table.children.length;

  if (colCount < 10) {
    for (let i = 0; i < rowCount; i++) {
      const cell = document.createElement('td');

      table.children[i].append(cell);
    }
  }

  if (colCount >= 10) {
    addCol.disabled = true;
  } else {
    remCol.disabled = null;
  }
};

const deleteCol = () => {
  const colCount = table.firstElementChild.children.length;
  const rowCount = table.children.length;

  if (colCount > 2) {
    for (let i = 0; i < rowCount; i++) {
      table.children[i].lastElementChild.remove();
    }
  }

  if (colCount <= 2) {
    remCol.disabled = true;
  } else {
    addCol.disabled = null;
  }
};

addRow.addEventListener('click', appendRow);
remRow.addEventListener('click', deleteRow);
addCol.addEventListener('click', appendCol);
remCol.addEventListener('click', deleteCol);
