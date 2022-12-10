'use strict';

const tbody = document.querySelector('tbody');
let allRows = document.querySelectorAll('tr');

const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

// add column

appendColumn.addEventListener('click', e => {
  removeColumn.disabled = false;

  for (let i = 0; i < allRows.length; i++) {
    allRows[i].insertAdjacentHTML('beforeend', '<td></td>');
  }

  if (allRows[0].children.length === 10) {
    appendColumn.disabled = true;
  }
});

// remove column

removeColumn.addEventListener('click', e => {
  appendColumn.disabled = false;

  for (let i = 0; i < allRows.length; i++) {
    allRows[i].lastElementChild.remove();
  }

  if (allRows[0].children.length === 2) {
    removeColumn.disabled = true;
  }
});

// add row

appendRow.addEventListener('click', e => {
  removeRow.disabled = false;

  tbody.append(tbody.lastElementChild.cloneNode(true));

  allRows = document.querySelectorAll('tr');

  if (allRows.length === 10) {
    appendRow.disabled = true;
  }
});

// remove row

removeRow.addEventListener('click', e => {
  appendRow.disabled = false;

  tbody.lastElementChild.remove();

  allRows = document.querySelectorAll('tr');

  if (allRows.length === 2) {
    removeRow.disabled = true;
  }
});
