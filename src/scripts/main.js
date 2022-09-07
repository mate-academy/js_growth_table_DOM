'use strict';

const table = document.querySelector('.field tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const countColumns = table.querySelector('tr').children.length;
  const tr = document.createElement('tr');

  tr.innerHTML = '<td></td>\n'.repeat(countColumns);
  table.append(tr);

  const allRows = table.querySelectorAll('tr');

  if (allRows.length >= 10) {
    e.target.disabled = true;
  } else {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', (e) => {
  table.removeChild(table.lastElementChild);

  const allRows = table.querySelectorAll('tr');

  if (allRows.length <= 2) {
    e.target.disabled = true;
  } else {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', (e) => {
  const allRows = table.querySelectorAll('tr');

  allRows.forEach(row => {
    const td = document.createElement('td');

    row.append(td);
  });

  const allColumns = table.querySelector('tr').children.length;

  if (allColumns >= 10) {
    e.target.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', (e) => {
  const allRows = table.querySelectorAll('tr');

  allRows.forEach(row => {
    row.removeChild(row.lastElementChild);
  });

  const allColumns = table.querySelector('tr').children.length;

  if (allColumns <= 2) {
    e.target.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
});
