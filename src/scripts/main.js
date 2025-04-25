'use strict';

const table = document.querySelector('table.field');
const rowButtons = {
  append: document.querySelector('.append-row.button'),
  remove: document.querySelector('.remove-row.button'),
};
const columnButtons = {
  append: document.querySelector('.append-column.button'),
  remove: document.querySelector('.remove-column.button'),
};

rowButtons.append.onclick = function () {
  const row = document.createElement('tr');
  const rowSizeBeforeOperation = table.rows.length;
  const columnSize = table.rows[0].cells.length;

  if (rowSizeBeforeOperation === 2) {
    rowButtons.remove.style.display = '';
  }

  row.innerHTML = '<td></td>\n'.repeat(columnSize);
  table.tBodies[0].appendChild(row);

  if (table.rows.length === 10) {
    rowButtons.append.style.display = 'none';
  }
};

rowButtons.remove.onclick = function () {
  const rowSizeBeforeOperation = table.rows.length;

  if (rowSizeBeforeOperation === 10) {
    rowButtons.append.style.display = '';
  }

  table.deleteRow(rowSizeBeforeOperation - 1);

  if (table.rows.length === 2) {
    rowButtons.remove.style.display = 'none';
  }
};

columnButtons.append.onclick = function () {
  const columnSizeBeforeOperation = table.rows[0].cells.length;

  if (columnSizeBeforeOperation === 2) {
    columnButtons.remove.style.display = '';
  }

  for (const row of table.rows) {
    const column = document.createElement('td');

    row.appendChild(column);
  }

  if (table.rows[0].cells.length === 10) {
    columnButtons.append.style.display = 'none';
  }
};

columnButtons.remove.onclick = function () {
  const columnSizeBeforeOperation = table.rows[0].cells.length;

  if (columnSizeBeforeOperation === 10) {
    columnButtons.append.style.display = '';
  }

  for (const row of table.rows) {
    row.deleteCell(columnSizeBeforeOperation - 1);
  }

  if (table.rows[0].cells.length === 2) {
    columnButtons.remove.style.display = 'none';
  }
};
