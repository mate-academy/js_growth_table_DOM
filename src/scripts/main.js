'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const rows = document.getElementsByTagName('tr');

appendRow.addEventListener('click', (e) => {
  table.append(rows[0].cloneNode(true));

  if (rows.length >= 10) {
    appendRow.disabled = true;
  }

  if (rows.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  rows[rows.length - 1].remove();

  if (rows.length < 10) {
    appendRow.disabled = false;
  }

  if (rows.length <= 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', (e) => {
  [...rows].forEach(element => {
    const newColumn = document.createElement('td');

    element.append(newColumn);

    if (element.children.length >= 10) {
      appendColumn.disabled = true;
    }

    if (element.children.length > 2) {
      removeColumn.disabled = false;
    }
  });
});

removeColumn.addEventListener('click', (e) => {
  [...rows].forEach(element => {
    element.children[element.children.length - 1].remove();

    if (element.children.length < 10) {
      appendColumn.disabled = false;
    }

    if (element.children.length <= 2) {
      removeColumn.disabled = true;
    }
  });
});
