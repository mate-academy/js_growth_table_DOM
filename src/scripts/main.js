'use strict';

const table = document.querySelector('.field');

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonsAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

window.addEventListener('click', even => {
  if (even.target.tagName === 'BUTTON') {
    switch (even.target) {
      case buttonAppendRow:
        appendRow();
        break;
      case buttonRemoveRow:
        removeRow();
        break;
      case buttonsAppendColumn:
        appendColumn();
        break;
      case buttonRemoveColumn:
        removeColumn();
        break;

      default:
        break;
    }
  }
});

function appendRow() {
  const newRow = document.createElement('tr');

  if (table.rows.length < 10) {
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
  }
}

function removeRow() {
  const rows = table.rows;

  if (rows.length > 2) {
    table.deleteRow(rows.length - 1);
  }
}

function appendColumn() {
  const currentColumnCount = table.rows[0].cells.length;

  if (currentColumnCount < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = document.createElement('td');

      table.rows[i].appendChild(newCell);
    }
  }
}

function removeColumn() {
  const currentColumnCount = table.rows[0].cells.length;

  if (currentColumnCount > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].lastElementChild.remove();
    }
  }
}
