'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

appendRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];
  const copyRow = lastRow.cloneNode(true);

  lastRow.parentNode.appendChild(copyRow);

  const updatedRows = table.querySelectorAll('tr');

  if (updatedRows.length === 10) {
    appendRow.setAttribute('disabled', '');
  }

  if (updatedRows.length > 2 && removeRow.hasAttribute('disabled')) {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const lastRow = rows[rows.length - 1];

  if (lastRow) {
    lastRow.parentNode.removeChild(lastRow);
  }

  const updatedRows = table.querySelectorAll('tr');

  if (updatedRows.length < 3) {
    removeRow.setAttribute('disabled', '');
  }

  if (updatedRows.length < 10 && appendRow.hasAttribute('disabled')) {
    appendRow.removeAttribute('disabled');
  }
});

appendColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const cell = document.createElement('td');

    row.appendChild(cell);
  });

  const r = document.querySelector('tr');

  if (r.children.length === 10) {
    appendColumn.setAttribute('disabled', '');
  }

  if (r.children.length > 2 && removeColumn.hasAttribute('disabled')) {
    removeColumn.removeAttribute('disabled');
  }
});

removeColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    const lastCell = row.lastElementChild;

    row.removeChild(lastCell);
  });

  const r = document.querySelector('tr');

  if (r.children.length === 2) {
    removeColumn.setAttribute('disabled', '');
  }

  if (r.children.length < 10 && appendColumn.hasAttribute('disabled')) {
    appendColumn.removeAttribute('disabled');
  }
});
