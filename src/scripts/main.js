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

  switch (target) {
    case buttonAddRow:
      tBody.prepend(rows.cloneNode(true));
      numberOfRows++;

      break;

    case buttonRemoveRow:
      tBody.deleteRow(0);
      numberOfRows--;

      break;

    case buttonAddColumn:
      for (let i = 0; i < tBody.rows.length; i++) {
        const copy = tBody.rows[i].cells[0].cloneNode(true);

        tBody.rows[i].lastElementChild.before(copy);
      }

      numberOfColumns++;

      break;

    case buttonRemoveColumn:
      for (let i = 0; i < tBody.rows.length; i++) {
        const column = tBody.rows[i].cells[0].cloneNode(true);

        tBody.rows[i].cells[0].remove(column);
      }

      numberOfColumns--;

      break;
  }

  buttonAddRow.disabled = numberOfRows > maxNumOfRowsAndColLimit;

  buttonRemoveRow.disabled = numberOfRows <= minNumOfRowsAndColLimit;

  buttonAddColumn.disabled = numberOfColumns > maxNumOfRowsAndColLimit;

  buttonRemoveColumn.disabled = numberOfColumns <= minNumOfRowsAndColLimit;
});
