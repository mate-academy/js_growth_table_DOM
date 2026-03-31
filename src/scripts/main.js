'use strict';

// write code here
const tableContainer = document.querySelector('.container');
const tableItemes = document.querySelector('.field');
const tbodyRowsInner = tableItemes.querySelector('tbody'); // for test

// Buttons
const addRow = document.querySelector('.append-row');
const reRow = document.querySelector('.remove-row');
const addColunm = document.querySelector('.append-column');
const reColunm = document.querySelector('.remove-column');

// EventListener -click
tableContainer.addEventListener('click', (e) => {
  // var columns
  const checkedButton = e.target.closest('.button');

  if (!checkedButton) {
    return;
  }

  const checkedClassName = checkedButton.classList[0];

  // live var
  const ColumnsCount = tbodyRowsInner.rows[0].cells.length;
  const RowsCount = tbodyRowsInner.rows.length;

  // logic switch
  switch (checkedClassName) {
    case 'append-row':
      if (RowsCount < 10) {
        const newRow = document.createElement('tr');

        [...tbodyRowsInner.rows[0].cells].forEach((td) => {
          newRow.append(document.createElement('td'));
        });

        tbodyRowsInner.append(newRow);
      }

      break;

    case 'remove-row':
      if (RowsCount >= 2) {
        tbodyRowsInner.lastElementChild.remove();
      }
      break;

    case 'append-column':
      if (ColumnsCount < 10) {
        [...tbodyRowsInner.rows].forEach((tr) => {
          const cell = document.createElement('td');

          tr.append(cell);
        });
      }

      break;

    case 'remove-column':
      if (ColumnsCount >= 2) {
        [...tbodyRowsInner.rows].forEach((tr) => {
          tr.lastElementChild.remove();
        });
      }

      break;
  }

  const finalColumnsCount = tbodyRowsInner.rows[0].cells.length;
  const finalRowsCount = tbodyRowsInner.rows.length;

  addColunm.disabled = finalColumnsCount > 9;
  reColunm.disabled = finalColumnsCount < 3;
  addRow.disabled = finalRowsCount > 9;
  reRow.disabled = finalRowsCount < 3;
});
