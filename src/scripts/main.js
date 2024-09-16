'use strict';

const addRowsBtn = document.querySelector('.append-row');
const removeRowsBtn = document.querySelector('.remove-row');
const addColumnsBtn = document.querySelector('.append-column');
const removeColumnsBtn = document.querySelector('.remove-column');

const tbodyRef = document.querySelector('tbody');
let rowsList = document.querySelectorAll('tr');

const maxElements = 10;
const minElements = 2;

let rowsNumber = rowsList.length;
let colsNumber = rowsList[0].children.length;

addRowsBtn.addEventListener('click', () => {
  const row = rowsList[0].cloneNode(true);

  tbodyRef.append(row);
  rowsList = document.querySelectorAll('tr');

  rowsNumber++;

  if (rowsNumber >= maxElements) {
    addRowsBtn.disabled = true;
  }

  if (removeRowsBtn.disabled && rowsNumber > minElements) {
    removeRowsBtn.disabled = false;
  }
});

removeRowsBtn.addEventListener('click', () => {
  tbodyRef.lastElementChild.remove();
  rowsList = document.querySelectorAll('tr');

  rowsNumber--;

  if (rowsNumber <= minElements) {
    removeRowsBtn.disabled = true;
  }

  if (addRowsBtn.disabled && rowsNumber < maxElements) {
    addRowsBtn.disabled = false;
  }
});

addColumnsBtn.addEventListener('click', () => {
  rowsList.forEach((element) => {
    const cell = document.createElement('td');

    element.append(cell);
  });

  colsNumber++;

  if (colsNumber >= maxElements) {
    addColumnsBtn.disabled = true;
  }

  if (removeColumnsBtn.disabled && colsNumber > minElements) {
    removeColumnsBtn.disabled = false;
  }
});

removeColumnsBtn.addEventListener('click', () => {
  rowsList.forEach((element) => {
    element.lastElementChild.remove();
  });

  colsNumber--;

  if (colsNumber <= minElements) {
    removeColumnsBtn.disabled = true;
  }

  if (addColumnsBtn.disabled && colsNumber < maxElements) {
    addColumnsBtn.disabled = false;
  }
});
