'use strict';

const table = document.querySelector('.field');

let rowCount = document.querySelectorAll('table tr').length;
let columnCount = document.querySelectorAll('table td').length / rowCount;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function isAddDisabled(number) {
  return number >= 10;
}

function isRemoveDisabled(number) {
  return number <= 2;
}

const appendRow = () => {
  rowCount++;

  const tr = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  table.appendChild(tr);
  updateButtons();
};

const removeRow = () => {
  rowCount--;
  table.lastElementChild.remove();
  updateButtons();
};

const appendColumn = () => {
  columnCount++;

  const rows = document.querySelectorAll('table tr');

  rows.forEach((row) => {
    const column = document.createElement('td');

    row.appendChild(column);
  });
  updateButtons();
};

const removeColumn = () => {
  columnCount--;

  const rows = document.querySelectorAll('table tr');

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });
  updateButtons();
};

function updateButtons() {
  addRowButton.disabled = isAddDisabled(rowCount);
  removeRowButton.disabled = isRemoveDisabled(rowCount);
  addColumnButton.disabled = isAddDisabled(columnCount);
  removeColumnButton.disabled = isRemoveDisabled(columnCount);
}

addRowButton.addEventListener('click', appendRow);

removeRowButton.addEventListener('click', removeRow);

addColumnButton.addEventListener('click', appendColumn);

removeColumnButton.addEventListener('click', removeColumn);

updateButtons();
