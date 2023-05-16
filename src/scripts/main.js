'use strict';

const buttonPlusRow = document.querySelector('.append-row');
const buttonDelRow = document.querySelector('.remove-row');
const buttonPlusCol = document.querySelector('.append-column');
const buttonDelCol = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');

const f = () => {
  if (tableBody.children.length <= 3) {
    buttonDelRow.removeAttribute('disabled');
  }

  const row = tableBody.children[0];
  const newRaw = document.createElement('tr');

  for (let i = 0; i < row.children.length; i++) {
    const cell = document.createElement('td');

    newRaw.append(cell);
  }

  tableBody.append(newRaw);

  if (tableBody.children.length >= 10) {
    buttonPlusRow.setAttribute('disabled', true);
  }
};

buttonPlusRow.addEventListener('click', f);

buttonDelRow.addEventListener('click', () => {
  if (tableBody.children.length <= 11) {
    buttonPlusRow.removeAttribute('disabled');
  }

  if (tableBody.children.length <= 3) {
    buttonDelRow.setAttribute('disabled', true);
  }

  tableBody.lastElementChild.remove();
});

const tr = document.querySelector('tr');

const f1 = () => {
  if (tr.children.length <= 3) {
    buttonDelCol.removeAttribute('disabled');
  }

  const tBodyChildren = [...tableBody.children];

  for (const child of tBodyChildren) {
    const newCell = document.createElement('td');

    child.append(newCell);
  }

  if (tr.children.length >= 10) {
    buttonPlusCol.setAttribute('disabled', true);
  }
};

buttonPlusCol.addEventListener('click', f1);

buttonDelCol.addEventListener('click', () => {
  if (tr.children.length <= 11) {
    buttonPlusCol.removeAttribute('disabled');
  }

  if (tr.children.length <= 3) {
    buttonDelCol.setAttribute('disabled', true);
  }

  const tBodyChildren = [...tableBody.children];

  for (const child of tBodyChildren) {
    child.lastElementChild.remove();
  }
});
