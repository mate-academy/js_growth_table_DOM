'use strict';

const tableBody = document.querySelector('tbody');
const plusRow = document.querySelector('.append-row');
const minusRow = document.querySelector('.remove-row');
const firstRow = document.querySelector('tr');
const plusColumn = document.querySelector('.append-column');
const minusColumn = document.querySelector('.remove-column');
const max = 10;
const min = 2;

plusColumn.addEventListener('click', () => {
  if (tableBody.children[0].children.length >= max) {
    return;
  }

  if (minusColumn.disabled) {
    minusColumn.disabled = false;
  }

  for (const row of tableBody.children) {
    const newBlock = document.createElement('td');

    row.append(newBlock);
  }

  if (tableBody.children[0].children.length === max) {
    plusColumn.disabled = true;
  }
});

minusColumn.addEventListener('click', () => {
  if (plusColumn.disabled) {
    plusColumn.disabled = false;
  }

  for (const row of tableBody.children) {
    if (row.children.length > min) {
      row.lastElementChild.remove();
    }
  }

  if (tableBody.children[0].children.length === min) {
    minusColumn.disabled = true;
  }
});

plusRow.addEventListener('click', () => {
  if (tableBody.children.length >= max) {
    return;
  }

  if (minusRow.disabled) {
    minusRow.disabled = false;
  }

  const newRow = document.createElement('tr');
  const numberOfBlocksInRow = firstRow.children.length;

  for (let i = 0; i < numberOfBlocksInRow; i++) {
    const newBlock = document.createElement('td');

    newRow.append(newBlock);
  }
  tableBody.append(newRow);

  if (tableBody.children.length === max) {
    plusRow.disabled = true;
  }
});

minusRow.addEventListener('click', () => {
  if (plusRow.disabled) {
    plusRow.disabled = false;
  }

  tableBody.lastElementChild.remove();

  if (tableBody.children.length === min) {
    minusRow.disabled = true;
  }
});
