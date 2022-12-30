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

  if (tbody.children.length === maxCount) {
    appendRow.disabled = true;
  }
});

remoweRow.addEventListener('click', e => {
  appendRow.disabled = false;

  tbody.lastElementChild.remove();

  if (tbody.children.length === minCount) {
    remoweRow.disabled = true;
  }
});

appendColumn.addEventListener('click', e => {
  removeColumn.disabled = false;

  for (let i = 0; i < tbody.children.length; i++) {
    const td = document.createElement('td');

    tbody.children[i].append(td);
  }

  if (tbody.firstChild.children.length === maxCount) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', e => {
  appendColumn.disabled = false;

  for (let i = 0; i < tbody.children.length; i++) {
    const lastCell = tbody.children[i].lastElementChild;

    lastCell.remove();
  }

  if (tbody.firstChild.children.length === minCount) {
    removeColumn.disabled = true;
  }
});
