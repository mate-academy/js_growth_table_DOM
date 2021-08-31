'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const container = document.querySelector('.container');
const table = document.querySelector('tbody');

container.addEventListener('click', (e) => {
  switch (e.target.classList[0]) {
    case 'append-column':
      [...table.rows].forEach(itemRow => {
        itemRow.append(table.rows[0].children[0].cloneNode(true));
      });
      break;
    case 'append-row':
      table.append(table.firstElementChild.cloneNode(true));
      break;
    case 'remove-row':
      table.removeChild(table.children[0]);
      break;
    case 'remove-column':
      [...table.rows].forEach(itemColumn => itemColumn.children[0].remove());
      break;
    default:
      break;
  };

  if (table.rows[0].children.length >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  };

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  };

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  };

  if (table.rows[0].children.length <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  };
});
