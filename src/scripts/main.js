'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const MAXITEMS = 10;
const MINITEMS = 2;

appendRow.addEventListener('click', () => {
  const clone = table.rows[0].cloneNode(true);

  table.append(clone);

  if (table.rows.length === MAXITEMS) {
    appendRow.setAttribute('disabled', 'true');
  }

  removeRow.removeAttribute('disabled');
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.rows.length === MINITEMS) {
    removeRow.setAttribute('disabled', 'true');
  }

  appendRow.removeAttribute('disabled');
});

appendColumn.addEventListener('click', () => {
  table.children.forEach((row) => {
    const newSquare = document.createElement('td');

    row.prepend(newSquare);
  });

  if (table.rows[0].cells.length === MAXITEMS) {
    appendColumn.setAttribute('disabled', 'true');
  }

  removeColumn.removeAttribute('disabled');
});

removeColumn.addEventListener('click', () => {
  table.children.forEach((row) => {
    row.firstElementChild.remove();
  });

  if (table.rows[0].cells.length === MINITEMS) {
    removeColumn.setAttribute('disabled', 'true');
  }

  appendColumn.removeAttribute('disabled');
});
