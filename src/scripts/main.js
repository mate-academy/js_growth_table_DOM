'use strict';

const field =
  document.querySelector('.field tbody') || document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');

let currentCols = document.querySelector('tr').children.length;
let currentRows = document.querySelectorAll('tr').length;
const min = 2;
const max = 10;

function updateButtons() {
  appendRow.disabled = currentRows >= max;
  appendCol.disabled = currentCols >= max;

  removeRow.disabled = currentRows <= min;
  removeCol.disabled = currentCols <= min;
}

appendRow.addEventListener('click', () => {
  if (currentRows < max) {
    const tr = document.createElement('tr');

    for (let i = 0; i < currentCols; i++) {
      tr.appendChild(document.createElement('td'));
    }
    field.appendChild(tr);
    currentRows++;
    updateButtons();
  }
});

appendCol.addEventListener('click', () => {
  if (currentCols < max) {
    document.querySelectorAll('tr').forEach((tr) => {
      tr.appendChild(document.createElement('td'));
    });

    currentCols++;
    updateButtons();
  }
});

removeRow.addEventListener('click', () => {
  if (currentRows > min) {
    field.lastElementChild.remove();
    currentRows--;
    updateButtons();
  }
});

removeCol.addEventListener('click', () => {
  if (currentCols > min) {
    document.querySelectorAll('tr').forEach((tr) => {
      tr.lastElementChild.remove();
    });
    currentCols--;
    updateButtons();
  }
});

updateButtons();
