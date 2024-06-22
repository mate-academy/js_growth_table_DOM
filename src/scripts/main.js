'use strict';

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;

const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (button.classList[0]) {
      case 'append-row':
        appendRow();
        break;
      case 'remove-row':
        removeRow();
        break;
      case 'append-column':
        appendColumn();
        break;
      case 'remove-column':
        removeColumn();
        break;
    }
    updateButtons();
  });
});

function appendRow() {
  const table = document.querySelector('.field tbody');

  if (table.rows.length < MAX_ROWS) {
    const firstRow = table.querySelector('tr');
    const newRow = firstRow.outerHTML;

    table.insertAdjacentHTML('beforeend', newRow);
  }
}

function removeRow() {
  const table = document.querySelector('.field tbody');

  if (table.rows.length > MIN_ROWS) {
    table.deleteRow(-1);
  }
}

function appendColumn() {
  const table = document.querySelector('.field tbody');
  const rows = table.querySelectorAll('tr');

  if (rows[0].cells.length < MAX_COLUMNS) {
    rows.forEach((row) => {
      row.insertAdjacentHTML('beforeend', '<td></td>');
    });
  }
}

function removeColumn() {
  const table = document.querySelector('.field tbody');
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.cells.length > MIN_COLUMNS) {
      row.deleteCell(-1);
    }
  });
}

function updateButtons() {
  const table = document.querySelector('.field tbody');
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const appendColumnButton = document.querySelector('.append-column');
  const removeColumnButton = document.querySelector('.remove-column');

  if (table.rows.length >= MAX_ROWS) {
    appendRowButton.setAttribute('disabled', 'true');
  } else {
    appendRowButton.removeAttribute('disabled');
  }

  if (table.rows.length <= MIN_ROWS) {
    removeRowButton.setAttribute('disabled', 'true');
  } else {
    removeRowButton.removeAttribute('disabled');
  }

  if (table.rows[0].cells.length >= MAX_COLUMNS) {
    appendColumnButton.setAttribute('disabled', 'true');
  } else {
    appendColumnButton.removeAttribute('disabled');
  }

  if (table.rows[0].cells.length <= MIN_COLUMNS) {
    removeColumnButton.setAttribute('disabled', 'true');
  } else {
    removeColumnButton.removeAttribute('disabled');
  }
}
