'use strict';

const addColButton = document.querySelector('.append-column');
const addRowButton = document.querySelector('.append-row');
const remColButton = document.querySelector('.remove-column');
const remRowButton = document.querySelector('.remove-row');

function updateButtons() {
  addColButton.disabled = colNum >= 10;
  remColButton.disabled = colNum <= 2;
  addRowButton.disabled = rowNum >= 10;
  remRowButton.disabled = rowNum <= 2;
}

const field = document.querySelector('.field');

let colNum = 4;
let rowNum = 4;

addColButton.addEventListener('click', (ev) => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((col) => {
    const td = document.createElement('td');

    col.appendChild(td);
  });

  colNum++;
  updateButtons();
});

remColButton.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  rows.forEach((row) => {
    const lastTd = row.lastElementChild;

    if (lastTd) {
      row.removeChild(lastTd);
    }
  });

  colNum--;
  updateButtons();
});

addRowButton.addEventListener('click', (ev) => {
  const tr = document.createElement('tr');
  const tds = document.querySelector('tr').querySelectorAll('td');

  tds.forEach(() => {
    const td = document.createElement('td');

    tr.appendChild(td);
  });
  field.appendChild(tr);

  rowNum++;
  updateButtons();
});

remRowButton.addEventListener('click', () => {
  const tbody = field.querySelector('tbody') || field;
  const lastTr = tbody.querySelector('tr:last-child');

  if (lastTr) {
    tbody.removeChild(lastTr);
  }

  rowNum--;
  updateButtons();
});
