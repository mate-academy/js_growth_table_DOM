'use strict';

// HTML Parts
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

// BUTTONS
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

// HELPER Functions
function getRowsCount() {
  return table.querySelectorAll('tr').length;
}

function getColumnsCount() {
  const firstRow = table.querySelector('tr');

  return firstRow ? firstRow.children.length : 0;
}

function updateButtonsState() {
  if (getRowsCount() >= 10) {
    appendRowButton.disabled = true;
    removeRowButton.disabled = false;
  }

  if (getRowsCount() <= 2) {
    removeRowButton.disabled = true;
    appendRowButton.disabled = false;
  }

  if (getColumnsCount() >= 10) {
    appendColumnButton.disabled = true;
    removeColumnButton.disabled = false;
  }

  if (getColumnsCount() <= 2) {
    removeColumnButton.disabled = true;
    appendColumnButton.disabled = false;
  }
}

// MAIN Logic

appendRowButton.addEventListener('click', () => {
  if (getRowsCount() < 10) {
    const tr = document.createElement('tr');

    for (let i = 0; i < getColumnsCount(); i++) {
      const td = document.createElement('td');

      tr.append(td);
    }
    tbody.append(tr);
  }
  updateButtonsState();
});

removeRowButton.addEventListener('click', () => {
  const rows = tbody.querySelectorAll('tr');

  if (rows.length > 2) {
    const lastRow = rows[rows.length - 1];

    tbody.removeChild(lastRow);
  }
  updateButtonsState();
});

appendColumnButton.addEventListener('click', () => {
  if (getColumnsCount() < 10) {
    const rows = tbody.querySelectorAll('tr');

    rows.forEach((row) => {
      const td = document.createElement('td');

      row.append(td);
    });
  }
  updateButtonsState();
});

removeColumnButton.addEventListener('click', () => {
  if (getColumnsCount() > 2) {
    const rows = tbody.querySelectorAll('tr');

    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
  }
  updateButtonsState();
});
