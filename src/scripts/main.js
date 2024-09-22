'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const resetBtn = document.querySelector('.reset');

const table = document.querySelector('tbody');

const minLim = 2;
const maxLim = 10;

let currRows = 4;
let currCols = 4;

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;

  if (currRows < maxLim) {
    const newTr = document.createElement('tr');

    newTr.innerHTML = document.querySelector('tr').innerHTML;
    table.appendChild(newTr);

    currRows++;
  }

  if (currRows === maxLim) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  appendRow.disabled = false;

  if (currRows > 2) {
    table.removeChild(document.querySelector('tr'));
    currRows--;
  }

  if (currRows === minLim) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;

  if (currCols < maxLim) {
    document.querySelectorAll('tr').forEach((each) => {
      each.append(document.createElement('td'));
    });
    currCols++;
  }

  if (currCols === maxLim) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  if (currCols > minLim) {
    document.querySelectorAll('tr').forEach((each) => {
      each.removeChild(each.querySelector('td'));
    });
    currCols--;
  }

  if (currCols === minLim) {
    removeColumn.disabled = true;
  }
});

resetBtn.addEventListener('click', () => {
  document.location.reload(true);
});
