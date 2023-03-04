'use strict';

const tr = document.querySelector('tr');
const td = document.querySelector('td');
const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if ([...tbody.children].length === 10) {
    return;
  }

  tbody.append(tr.cloneNode(true));
});

removeRow.addEventListener('click', () => {
  if ([...tbody.children].length === 2) {
    return;
  }

  tbody.lastElementChild.remove();
});

appendColumn.addEventListener('click', () => {
  if ([...tr.children].length === 10) {
    return;
  }

  for (const itemTr of tbody.children) {
    itemTr.append(td.cloneNode(true));
  }
});

removeColumn.addEventListener('click', () => {
  if ([...tr.children].length === 2) {
    return;
  }

  for (const itemTr of tbody.children) {
    itemTr.lastElementChild.remove();
  }
});
