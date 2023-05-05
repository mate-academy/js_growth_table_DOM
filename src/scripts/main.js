'use strict';

const ButtAppendRow = document.querySelector('.append-row');
const ButtRemoveRow = document.querySelector('.remove-row');
const ButtAppendCol = document.querySelector('.append-column');
const ButtRemoveCol = document.querySelector('.remove-column');
const tbody = document.querySelector('.field tbody');

let sumRows = tbody.children.length;
let sumCols = tbody.firstElementChild.children.length;
const maxNumber = 10;
const minNumber = 2;

ButtAppendRow.addEventListener('click', () => {
  if (sumRows < maxNumber) {
    tbody.append(tbody.lastElementChild.cloneNode(true));
    sumRows++;
    ButtRemoveRow.disabled = false;
  }

  if (sumRows === maxNumber) {
    ButtAppendRow.disabled = true;
  }
});

ButtRemoveRow.addEventListener('click', () => {
  if (sumRows > minNumber) {
    tbody.lastElementChild.remove();
    sumRows--;
    ButtAppendRow.disabled = false;
  }

  if (sumRows === minNumber) {
    ButtRemoveRow.disabled = true;
  }
});

ButtAppendCol.addEventListener('click', () => {
  if (sumCols < maxNumber) {
    [...tbody.children].map(tr => {
      return tr.append(tr.lastElementChild.cloneNode(true));
    });
    sumCols++;
    ButtRemoveCol.disabled = false;
  }

  if (sumCols === maxNumber) {
    ButtAppendCol.disabled = true;
  }
});

ButtRemoveCol.addEventListener('click', () => {
  if (sumCols > minNumber) {
    [...tbody.children].map(tr => {
      return tr.lastElementChild.remove();
    });
    sumCols--;
    ButtAppendCol.disabled = false;
  }

  if (sumCols === minNumber) {
    ButtRemoveCol.disabled = true;
  }
});
