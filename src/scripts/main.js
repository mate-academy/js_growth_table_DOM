'use strict';

const appendRowBtn = document.querySelector('.append-row');
const appendColumnBtn = document.querySelector('.append-column');

const removeRowBtn = document.querySelector('.remove-row');
const removeColumnBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  const columns = rows[0] ? rows[0].children.length : 0;

  if (rows.length >= 10) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    const newColumn = document.createElement('td');

    newRow.appendChild(newColumn);
  }
  document.querySelector('tbody').appendChild(newRow);

  const newRows = document.querySelectorAll('tr');

  appendRowBtn.disabled = newRows.length >= 10;
  removeRowBtn.disabled = newRows.length <= 2;
});

appendColumnBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  const columns = rows[0] ? rows[0].children.length : 0;

  if (columns >= 10) {
    return;
  }

  rows.forEach((row) => {
    const newColumn = document.createElement('td');

    row.appendChild(newColumn);
  });

  const newColumns = document.querySelectorAll('tr')[0]?.children.length || 0;

  appendColumnBtn.disabled = newColumns >= 10;
  removeColumnBtn.disabled = newColumns <= 2;
});

removeRowBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length <= 2) {
    return;
  }

  if (rows.length > 0) {
    rows[rows.length - 1].remove();
  }

  const newRows = document.querySelectorAll('tr');

  appendRowBtn.disabled = newRows.length >= 10;
  removeRowBtn.disabled = newRows.length <= 2;
});

removeColumnBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');
  const columns = rows[0] ? rows[0].children.length : 0;

  if (columns <= 2) {
    return;
  }

  rows.forEach((row) => {
    if (row.children.length > 0) {
      row.removeChild(row.lastElementChild);
    }
  });

  const newColumns = document.querySelectorAll('tr')[0]?.children.length || 0;

  appendColumnBtn.disabled = newColumns >= 10;
  removeColumnBtn.disabled = newColumns <= 2;
});
