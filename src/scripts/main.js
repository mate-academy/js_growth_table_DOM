'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const remoweRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

appendRow.addEventListener('click', e => {
  remoweRow.disabled = false;
  tbody.append(tbody.lastElementChild.cloneNode(true));

  const rowsAmount = tbody.children.length;

  if (rowsAmount === maxCount) {
    appendRow.disabled = true;
  }
});

remoweRow.addEventListener('click', e => {
  appendRow.disabled = false;
  tbody.lastElementChild.remove();

  const rowsAmount = tbody.children.length;

  if (rowsAmount === minCount) {
    remoweRow.disabled = true;
  }
});

appendColumn.addEventListener('click', e => {
  removeColumn.disabled = false;

  const rowsAmount = tbody.children.length;

  for (let i = 0; i < rowsAmount; i++) {
    const td = document.createElement('td');

    tbody.children[i].append(td);
  }

  const columnsAmount = tbody.firstChild.children.length;

  if (columnsAmount === maxCount) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', e => {
  appendColumn.disabled = false;

  const rowsAmount = tbody.children.length;

  for (let i = 0; i < rowsAmount; i++) {
    const lastCell = tbody.children[i].lastElementChild;

    lastCell.remove();
  }

  const columnsAmount = tbody.firstChild.children.length;

  if (columnsAmount === minCount) {
    removeColumn.disabled = true;
  }
});
