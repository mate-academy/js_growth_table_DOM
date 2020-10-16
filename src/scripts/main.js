'use strict';

const field = document.querySelector('.field');
const table = field.firstElementChild;
const rows = table.rows;
const cells = rows[0].cells;
const removeRow = document.querySelector('.remove-row');
const appendRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const appendColumn = document.querySelector('.append-column');

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (rows.length === 9) {
    appendRow.disabled = false;
  }

  if (rows.length === 2) {
    removeRow.disabled = true;
  }
});

appendRow.addEventListener('click', () => {
  if (rows.length === 2) {
    removeRow.disabled = false;
  }

  if (rows.length === 9) {
    appendRow.disabled = true;
  }

  const row = document.createElement('tr');

  row.innerHTML = `<td></td>`.repeat(cells.length);

  table.append(row);
});

removeColumn.addEventListener('click', () => {
  if (cells.length === 3) {
    removeColumn.disabled = true;
  }

  if (cells.length === 10) {
    appendColumn.disabled = false;
  }

  [...rows].forEach(row => {
    row.lastElementChild.remove();
  });
});

appendColumn.addEventListener('click', () => {
  if (cells.length === 2) {
    removeColumn.disabled = false;
  }

  if (cells.length === 9) {
    appendColumn.disabled = true;
  }

  [...rows].forEach(row => {
    const cell = document.createElement('td');

    row.append(cell);
  });
});
