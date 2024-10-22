'use strict';

const columnTable = document.querySelector('.append-column');
const rowTable = document.querySelector('.append-row');
const columnRemoveTable = document.querySelector('.remove-column');
const rowRemoveTable = document.querySelector('.remove-row');
const table = document.querySelector('.field');

columnTable.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((x) => {
    x.appendChild(document.createElement('td'));

    if (x.children.length === 10) {
      columnTable.disabled = true;
    }

    if (x.children.length > 2) {
      columnRemoveTable.disabled = false;
    }
  });
});

rowTable.addEventListener('click', () => {
  table.appendChild(document.querySelector('tr').cloneNode(true));

  if (document.querySelectorAll('tr').length === 10) {
    rowTable.disabled = true;
  }

  if (document.querySelectorAll('tr').length > 2) {
    rowRemoveTable.disabled = false;
  }
});

columnRemoveTable.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((x) => {
    x.lastChild.remove();

    if (x.children.length === 2) {
      columnRemoveTable.disabled = true;
    }

    if (x.children.length < 10) {
      columnTable.disabled = false;
    }
  });
});

rowRemoveTable.addEventListener('click', () => {
  document.querySelector('tr').remove();

  if (document.querySelectorAll('tr').length === 2) {
    rowRemoveTable.disabled = true;
  }

  if (document.querySelectorAll('tr').length < 10) {
    rowTable.disabled = false;
  }
});
