'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rows = document.getElementsByTagName('tr');

appendRow.addEventListener('click', () => {
  removeRow.removeAttribute('disabled');

  if (rows.length <= 9) {
    const firstRow = rows[0];
    const copy = firstRow.cloneNode(true);

    firstRow.before(copy);
  }

  if (rows.length === 10) {
    appendRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  appendRow.removeAttribute('disabled');

  if (rows.length >= 3) {
    const firstRow = document.querySelectorAll('tr')[0];

    firstRow.remove();
  }

  if (rows.length === 2) {
    removeRow.setAttribute('disabled', true);
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.removeAttribute('disabled');

  document.querySelectorAll('tr').forEach((row) => {
    const columns = row.children;

    if (columns.length <= 9) {
      const newCell = document.createElement('td');

      row.append(newCell);
    }

    if (columns.length === 10) {
      appendColumn.setAttribute('disabled', true);
    }
  });
});

removeColumn.addEventListener('click', () => {
  appendColumn.removeAttribute('disabled');

  document.querySelectorAll('tr').forEach((row) => {
    const columns = row.children;

    if (columns.length >= 3) {
      row.firstElementChild.remove();
      appendColumn.removeAttribute('disabled');
    }

    if (columns.length === 2) {
      removeColumn.setAttribute('disabled', true);
    }
  });
});
