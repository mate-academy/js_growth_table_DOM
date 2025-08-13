'use strict';

const addColumnButton = document.querySelector('.append-column');
const addRowButton = document.querySelector('.append-row');
const deleteColumnButton = document.querySelector('.remove-column');
const deleteRowButton = document.querySelector('.remove-row');

const getRowQuantity = () => document.querySelectorAll('tbody tr').length;
const getColumnQuantity = () => document.querySelector('tr').children.length;

function updateButtonsState() {
  const rowQuantity = getRowQuantity();
  const columnQuantity = getColumnQuantity();

  addRowButton.disabled = rowQuantity >= 10;
  deleteRowButton.disabled = rowQuantity <= 2;

  addColumnButton.disabled = columnQuantity >= 10;
  deleteColumnButton.disabled = columnQuantity <= 2;
}

addColumnButton.addEventListener('click', () => {
  if (getColumnQuantity() < 10) {
    const allRows = document.querySelectorAll('tr');

    allRows.forEach((row) => {
      row.appendChild(document.createElement('td'));
    });
  }
  updateButtonsState();
});

addRowButton.addEventListener('click', () => {
  if (getRowQuantity() < 10) {
    const cloneRow = document.createElement('tr');

    for (let i = 0; i < getColumnQuantity(); i++) {
      cloneRow.appendChild(document.createElement('td'));
    }

    document.querySelector('tbody').appendChild(cloneRow);
  }
  updateButtonsState();
});

deleteRowButton.addEventListener('click', () => {
  if (getRowQuantity() > 2) {
    document.querySelector('tbody').lastElementChild.remove();
  }
  updateButtonsState();
});

deleteColumnButton.addEventListener('click', () => {
  if (getColumnQuantity() > 2) {
    const allRows = document.querySelectorAll('tr');

    allRows.forEach((row) => {
      row.lastElementChild.remove();
    });
  }
  updateButtonsState();
});

updateButtonsState();
