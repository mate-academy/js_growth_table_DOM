'use strict';

// write code here
const min = 2;
const max = 10;

const table = document.querySelector('.field');
const table0 = document.querySelector('.field').tBodies[0];
let rows = table.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const newRow = rows[rows.length - 1].cloneNode(true);

  table.append(newRow);

  rows = table.querySelectorAll('tr');

  if (rows.length >= max) {
    appendRow.disabled = true;
    removeRow.disabled = false;
  }

  if (rows.length < max) {
    appendRow.disabled = false;
  }

  if (rows.length > min) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  table0.lastElementChild.remove();

  if (table0.children.length === 2) {
    removeRow.disabled = true;
  }

  if (table0.children.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  rows.forEach(row => {
    const newColumn = document.createElement('td');

    row.appendChild(newColumn);

    if (row.childElementCount >= max) {
      appendColumn.disabled = true;
      removeColumn.disabled = false;
    }

    if (row.childElementCount > min && row.childElementCount < max) {
      appendColumn.disabled = false;
      removeColumn.disabled = false;
    }
  });
});

removeColumn.addEventListener('click', () => {
  rows.forEach(row => {
    row.lastElementChild.remove();

    if (row.childElementCount <= min) {
      appendColumn.disabled = false;
      removeColumn.disabled = true;
    }

    if (row.childElementCount > min && row.childElementCount < max) {
      appendColumn.disabled = false;
      removeColumn.disabled = false;
    }
  });
});
