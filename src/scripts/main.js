'use strict';

const tr = document.querySelector('tr');
const td = document.querySelector('td');
const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxColumnsOrRows = 10;
const minColumnsOrRows = 2;

appendRow.addEventListener('click', () => {
  tbody.append(tr.cloneNode(true));

  removeRow.disabled = false;

  if ([...tbody.children].length === maxColumnsOrRows) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  appendRow.disabled = false;

  if ([...tbody.children].length === minColumnsOrRows) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  for (const itemTr of tbody.children) {
    itemTr.append(td.cloneNode(true));
  }

  removeColumn.disabled = false;

  if ([...tr.children].length === maxColumnsOrRows) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  for (const itemTr of tbody.children) {
    itemTr.lastElementChild.remove();
  }

  appendColumn.disabled = false;

  if ([...tr.children].length === minColumnsOrRows) {
    removeColumn.disabled = true;
  }
});
