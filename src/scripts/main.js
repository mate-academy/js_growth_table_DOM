'use strict';

function getColumns() {
  return document.querySelector('tr').children.length;
}

function getRows() {
  return document.querySelectorAll('tr').length;
}

document.querySelector('.append-row').addEventListener('click', () => {
  document.querySelector('.remove-row').removeAttribute('disabled');

  if (getRows() < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < getColumns(); i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }
    document.querySelector('.field').appendChild(newRow);
  }

  if (getRows() === 10) {
    document.querySelector('.append-row').setAttribute('disabled', '');
  }
});

document.querySelector('.remove-row').addEventListener('click', () => {
  document.querySelector('.append-row').removeAttribute('disabled');

  if (getRows() > 2) {
    const row = document.querySelector('tr');

    row.remove();
  }

  if (getRows() === 2) {
    document.querySelector('.remove-row').setAttribute('disabled', '');
  }
});

document.querySelector('.append-column').addEventListener('click', () => {
  document.querySelector('.remove-column').removeAttribute('disabled');

  if (getColumns() < 10) {
    const rows = document.querySelectorAll('tr');

    for (const row of rows) {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    }
  }

  if (getColumns() === 10) {
    document.querySelector('.append-column').setAttribute('disabled', '');
  }
});

document.querySelector('.remove-column').addEventListener('click', () => {
  document.querySelector('.append-column').removeAttribute('disabled');

  if (getColumns() > 2) {
    const rows = document.querySelectorAll('tr');

    for (const row of rows) {
      row.removeChild(row.querySelector('td'));
    }
  }

  if (getColumns() === 2) {
    document.querySelector('.remove-column').setAttribute('disabled', '');
  }
});
