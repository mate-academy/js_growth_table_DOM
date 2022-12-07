'use strict';

const buttons = document.querySelectorAll('.button');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');
const max = 10;
const min = 2;

for (const button of buttons) {
  button.addEventListener('click', (handler) => {
    const buttonClicked = handler.target;

    switch (buttonClicked) {
      case appendRow:
        tableBody.append(tableBody.rows[0].cloneNode(true));
        break;

      case removeRow:
        tableBody.rows[0].remove();
        break;

      case appendColumn:
        for (const tr of tableBody.rows) {
          const td = tr.children[0].cloneNode(true);

          tr.insertBefore(td, tr.firstChild);
        }
        break;

      case removeColumn:
        for (const tr of tableBody.rows) {
          tr.children[0].remove();
        }
        break;
    }

    appendRow.disabled = tableBody.rows.length === max
      ? true
      : null;

    removeRow.disabled = tableBody.rows.length === min
      ? true
      : null;

    appendColumn.disabled = tableBody.rows[0].children.length === max
      ? true
      : null;

    removeColumn.disabled = tableBody.rows[0].children.length === min
      ? true
      : null;
  });
}
