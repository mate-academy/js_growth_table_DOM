'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const maxItems = 10;
const minItems = 2;

appendRow.addEventListener('click', () => {
  const clone = table.rows[0].cloneNode(true);

  table.append(clone);

  if (table.rows.length === maxItems) {
    appendRow.setAttribute('disabled', 'true');
  }

  removeRow.removeAttribute('disabled');
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.rows.length === minItems) {
    removeRow.setAttribute('disabled', 'true');
  }

  appendRow.removeAttribute('disabled');
});

appendColumn.addEventListener('click', () => {
  [...table.children].map((row) => {
    const newSquare = document.createElement('td');

    row.prepend(newSquare);
  });

  if (table.rows[0].cells.length === maxItems) {
    appendColumn.setAttribute('disabled', 'true');
  }

  removeColumn.removeAttribute('disabled');
});

removeColumn.addEventListener('click', () => {
  [...table.children].map((row) => {
    row.firstElementChild.remove();
  });

  if (table.rows[0].cells.length === minItems) {
    removeColumn.setAttribute('disabled', 'true');
  }

  appendColumn.removeAttribute('disabled');
});
