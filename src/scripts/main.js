'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColButton = document.querySelector('.append-column');
const removeColButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const minCount = 2;
const maxCount = 10;
let currentRowCount = table.rows.length;
let currentColCount = table.rows[0].cells.length;

appendRowButton.addEventListener('click', () => {
  if (currentRowCount < maxCount) {
    const row = document.createElement('tr');

    for (let i = 0; i < currentColCount; i++) {
      row.insertCell();
    }

    table.append(row);
    currentRowCount++;

    if (currentRowCount === maxCount) {
      appendRowButton.disabled = true;
    }

    removeRowButton.disabled = false;
  };
});

removeRowButton.addEventListener('click', () => {
  if (currentRowCount > minCount) {
    table.deleteRow(-1);

    currentRowCount--;

    if (currentRowCount === minCount) {
      removeRowButton.disabled = true;
    }

    appendRowButton.disabled = false;
  };
});

appendColButton.addEventListener('click', () => {
  if (currentColCount < maxCount) {
    for (let i = 0; i < currentRowCount; i++) {
      table.rows[i].insertCell();
    }

    currentColCount++;

    if (currentColCount === maxCount) {
      appendColButton.disabled = true;
    }

    removeColButton.disabled = false;
  };
});

removeColButton.addEventListener('click', () => {
  if (currentColCount > minCount) {
    for (let i = 0; i < currentRowCount; i++) {
      table.rows[i].deleteCell(-1);
    }

    currentColCount--;

    if (currentColCount === minCount) {
      removeColButton.disabled = true;
    }

    appendColButton.disabled = false;
  };
});
