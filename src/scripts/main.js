'use strict';

const field = document.querySelector('.field');
const table = field.firstElementChild;

const rows = table.rows;
const cells = rows[0].cells;

const maxLength = 10;
const minLength = 2;

const removeRow = document.querySelector('.remove-row');
const appendRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const appendColumn = document.querySelector('.append-column');

removeRow.addEventListener('click', () => {
  if (rows.length === maxLength) {
    appendRow.disabled = false;
  }

  table.lastElementChild.remove();

  if (rows.length === minLength) {
    removeRow.disabled = true;
  }
});

appendRow.addEventListener('click', () => {
  if (rows.length === minLength) {
    removeRow.disabled = false;
  }

  const row = document.createElement('tr');

  row.innerHTML = `<td></td>`.repeat(cells.length);

  table.append(row);

  if (rows.length === maxLength) {
    appendRow.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  if (cells.length === maxLength) {
    appendColumn.disabled = false;
  }

  [...rows].forEach(row => {
    row.lastElementChild.remove();
  });

  if (cells.length === minLength) {
    removeColumn.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  if (cells.length === minLength) {
    removeColumn.disabled = false;
  }

  [...rows].forEach(row => {
    const cell = document.createElement('td');

    row.append(cell);
  });

  if (cells.length === maxLength) {
    appendColumn.disabled = true;
  }
});
