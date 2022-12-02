'use strict';

const field = document.querySelector('.field').firstElementChild;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const minRowsNumber = 2;
const maxRowsNumber = 10;
const minColumnsNumber = 2;
const maxColumnsNumber = 10;

addRowButton.addEventListener('click', e => {
  addRow(field);

  if (field.children.length >= maxRowsNumber) {
    e.target.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', e => {
  removeRow(field);

  if (field.children.length <= minRowsNumber) {
    e.target.disabled = true;
  } else {
    addRowButton.disabled = false;
  }
});

addColumnButton.addEventListener('click', e => {
  addColumn(field);

  if (field.children[0].children.length >= maxColumnsNumber) {
    e.target.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', e => {
  removeColumn(field);

  if (field.children[0].children.length <= minColumnsNumber) {
    e.target.disabled = true;
  } else {
    addColumnButton.disabled = false;
  }
});

const createRowElement = (element) => {
  const columnNumber = element.firstElementChild.children.length;
  const newRow = document.createElement('tr');

  for (let i = 1; i <= columnNumber; i++) {
    newRow.append(document.createElement('td'));
  }

  return newRow;
};

const addRow = (element) => {
  element.append(createRowElement(element));
};

const addColumn = (element) => {
  for (const item of element.children) {
    item.append(document.createElement('td'));
  }
};

const removeRow = (element) => {
  element.children[0].remove();
};

const removeColumn = (element) => {
  for (const item of element.children) {
    item.children[0].remove();
  }
};
