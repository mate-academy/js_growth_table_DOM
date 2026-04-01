'use strict';

// write code here
const tableContainer = document.querySelector('.container');
const tableItemes = document.querySelector('.field');
const tbodyRowsInner = tableItemes.querySelector('tbody');

// Buttons
const addRow = document.querySelector('.append-row');
const reRow = document.querySelector('.remove-row');
const addColunm = document.querySelector('.append-column');
const reColunm = document.querySelector('.remove-column');

// sensor
const getColsCount = () => {
  return tbodyRowsInner.rows[0].cells.length;
};
// sensor
const getRowsCount = () => {
  return tbodyRowsInner.rows.length;
};

function updateButton() {
  addColunm.disabled = getColsCount() > 9;
  reColunm.disabled = getColsCount() < 3;
  addRow.disabled = getRowsCount() > 9;
  reRow.disabled = getRowsCount() < 3;
}

updateButton();

// EventListener -click
tableContainer.addEventListener('click', (e) => {
  // var columns
  const checkedButton = e.target.closest('.button');

  if (!checkedButton) {
    return;
  }

  const checkedClassName = checkedButton.classList[0];

  // logic switch
  switch (checkedClassName) {
    case 'append-row':
      if (getRowsCount() < 10) {
        const newRow = document.createElement('tr');

        [...tbodyRowsInner.rows[0].cells].forEach((td) => {
          newRow.append(document.createElement('td'));
        });

        tbodyRowsInner.append(newRow);
      }

      break;

    case 'remove-row':
      if (getRowsCount() > 2) {
        tbodyRowsInner.lastElementChild.remove();
      }
      break;

    case 'append-column':
      if (getColsCount() < 10) {
        [...tbodyRowsInner.rows].forEach((tr) => {
          const cell = document.createElement('td');

          tr.append(cell);
        });
      }

      break;

    case 'remove-column':
      if (getColsCount() > 2) {
        [...tbodyRowsInner.rows].forEach((tr) => {
          tr.lastElementChild.remove();
        });
      }

      break;
  }

  updateButton();
});
