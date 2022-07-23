'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const container = document.querySelector('.container');

container.addEventListener('click', e => {
  if (e.target === appendRow) {
    const row = table.rows[0].cloneNode(true);

    table.append(row);
  }

  if (e.target === removeRow) {
    table.rows[table.rows.length - 1].remove();
  }

  if (e.target === appendColumn) {
    [...table.rows].forEach(tr => {
      const td = document.createElement('td');

      tr.appendChild(td);
    });
  }

  if (e.target === removeColumn) {
    [...table.rows].forEach(tr => tr.lastChild.remove());
  }

  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;
  appendColumn.disabled = table.rows[0].children.length >= 10;
  removeColumn.disabled = table.rows[0].children.length <= 2;

});
