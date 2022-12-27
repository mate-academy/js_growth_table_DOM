'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table').firstElementChild;
const container = document.querySelector('.container');
const rows = document.getElementsByTagName('tr');
const maxItems = 10;
const minItems = 2;

container.addEventListener('click', eventClick => {
  switch (eventClick.target) {
    case appendRow:
      table.append(table.firstElementChild.cloneNode(true));

      if (rows.length === maxItems) {
        appendRow.disabled = true;
      }

      removeRow.disabled = false;

      break;

    case removeRow:
      table.firstElementChild.remove();

      if (rows.length === minItems) {
        removeRow.disabled = true;
      }

      appendRow.disabled = false;

      break;

    case appendColumn:
      for (const item of table.children) {
        item.append(item.firstElementChild.cloneNode(true));
      }

      if (rows[0].children.length === maxItems) {
        appendColumn.disabled = true;
      }

      removeColumn.disabled = false;

      break;

    case removeColumn:
      for (const item of table.children) {
        item.firstElementChild.remove();
      }

      if (rows[0].children.length === minItems) {
        removeColumn.disabled = true;
      }

      appendColumn.disabled = false;

      break;
  }
});
