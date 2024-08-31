'use strict';

const buttons = {
  addRow: document.querySelector('.append-row'),

  removeRow: document.querySelector('.remove-row'),

  addColumn: document.querySelector('.append-column'),

  removeColumn: document.querySelector('.remove-column'),
};

const table = document.querySelector('table tbody');
const field = document.querySelector('.field tbody').children;

buttons.addRow.addEventListener('click', () => {
  const amountOfRows = field.length;

  if (amountOfRows === 2) {
    buttons.removeRow.disabled = false;
  }

  if (amountOfRows === 9) {
    buttons.addRow.disabled = true;
  }

  const countOfColumn = field[0].children.length;

  const newRow = document.createElement('tr');

  for (let i = 0; i < countOfColumn; i++) {
    const newBox = document.createElement('td');

    newRow.appendChild(newBox);
  }

  table.appendChild(newRow);
});

buttons.removeRow.addEventListener('click', () => {
  const rowsWIthoutLasrElement = Array.from(field).slice(0, -1);
  const amountOfRows = field.length;

  if (amountOfRows === 3) {
    buttons.removeRow.disabled = true;
  }

  if (amountOfRows === 10) {
    buttons.addRow.disabled = false;
  }

  table.innerHTML = '';

  rowsWIthoutLasrElement.forEach((row) => {
    table.appendChild(row);
  });
});

buttons.addColumn.addEventListener('click', () => {
  const amountOfColums = field[0].children.length;

  if (amountOfColums === 9) {
    buttons.addColumn.disabled = true;
  }

  if (amountOfColums === 2) {
    buttons.removeColumn.disabled = false;
  }

  Array.from(field).forEach((row) => {
    const box = document.createElement('td');

    row.appendChild(box);
  });
});

buttons.removeColumn.addEventListener('click', () => {
  const amountOfColums = field[0].children.length;
  const amountOfColumsBoxs = field[0].children.length - 1;

  if (amountOfColums === 10) {
    buttons.addColumn.disabled = false;
  }

  if (amountOfColums === 3) {
    buttons.removeColumn.disabled = true;
  }

  Array.from(field).forEach((row) => {
    row.innerHTML = '';

    for (let i = 0; i < amountOfColumsBoxs; i++) {
      const box = document.createElement('td');

      row.appendChild(box);
    }
  });
});
