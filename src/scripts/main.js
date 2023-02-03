'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');
const tBody = table.querySelector('tbody');
const appendRow = container.querySelector('.append-row');
const removeRow = container.querySelector('.remove-row');
const appendColumn = container.querySelector('.append-column');
const removeColumn = container.querySelector('.remove-column');
const max = 10;
const min = 2;

container.addEventListener('click', e => {
  if (!e.target.matches('button')) {
    return;
  }

  if (e.target === appendRow) {
    const newRow = tBody.lastElementChild.cloneNode(true);

    tBody.append(newRow);
  }

  if (e.target === removeRow) {
    tBody.lastElementChild.remove();
  }

  if (e.target === appendColumn) {
    Array.from(tBody.rows).forEach(row => row.insertCell(row.cells.length));
  }

  if (e.target === removeColumn) {
    Array.from(tBody.rows).forEach(row => row.lastElementChild.remove());
  }

  appendRow.disabled = tBody.rows.length === max;
  removeRow.disabled = tBody.rows.length === min;
  appendColumn.disabled = tBody.rows[0].cells.length === max;
  removeColumn.disabled = tBody.rows[0].cells.length === min;
})
