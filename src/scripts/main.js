'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rows = table.lastChild.rows;

appendRow.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  if (tr.length === 9) {
    appendRow.disabled = true;
  }

  table.lastChild.append(tr[0].cloneNode(true));
  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  if (tr.length === 3) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
  tr[2].remove();
});

appendColumn.addEventListener('click', () => {
  const tr = document.querySelectorAll('tr');

  removeColumn.disabled = false;

  if (tr[0].cells.length <= 9) {
    Array.from(rows).forEach((row) => {
      row.insertAdjacentHTML('beforeend', '<td></td>');
    });
  }

  if (tr[0].cells.length === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;

  Array.from(rows).forEach((row) => {
    if (row.cells.length === 3) {
      removeColumn.disabled = true;
    }
    row.cells[2].remove();
  });
});
