'use strict';

const newRow = document.querySelector('.append-row');
const newColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');
const row = document.querySelector('tr');
let numberOfRows = 4;
let numberOfColumns = 4;

const addRow = () => {
  numberOfRows++;

  // const tbody = document.querySelector('tbody');
  // const row = document.querySelector('tr');

  tbody.appendChild(row.cloneNode(true));
  removeRow.disabled = false;

  if (numberOfRows === 10) {
    newRow.disabled = true;
  }
};

newRow.addEventListener('click', addRow);

const substractRow = () => {
  numberOfRows--;
  document.querySelector('tr').remove();
  newRow.disabled = false;

  if (numberOfRows === 2) {
    removeRow.disabled = true;
  }
};

removeRow.addEventListener('click', substractRow);

const addColumn = () => {
  numberOfColumns++;

  const arrayOfRows = Array.from(document.querySelectorAll('tr'));
  //const row = document.querySelector('tr');

  arrayOfRows.forEach(oneRow => {
    oneRow.appendChild(row.firstElementChild.cloneNode(true));
  });
  removeColumn.disabled = false;

  if (numberOfColumns === 10) {
    newColumn.disabled = true;
  }
};

newColumn.addEventListener('click', addColumn);

const substractColumn = () => {
  numberOfColumns--;

  const arrayOfRows = Array.from(document.querySelectorAll('tr'));

  arrayOfRows.forEach(oneRow => {
    oneRow.firstElementChild.remove();
  });
  newColumn.disabled = false;

  if (numberOfColumns === 2) {
    removeColumn.disabled = true;
  }
};

removeColumn.addEventListener('click', substractColumn);
