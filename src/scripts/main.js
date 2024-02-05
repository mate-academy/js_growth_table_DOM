'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxCells = 10;
const minCells = 2;
const tBody = document.querySelector('tbody');
const td = document.querySelector('td');
const tr = document.querySelector('tr');

appendRow.addEventListener('click', () => {
  removeRow.removeAttribute('disabled');
  tBody.append(tr.cloneNode(true));

  if ([...tBody.children].length >= maxCells) {
    appendRow.setAttribute('disabled', true);
  };
});

removeRow.addEventListener('click', () => {
  appendRow.removeAttribute('disabled');
  tBody.lastElementChild.remove();

  if ([...tBody.children].length <= minCells) {
    removeRow.setAttribute('disabled', true);
  };
});

appendColumn.addEventListener('click', () => {
  removeColumn.removeAttribute('disabled');

  for (const i of tBody.children) {
    i.append(td.cloneNode(true));
  }

  if ([...tr.children].length >= maxCells) {
    appendColumn.setAttribute('disabled', true);
  };
});

removeColumn.addEventListener('click', () => {
  appendColumn.removeAttribute('disabled');

  for (const i of tBody.children) {
    i.lastElementChild.remove();
  }

  if ([...tr.children].length <= minCells) {
    removeColumn.setAttribute('disabled', true);
  };
});
