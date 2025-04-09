'use strict';

const field = document.querySelector('.field tbody');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

appendColumn.addEventListener('click', () => {
  const fieldRows = field.querySelectorAll('tr');
  const fieldRowsCount = fieldRows.length;
  const fieldColumnsCount = field.querySelectorAll('tr:first-child td').length;

  if (fieldColumnsCount < 10) {
    removeColumn.removeAttribute('disabled');

    for (let i = 0; i < fieldRowsCount; i++) {
      const parentElement = fieldRows[i];
      const newTd = document.createElement('td');

      parentElement.insertBefore(newTd, null);
    }
  }

  if (fieldColumnsCount > 8) {
    appendColumn.setAttribute('disabled', true);
  }
});

removeColumn.addEventListener('click', () => {
  const fieldRows = field.querySelectorAll('tr');
  const fieldRowsCount = fieldRows.length;
  const fieldColumnsCount = field.querySelectorAll('tr:first-child td').length;

  if (fieldColumnsCount > 2) {
    appendColumn.removeAttribute('disabled');

    for (let i = 0; i < fieldRowsCount; i++) {
      const parentElement = fieldRows[i];
      const theLastTd = parentElement.querySelector('td:last-child');

      parentElement.removeChild(theLastTd);
    }
  }

  if (fieldColumnsCount < 4) {
    removeColumn.setAttribute('disabled', true);
  }
});

appendRow.addEventListener('click', () => {
  const fieldRows = field.querySelectorAll('tr');
  const fieldRowsCount = fieldRows.length;
  const fieldColumnsCount = field.querySelectorAll('tr:first-child td').length;
  const fieldLastRow = fieldRows[fieldRowsCount - 1];

  if (fieldRowsCount < 10) {
    removeRow.removeAttribute('disabled');

    const newRow = document.createElement('tr');

    for (let i = 0; i < fieldColumnsCount; i++) {
      const newTd = document.createElement('td');

      newRow.appendChild(newTd);
    }

    field.insertBefore(newRow, fieldLastRow.nextSibling);
  }

  if (fieldRowsCount > 8) {
    appendRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  const fieldRows = field.querySelectorAll('tr');
  const fieldRowsCount = fieldRows.length;
  const fieldLastRow = fieldRows[fieldRowsCount - 1];

  if (fieldRowsCount > 2) {
    appendRow.removeAttribute('disabled');
    field.removeChild(fieldLastRow);
  }

  if (fieldRowsCount < 4) {
    removeRow.setAttribute('disabled', true);
  }
});
