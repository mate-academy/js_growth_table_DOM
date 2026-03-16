'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody') || table;

const appendRowButton = document.querySelector('.append-row');
const appendColumnButton = document.querySelector('.append-column');
const removeRowButton = document.querySelector('.remove-row');
const removeColumnButton = document.querySelector('.remove-column');

const min = 2;
const max = 10;

function getRowCount() {
  return tbody.querySelectorAll('tr').length;
}

function getColumnCount() {
  const firstRow = tbody.querySelector('tr');

  return firstRow.querySelectorAll('td').length;
}

function updateButtons() {
  const rows = getRowCount();
  const cols = getColumnCount();

  appendRowButton.disabled = rows >= max;
  removeRowButton.disabled = rows <= min;
  appendColumnButton.disabled = cols >= max;
  removeColumnButton.disabled = cols <= min;
}

appendRowButton.addEventListener('click', () => {
  const rows = getRowCount();

  if (rows >= max) {
    updateButtons();

    return;
  }

  const cols = getColumnCount();
  const tr = document.createElement('tr');

  for (let i = 0; i < cols; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  tbody.appendChild(tr);
  updateButtons();
});

removeRowButton.addEventListener('click', () => {
  const rows = getRowCount();

  if (rows <= min) {
    updateButtons();

    return;
  }

  const lastRow = tbody.querySelector('tr:last-child');

  lastRow.remove();

  updateButtons();
});

appendColumnButton.addEventListener('click', () => {
  const cols = getColumnCount();

  if (cols >= max) {
    updateButtons();

    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });

  updateButtons();
});

removeColumnButton.addEventListener('click', () => {
  const cols = getColumnCount();

  if (cols <= min) {
    updateButtons();

    return;
  }

  const rows = tbody.querySelectorAll('tr');

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  updateButtons();
});

updateButtons();
