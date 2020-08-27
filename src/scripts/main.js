'use strict';

const tbody = document.querySelector('table tbody');
const rows = document.getElementsByTagName('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', event => {
  tbody.append(rows[0].cloneNode(true));

  if (rows.length === 10) {
    event.target.setAttribute('disabled', '');
  } else if (rows.length > 2) {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', event => {
  tbody.lastElementChild.remove();

  if (rows.length === 2) {
    event.target.setAttribute('disabled', '');
  } else if (rows.length < 10) {
    appendRow.removeAttribute('disabled');
  }
});

appendColumn.addEventListener('click', event => {
  for (const item of rows) {
    item.append(document.createElement('td'));
  }

  if (rows[0].children.length === 10) {
    event.target.setAttribute('disabled', '');
  } else if (rows[0].children.length > 2) {
    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', event => {
  for (const item of rows) {
    item.lastElementChild.remove();
  }

  if (rows[0].children.length === 2) {
    event.target.setAttribute('disabled', '');
  } else if (rows[0].children.length < 10) {
    appendColumn.removeAttribute('disabled');
  }
});
