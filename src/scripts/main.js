'use strict';

const table = document.querySelector('.field').querySelector('TBODY');
const addRowButton = document.querySelector('.append-row');
const delRowButton = document.querySelector('.remove-row');
const addColButton = document.querySelector('.append-column');
const delColButton = document.querySelector('.remove-column');

// ######################################################################

const checkCols = () => {
  if (table.children[0].children.length === 10) {
    addColButton.disabled = true;
  }

  if (table.children[0].children.length === 9) {
    addColButton.disabled = false;
  }

  if (table.children[0].children.length === 2) {
    delColButton.disabled = true;
  }

  if (table.children[0].children.length === 3) {
    delColButton.disabled = false;
  }
};

const checkRows = () => {
  if (table.children.length === 10) {
    addRowButton.disabled = true;
  }

  if (table.children.length === 9) {
    addRowButton.disabled = false;
  }

  if (table.children.length === 2) {
    delRowButton.disabled = true;
  }

  if (table.children.length === 3) {
    delRowButton.disabled = false;
  }
};

// ############################################################################

const addColumns = () => {
  [...table.children].forEach((row) => {
    row.appendChild(row.lastElementChild.cloneNode(true));
  });
  checkCols();
};

const delColumns = () => {
  [...table.children].forEach((row) => {
    row.lastElementChild.remove();
  });
  checkCols();
};

const addRows = () => {
  table.lastElementChild.insertAdjacentElement(
    'afterend',
    table.lastElementChild.cloneNode(true)
  );
  checkRows();
};

const delRows = () => {
  table.lastElementChild.remove();
  checkRows();
};

// ############################################################################

addColButton.addEventListener('click', addColumns);
delColButton.addEventListener('click', delColumns);
addRowButton.addEventListener('click', addRows);
delRowButton.addEventListener('click', delRows);
