'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.field');
  const addRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const addColButton = document.querySelector('.append-column');
  const removeColButton = document.querySelector('.remove-column');

  let colCount = table.rows[0].cells.length;
  let rowCount = table.rows.length;

  const minCount = 2;
  const maxCount = 10;

  function changeButtons() {
    addColButton.disabled = colCount >= maxCount;
    addRowButton.disabled = rowCount >= maxCount;
    removeColButton.disabled = colCount <= minCount;
    removeRowButton.disabled = rowCount <= minCount;
  }

  function addRow() {
    if (rowCount < maxCount) {
      const newRow = table.insertRow();

      for (let i = 0; i < colCount; i++) {
        newRow.insertCell();
      }
      rowCount++;
      changeButtons();
    }
  }

  function removeRow() {
    if (rowCount > minCount) {
      table.deleteRow(-1);
      rowCount--;
      changeButtons();
    }
  }

  function addColumn() {
    if (colCount < maxCount) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].insertCell();
      }
      colCount++;
      changeButtons();
    }
  }

  function removeColumn() {
    if (colCount > minCount) {
      for (let i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(-1);
      }
      colCount--;
      changeButtons();
    }
  }

  addRowButton.addEventListener('click', addRow);
  removeRowButton.addEventListener('click', removeRow);
  addColButton.addEventListener('click', addColumn);
  removeColButton.addEventListener('click', removeColumn);

  changeButtons();
});
