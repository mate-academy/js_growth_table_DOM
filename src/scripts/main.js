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
        appendRow(even.target);
        break;
      case buttonRemoveRow:
        removeRow(even.target);
        break;
      case buttonsAppendColumn:
        appendColumn(even.target);
        break;
      case buttonRemoveColumn:
        removeColumn(even.target);
        break;

      default:
        break;
    }
  }
});

function appendRow(button) {
  buttonRemoveRow.disabled = false;

  const newRow = document.createElement('tr');

  if (table.rows.length < 10) {
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = document.createElement('td');

      newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
  }

  if (table.rows.length === 10) {
    button.disabled = true;
  }
}

function removeRow(button) {
  buttonAppendRow.disabled = false;

  const rows = table.rows;

  if (rows.length > 2) {
    table.deleteRow(rows.length - 1);
  }

  if (rows.length === 2) {
    button.disabled = true;
  }
}

function appendColumn(button) {
  buttonRemoveColumn.disabled = false;

  const currentColumnCount = table.rows[0].cells.length;

  if (currentColumnCount < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = document.createElement('td');

      table.rows[i].appendChild(newCell);
    }
  }

  if (table.rows[0].cells.length === 10) {
    button.disabled = true;
  }
}

function removeColumn(button) {
  buttonsAppendColumn.disabled = false;

  const currentColumnCount = table.rows[0].cells.length;

  if (currentColumnCount > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].lastElementChild.remove();
    }
  }

  if (table.rows[0].cells.length === 2) {
    button.disabled = true;
  }
}
