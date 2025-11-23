'use strict';

// write code here
const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function getRowCount() {
  return table.rows.length;
}

function getColumnCount() {
  return table.rows[0].cells.length;
}

function appendRow() {
  if (getRowCount() >= 10) {
    return;
  }

  const colCount = getColumnCount();
  const trElement = document.createElement('tr');

  for (let i = 0; i < colCount; i++) {
    trElement.appendChild(document.createElement('td'));
  }

  table.appendChild(trElement);
  updateButtons();
}

function removeRow() {
  if (getRowCount() <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);
  updateButtons();
}

function appendColumn() {
  if (getColumnCount() >= 10) {
    return;
  }

  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell();
  }
  updateButtons();
}

function removeColumn() {
  if (getColumnCount() <= 2) {
    return;
  }

  const rows = table.rows;

  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(-1);
  }

  updateButtons();
}

function updateButtons() {
  const rows = getRowCount();
  const cols = getColumnCount();

  appendRowButton.disabled = rows >= 10;
  removeRowButton.disabled = rows <= 2;

  appendColumnButton.disabled = cols >= 10;
  removeColumnButton.disabled = cols <= 2;
}

appendRowButton.addEventListener('click', () => {
  appendRow();
});

removeRowButton.addEventListener('click', () => {
  removeRow();
});

appendColumnButton.addEventListener('click', () => {
  appendColumn();
});

removeColumnButton.addEventListener('click', () => {
  removeColumn();
});
