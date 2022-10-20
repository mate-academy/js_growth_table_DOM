'use strict';

const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const rows = [...tbody.rows];

  if (e.target === appendRow) {
    tbody.append(rows[0].cloneNode(true));
  }

  if (e.target === removeRow) {
    tbody.lastElementChild.remove();
  }

  appendRow.disabled = tbody.children.length === 10;
  removeRow.disabled = tbody.children.length === 2;

  // Columns

  if (e.target === appendColumn) {
    rows.forEach(row => row.append(row.cells[0].cloneNode(true)));
  }

  if (e.target === removeColumn) {
    rows.forEach(row => [...row.cells][0].remove());
  }
  appendColumn.disabled = rows[0].cells.length === 10;
  removeColumn.disabled = rows[0].cells.length === 2;
});
