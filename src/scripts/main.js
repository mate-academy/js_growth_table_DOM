'use strict';

const table = document.querySelector('.field');

const buttonAppendRow = document.querySelector('.append-row');

buttonAppendRow.addEventListener('click', function() {
  const firstRowLength = table.rows[0].cells.length;
  const trElem = document.createElement('tr');

  for (let i = 0; i < firstRowLength; i++) {
    trElem.append(document.createElement('td'));
    table.append(trElem);
  }

  if (table.rows.length >= 10) {
    buttonAppendRow.disabled = true;
  }

  if (table.rows.length > 2) {
    buttonRemoveRow.disabled = false;
  }
});

const buttonRemoveRow = document.querySelector('.remove-row');

buttonRemoveRow.addEventListener('click', function() {
  const rows = table.rows;

  rows[rows.length - 1].remove();

  if (table.rows.length < 10) {
    buttonAppendRow.disabled = false;
  }

  if (table.rows.length <= 2) {
    buttonRemoveRow.disabled = true;
  }
});

const buttonAppendColumn = document.querySelector('.append-column');

buttonAppendColumn.addEventListener('click', function() {
  for (const row of table.rows) {
    row.append(document.createElement('td'));
  }

  if (table.rows[0].cells.length >= 10) {
    buttonAppendColumn.disabled = true;
  }

  if (table.rows[0].cells.length > 2) {
    buttonRemoveColumn.disabled = false;
  }
});

const buttonRemoveColumn = document.querySelector('.remove-column');

buttonRemoveColumn.addEventListener('click', function() {
  for (const row of table.rows) {
    row.cells[row.cells.length - 1].remove();
  }

  if (table.rows[0].cells.length < 10) {
    buttonAppendColumn.disabled = false;
  }

  if (table.rows[0].cells.length <= 2) {
    buttonRemoveColumn.disabled = true;
  }
});
