'use strict';

const addRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const deleteColumnButton = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');

const addRow = () => {
  if (tableBody.children.length <= 3) {
    deleteRowButton.removeAttribute('disabled');
  }

  const row = tableBody.children[0];
  const newRaw = document.createElement('tr');

  for (let i = 0; i < row.children.length; i++) {
    const cell = document.createElement('td');

    newRaw.append(cell);
  }

  tableBody.append(newRaw);

  if (tableBody.children.length >= 10) {
    addRowButton.setAttribute('disabled', true);
  }
};

addRowButton.addEventListener('click', addRow);

deleteRowButton.addEventListener('click', () => {
  if (tableBody.children.length <= 11) {
    addRowButton.removeAttribute('disabled');
  }

  if (tableBody.children.length <= 3) {
    deleteRowButton.setAttribute('disabled', true);
  }

  tableBody.lastElementChild.remove();
});

const tr = document.querySelector('tr');

const addColumn = () => {
  if (tr.children.length <= 3) {
    deleteColumnButton.removeAttribute('disabled');
  }

  const tBodyChildren = [...tableBody.children];

  for (const child of tBodyChildren) {
    const newCell = document.createElement('td');

    child.append(newCell);
  }

  if (tr.children.length >= 10) {
    addColumnButton.setAttribute('disabled', true);
  }
};

addColumnButton.addEventListener('click', addColumn);

deleteColumnButton.addEventListener('click', () => {
  if (tr.children.length <= 11) {
    addColumnButton.removeAttribute('disabled');
  }

  if (tr.children.length <= 3) {
    deleteColumnButton.setAttribute('disabled', true);
  }

  const tBodyChildren = [...tableBody.children];

  for (const child of tBodyChildren) {
    child.lastElementChild.remove();
  }
});
