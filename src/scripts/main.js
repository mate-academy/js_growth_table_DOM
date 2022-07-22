'use strict';

const table = document.querySelector('.field');
const tableBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxCount = 10;
const minCount = 2;

let rowsCount = table.rows.length;
let columnsCount = table.rows[0].cells.length;

function buttonStatus(addButton, removeButton, isRow) {
  rowsCount = table.rows.length;
  columnsCount = table.rows[0].cells.length;

  const lengthCount = isRow ? rowsCount : columnsCount;

  addButton.disabled = lengthCount >= maxCount;
  removeButton.disabled = lengthCount <= minCount;
}

buttonStatus(appendRow, removeRow, true);
buttonStatus(appendColumn, removeColumn, false);

document.body.addEventListener('click', (clicked) => {
  if (clicked.target.tagName !== 'BUTTON') {
    return;
  }

  switch (clicked.target.className.split(' ')[0]) {
    case 'append-row':
      const newRow
        = `<tr>${'<td></td>'.repeat(table.rows[0].cells.length)}</tr>`;

      tableBody.insertAdjacentHTML('beforeend', newRow);

      buttonStatus(appendRow, removeRow, true);
      break;

    case 'remove-row':
      table.deleteRow(0);
      buttonStatus(appendRow, removeRow, true);
      break;
    case 'append-column':
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell();
      }

      buttonStatus(appendColumn, removeColumn, false);
      break;

    case 'remove-column':
      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(0);
      }

      buttonStatus(appendColumn, removeColumn, false);
      break;

    default:
      return;
  };
});
