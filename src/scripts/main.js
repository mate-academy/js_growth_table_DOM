'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');

const addRowButton = document.querySelector('.append-row');
const addColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

container.addEventListener('click', e => {
  const button = e.target;

  switch (button) {
    case addRowButton:
      table.append(table.rows[0].cloneNode(true));
      break;

    case removeRowButton:
      table.rows[table.rows.length - 1].remove();
      break;

    case addColumnButton:
      [...table.rows].forEach(row => {
        row.append(row.cells[0].cloneNode(true));
      });
      break;

    case removeColumnButton:
      [...table.rows].forEach(row => {
        row.lastChild.remove();
      });
      break;
  }

  addRowButton.disabled = table.rows.length >= maxCount;
  removeRowButton.disabled = table.rows.length <= minCount;
  addColumnButton.disabled = table.rows[0].children.length >= maxCount;
  removeColumnButton.disabled = table.rows[0].children.length <= minCount;
});
