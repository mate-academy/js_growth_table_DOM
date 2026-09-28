'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const tbody = table.querySelector('tbody');

  if (tbody.children.length >= 10) {
    return;
  }

  const firstRow = table.querySelector('tr');
  const columnCount = firstRow.children.length;
  const newRow = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  }

  tbody.append(newRow);
  removeRowButton.disabled = false;

  if (tbody.children.length === 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  const tbody = table.querySelector('tbody');

  if (tbody.children.length <= 2) {
    return;
  }

  tbody.lastElementChild.remove();
  appendRowButton.disabled = false;

  if (tbody.children.length === 2) {
    removeRowButton.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const tbody = table.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');

  if (rows[0].children.length >= 10) {
    return;
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  removeColumn.disabled = false;

  if (rows[0].children.length === 10) {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const tbody = table.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');

  if (rows[0].children.length <= 2) {
    return;
  }

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  appendColumn.disabled = false;

  if (rows[0].children.length === 2) {
    removeColumn.disabled = true;
  }
});
