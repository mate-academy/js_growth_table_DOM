'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field').children[0];
const rows = field.children;

document.addEventListener('click', (e) => {
  switch (e.target) {
    case appendRow:
      if (field.children.length === 9) {
        appendRow.disabled = true;
      }

      if (field.children.length !== 10) {
        field.append(field.children[0].cloneNode(true));
      }

      removeRow.disabled = false;
      break;

    case removeRow:
      if (field.children.length === 3) {
        removeRow.disabled = true;
      }

      field.children[0].remove();
      appendRow.disabled = false;
      break;

    case appendColumn:
      if (rows[0].children.length === 9) {
        appendColumn.disabled = true;
      }

      if (rows[0].children.length !== 10) {
        for (const row of rows) {
          row.append(row.children[0].cloneNode(true));
        }
      }

      removeColumn.disabled = false;
      break;

    case removeColumn:
      if (rows[0].children.length === 3) {
        removeColumn.disabled = true;
      }

      for (const row of rows) {
        row.children[0].remove();
      }

      appendColumn.disabled = false;
      break;

    default:
      break;
  }
});
