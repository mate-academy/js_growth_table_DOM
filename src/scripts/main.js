'use strict';

// write code here
const body = document.querySelector('tbody');
const allCells = document.querySelectorAll('tr');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  body.append(body.firstChild.cloneNode(true));

  if (allCells.length >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  body.lastElementChild.remove();

  if (allCells.length <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', () => {
  for (const item of allCells) {
    item.append(allCells[0].lastElementChild.cloneNode(true));
  }

  if (allCells[0].children.length >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  for (const item of allCells) {
    item.lastElementChild.remove();
  }

  if (allCells[0].children.length <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
