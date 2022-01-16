'use strict';

// section with all variables
const container = document.querySelector('.container');
const tBody = document.querySelector('tbody');
const buttonAddRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAddColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');
const minNumOfRowsAndColLimit = 2;
const maxNumOfRowsAndColLimit = 9;

const rows = tBody.rows[0];

container.addEventListener('click', function tableSizeManipulation(action) {
  const target = action.target;

  let numberOfRows = tBody.rows.length;
  let numberOfColumns = tBody.rows[0].children.length;

  // append rows
  if (target.textContent === '+'
    && target.classList.contains('append-row')) {
    tBody.prepend(rows.cloneNode(true));
    numberOfRows++;
  }

  if (numberOfRows > maxNumOfRowsAndColLimit) {
    buttonAddRow.disabled = true;
  }

  // remove rows
  if (target.textContent === '-'
    && target.classList.contains('remove-row')) {
    tBody.deleteRow(0);
    numberOfRows--;
  }

  if (numberOfRows < maxNumOfRowsAndColLimit) {
    buttonAddRow.disabled = false;
  }

  if (numberOfRows <= minNumOfRowsAndColLimit) {
    buttonRemoveRow.disabled = true;
  }

  if (numberOfRows > minNumOfRowsAndColLimit) {
    buttonRemoveRow.disabled = false;
  }

  // append columns
  if (target.textContent === '+'
    && target.classList.contains('append-column')) {
    for (let i = 0; i < tBody.rows.length; i++) {
      const copy = tBody.rows[i].cells[0].cloneNode(true);

      tBody.rows[i].lastElementChild.before(copy);
    }

    numberOfColumns++;
  }

  if (numberOfColumns > maxNumOfRowsAndColLimit) {
    buttonAddColumn.disabled = true;
  }

  // remove columns
  if (target.textContent === '-'
    && target.classList.contains('remove-column')) {
    for (let i = 0; i < tBody.rows.length; i++) {
      const column = tBody.rows[i].cells[0].cloneNode(true);

      tBody.rows[i].cells[0].remove(column);
    }

    numberOfColumns--;
  }

  if (numberOfColumns <= maxNumOfRowsAndColLimit) {
    buttonAddColumn.disabled = false;
  }

  if (numberOfColumns <= minNumOfRowsAndColLimit) {
    buttonRemoveColumn.disabled = true;
  }

  if (numberOfColumns > minNumOfRowsAndColLimit) {
    buttonRemoveColumn.disabled = false;
  }
});
