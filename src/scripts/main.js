'use strict';

// write code here
const table = document.querySelector('.field tbody');
const MAX = 10;
const MIN = 2;

document.querySelector('.append-row').addEventListener('click', (e) => {
  const colSize = document.querySelector('.field tr').children.length;
  const rowSize = document.querySelector('.field tbody').children.length;

  if (rowSize >= MAX) {
    return;
  }

  const row = document.createElement('tr');

  for (let i = 0; i < colSize; i++) {
    const element = document.createElement('td');

    row.append(element);
  }

  table.append(row);

  if (rowSize + 1 === MAX) {
    e.target.disabled = true;
  }

  if (rowSize + 1 > MIN) {
    document.querySelector('.remove-row').disabled = false;
  }
});

document.querySelector('.remove-row').addEventListener('click', (e) => {
  const rowSize = document.querySelector('.field tbody').children.length;

  if (rowSize <= MIN) {
    return;
  }

  table.lastElementChild.remove();

  if (rowSize - 1 === MIN) {
    e.target.disabled = true;
  }

  if (rowSize - 1 < MAX) {
    document.querySelector('.append-row').disabled = false;
  }
});

document.querySelector('.append-column').addEventListener('click', (e) => {
  const colSize = document.querySelector('.field tr').children.length;

  if (colSize >= MAX) {
    return;
  }

  const columns = document.querySelector('.field tbody').children;

  [...columns].forEach((column) => {
    const element = document.createElement('td');

    column.append(element);
  });

  if (colSize + 1 === MAX) {
    e.target.disabled = true;
  }

  if (colSize + 1 > MIN) {
    document.querySelector('.remove-column').disabled = false;
  }
});

document.querySelector('.remove-column').addEventListener('click', (e) => {
  const colSize = document.querySelector('.field tr').children.length;

  if (colSize <= MIN) {
    return;
  }

  const columns = document.querySelector('.field tbody').children;

  [...columns].forEach((column) => {
    column.lastElementChild.remove();
  });

  if (colSize - 1 === MIN) {
    e.target.disabled = true;
  }

  if (colSize - 1 < MAX) {
    document.querySelector('.append-column').disabled = false;
  }
});
