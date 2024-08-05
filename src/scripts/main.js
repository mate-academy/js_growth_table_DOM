'use strict';

const MAX_NUMBER = 10;
const MIN_NUMBER = 2;

const container = document.querySelector('.container');
const buttons = container.querySelectorAll('button');
const table = document.querySelector('.field');

let rows = table.querySelectorAll('tr');

function updateRowsAndColumns() {
  rows = Array.from(table.querySelectorAll('tr'));
}

const appendRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const appendColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');

function appendRow() {
  const newRow = rows[0].cloneNode(true);

  table.appendChild(newRow);
  updateRowsAndColumns();

  if (rows.length >= MAX_NUMBER) {
    appendRowButton.setAttribute('disabled', '');
  }

  removeRowButton.removeAttribute('disabled');
}

function removeRow() {
  if (rows.length > MIN_NUMBER) {
    rows[rows.length - 1].remove();
    updateRowsAndColumns();

    if (rows.length <= MIN_NUMBER) {
      removeRowButton.setAttribute('disabled', '');
    }

    appendRowButton.removeAttribute('disabled');
  }
}

function appendColumn() {
  rows.forEach((row) => row.insertCell(-1));
  updateRowsAndColumns();

  if (rows[0].cells.length >= MAX_NUMBER) {
    appendColumnButton.setAttribute('disabled', '');
  }

  removeColumnButton.removeAttribute('disabled');
}

function removeColumn() {
  rows.forEach((row) => {
    if (row.cells.length > MIN_NUMBER) {
      row.deleteCell(-1);
    }
  });
  updateRowsAndColumns();

  if (rows[0].cells.length <= MIN_NUMBER) {
    removeColumnButton.setAttribute('disabled', '');
  }

  appendColumnButton.removeAttribute('disabled');
}

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    if (e.target.classList.contains('append-row')) {
      appendRow();
    } else if (e.target.classList.contains('remove-row')) {
      removeRow();
    } else if (e.target.classList.contains('append-column')) {
      appendColumn();
    } else if (e.target.classList.contains('remove-column')) {
      removeColumn();
    }
  });
});

updateRowsAndColumns();
