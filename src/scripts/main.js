'use strict';

const buttons = document.body.querySelectorAll('button');
const table = document.body.querySelector('.field');
const tBody = Array.from(table.tBodies)[0];

const appendRowButton = document.body.querySelector('.append-row');
const removeRowButton = document.body.querySelector('.remove-row');
const appendColumnButton = document.body.querySelector('.append-column');
const removeColumnButton = document.body.querySelector('.remove-column');

buttons.forEach(button => button.addEventListener('click', growTable));

function growTable(e) {
  const rows = [...tBody.children];
  const target = e.target;

  const lastRow = rows[rows.length - 1];
  const cloneRow = lastRow.cloneNode(true);
  const column = table.querySelector('td');

  switch (target) {
    case appendRowButton:
      if (rows.length > 8) {
        appendRowButton.disabled = 'true';
      }
      removeRowButton.disabled = '';
      tBody.append(cloneRow);
      break;

    case removeRowButton:
      if (rows.length < 4) {
        removeRowButton.disabled = 'true';
      }
      appendRowButton.disabled = '';
      lastRow.remove();
      break;

    case appendColumnButton:
      rows.forEach((row) => {
        if ([...row.children].length > 8) {
          appendColumnButton.disabled = 'true';
        }

        const cloneColumn = column.cloneNode(true);

        row.append(cloneColumn);
      });
      removeColumnButton.disabled = '';
      break;

    case removeColumnButton:
      rows.forEach((row) => {
        if ([...row.children].length < 4) {
          removeColumnButton.disabled = 'true';
        }

        const lastColumn = row.lastElementChild;

        lastColumn.remove();
      });
      appendColumnButton.disabled = '';
      break;

    default:
  }
}
