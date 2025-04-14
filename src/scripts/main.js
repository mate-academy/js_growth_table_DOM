'use strict';

const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
let rows;

function updateButtonsState() {
  rows = Array.from(table.querySelectorAll('tr'));

  if (rows.length >= 10) {
    appendRowButton.disabled = true;
  } else if (rows.length <= 2) {
    removeRowButton.disabled = true;
  }

  if (rows.length < 10) {
    appendRowButton.disabled = false;
  }

  if (rows.length > 2) {
    removeRowButton.disabled = false;
  }

  const columns = table.querySelector('tr').childElementCount;

  if (columns >= 10) {
    appendColumnButton.disabled = true;
  } else if (columns <= 2) {
    removeColumnButton.disabled = true;
  }

  if (columns < 10) {
    appendColumnButton.disabled = false;
  }

  if (columns > 2) {
    removeColumnButton.disabled = false;
  }
}

appendRowButton.addEventListener('click', () => {
  appendRow();
});

function appendRow() {
  const additionalRow = document.createElement('tr');
  const firstRow = document.querySelector('tr');
  const tdQuantity = firstRow.childElementCount;

  for (let n = 1; n <= tdQuantity; n++) {
    const td = document.createElement('td');

    additionalRow.appendChild(td);
  }

  table.appendChild(additionalRow);
  updateButtonsState();
}

removeRowButton.addEventListener('click', () => {
  removeRow();
});

function removeRow() {
  table.deleteRow(-1);
  updateButtonsState();
}

appendColumnButton.addEventListener('click', () => {
  appendColumn();
});

function appendColumn() {
  rows = Array.from(table.querySelectorAll('tr'));

  for (const row of rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }
  updateButtonsState();
}

removeColumnButton.addEventListener('click', () => {
  removeColumn();
});

function removeColumn() {
  rows = Array.from(table.querySelectorAll('tr'));

  for (const row of rows) {
    row.deleteCell(-1);
  }
  updateButtonsState();
}
