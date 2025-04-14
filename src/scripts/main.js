'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;

const actions = {
  append: 'append',
  delete: 'delete',
};

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

let rowCount = table.rows.length;
let colCount = table.rows[0].cells.length;

const updateButtonState = () => {
  appendRowBtn.disabled = rowCount >= MAX_SIZE;
  removeRowBtn.disabled = rowCount <= MIN_SIZE;

  appendColBtn.disabled = colCount >= MAX_SIZE;
  removeColBtn.disabled = colCount <= MIN_SIZE;
};

const handleRowChange = (action) => {
  switch (action) {
    case actions.append:
      if (colCount < MAX_SIZE) {
        const newRow = table.insertRow();

        for (let i = 0; i < colCount; i++) {
          newRow.insertCell();
        }

        rowCount++;
      }
      break;

    case actions.delete:
      if (rowCount > MIN_SIZE) {
        table.deleteRow(-1);
        rowCount--;
      }
      break;
  }

  updateButtonState();
};

const handleColChange = (action) => {
  switch (action) {
    case actions.append:
      if (colCount < MAX_SIZE) {
        for (let i = 0; i < rowCount; i++) {
          table.rows[i].insertCell();
        }

        colCount++;
      }
      break;

    case actions.delete:
      if (colCount > MIN_SIZE) {
        for (let i = 0; i < rowCount; i++) {
          table.rows[i].deleteCell(-1);
        }

        colCount--;
      }
      break;
  }

  updateButtonState();
};

appendRowBtn.addEventListener('click', () => handleRowChange(actions.append));
removeRowBtn.addEventListener('click', () => handleRowChange(actions.delete));
appendColBtn.addEventListener('click', () => handleColChange(actions.append));
removeColBtn.addEventListener('click', () => handleColChange(actions.delete));
