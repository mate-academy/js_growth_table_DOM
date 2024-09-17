'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxCount = 10;
const minCount = 2;

appendRow.addEventListener('click', () => {
  const rows = table.rows;

  if (rows.length >= maxCount) {
    return;
  }

  const extraRow = rows[0].cloneNode(true);

  table.tBodies[0].append(extraRow);
  removeRow.removeAttribute('disabled');
  appendRow.disabled = rows.length === maxCount;
});

removeRow.addEventListener('click', () => {
  const rows = table.rows;

  rows[0].remove();
  appendRow.removeAttribute('disabled');
  removeRow.disabled = rows.length === minCount;
});

appendColumn.addEventListener('click', () => {
  const rows = table.rows;
  const columns = table.rows[0].children;

  if (columns.length >= maxCount) {
    return;
  }

  [...rows].forEach((row) => {
    const extraColumn = row.firstElementChild.cloneNode();

    row.append(extraColumn);
  });
  removeColumn.removeAttribute('disabled');
  appendColumn.disabled = columns.length === maxCount;
});

removeColumn.addEventListener('click', () => {
  const rows = table.rows;
  const columns = table.rows[0].children;

  [...rows].forEach((row) => {
    row.firstElementChild.remove();
  });
  appendColumn.removeAttribute('disabled');
  removeColumn.disabled = columns.length === minCount;
});
