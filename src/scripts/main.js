'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('table');
const container = document.querySelector('.container');
let amountRows = table.getElementsByTagName('tr').length;
let amountColumns = table.querySelector('tr').children.length;

container.addEventListener('click', (e) => {
  const pushedButton = e.target;

  if (pushedButton.tagName !== 'BUTTON') {
    return;
  }

  switch (pushedButton) {
    case appendRowButton: appendRowButtonTable();
      break;
    case removeRowButton: removeRowButtonTable();
      break;
    case appendColumnButton: appendColumnButtonTable();
      break;
    case removeColumnButton: removeColumnButtonTable();
      break;
  }
});

function appendRowButtonTable() {
  const row = table.querySelector('tr');
  const rowCopy = row.cloneNode(true);

  table.append(rowCopy);
  removeRowButton.disabled = false;
  amountRows++;

  if (amountRows === 10) {
    appendRowButton.disabled = true;
  }
}

function removeRowButtonTable() {
  const row = table.querySelector('tr');

  row.remove();
  appendRowButton.disabled = false;
  amountRows--;

  if (amountRows === 2) {
    removeRowButton.disabled = true;
  }
}

function appendColumnButtonTable() {
  const rows = table.querySelectorAll('tr');

  for (const item of rows) {
    const column = document.createElement('td');

    item.append(column);
  }

  removeColumnButton.disabled = false;
  amountColumns++;

  if (amountColumns === 10) {
    appendColumnButton.disabled = true;
  }
}

function removeColumnButtonTable() {
  const rows = table.querySelectorAll('tr');

  for (const item of rows) {
    const column = item.querySelector('td');

    column.remove();
  }
  appendColumnButton.disabled = false;
  amountColumns--;

  if (amountColumns === 2) {
    removeColumnButton.disabled = true;
  }
}
