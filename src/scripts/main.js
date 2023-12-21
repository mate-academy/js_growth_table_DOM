'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  removeRow.removeAttribute('disabled');

  tbody.append(tbody.lastElementChild.cloneNode(true));

  if ((rows.length + 1) === 10) {
    appendRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  appendRow.removeAttribute('disabled');

  tbody.lastElementChild.remove();

  if ((rows.length - 1) === 2) {
    removeRow.setAttribute('disabled', true);
  }
});

appendColumn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  removeColumn.removeAttribute('disabled');

  rows.forEach((row) => row.append(row.firstElementChild.cloneNode(true)));

  if (rows[0].children.length === 10) {
    appendColumn.setAttribute('disabled', true);
  }
});

removeColumn.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  appendColumn.removeAttribute('disabled');

  rows.forEach((row) => row.firstElementChild.remove());

  if (rows[0].children.length === 2) {
    removeColumn.setAttribute('disabled', true);
  }
});
