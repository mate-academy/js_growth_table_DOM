'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const maxRows = 10;
const minRows = 2;
const maxColumn = 10;
const minColumn = 2;

appendRow.addEventListener('click', () => {
  const newRow = table.rows[0].cloneNode(true);

  removeRow.removeAttribute('disabled');
  table.append(newRow);

  if (table.rows.length === maxRows) {
    appendRow.setAttribute('disabled', true);
  }
});

removeRow.addEventListener('click', () => {
  appendRow.removeAttribute('disabled');
  table.rows[0].remove();

  if (table.rows.length === minRows) {
    removeRow.setAttribute('disabled', true);
  }
});

appendColumn.addEventListener('click', () => {
  removeColumn.removeAttribute('disabled');

  [...table.rows].forEach(rowLocal => {
    const cellClone = table.rows[0].cells[0].cloneNode(true);

    rowLocal.append(cellClone);

    if (rowLocal.cells.length === maxColumn) {
      appendColumn.setAttribute('disabled', true);
    }
  });
});

removeColumn.addEventListener('click', () => {
  appendColumn.removeAttribute('disabled');

  [...table.rows].forEach(rowLocal => {
    rowLocal.children[0].remove();

    if (rowLocal.cells.length === minColumn) {
      removeColumn.setAttribute('disabled', true);
    }
  });
});
