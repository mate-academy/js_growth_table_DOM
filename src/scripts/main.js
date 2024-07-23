'use strict';

function getColumns() {
  return document.querySelector('tr').children.length;
}

function getRows() {
  return document.querySelectorAll('tr').length;
}

document.querySelector('.append-row').addEventListener('click', () => {
  if (getRows() < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < getColumns(); i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }
    document.querySelector('.field').appendChild(newRow);
  }
});

document.querySelector('.remove-row').addEventListener('click', () => {
  if (getRows() > 2) {
    const row = document.querySelector('tr');

    row.remove();
  }
});

document.querySelector('.append-column').addEventListener('click', () => {
  if (getColumns() < 10) {
    const rows = document.querySelectorAll('tr');

    for (const row of rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }
  }
});

document.querySelector('.remove-column').addEventListener('click', () => {
  if (getColumns() > 2) {
    const rows = document.querySelectorAll('tr');

    for (const row of rows) {
      row.removeChild(row.querySelector('td'));
    }
  }
});
