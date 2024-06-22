'use strict';

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;

const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

const buttons = document.querySelectorAll('button');
const table = document.querySelector('.field');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (true) {
      case button.classList.contains('append-row'):
        appendRow();
        break;
      case button.classList.contains('remove-row'):
        removeRow();
        break;
      case button.classList.contains('append-column'):
        appendColumn();
        break;
      case button.classList.contains('remove-column'):
        removeColumn();
        break;
    }

    updateButtons();
  });
});

function appendRow() {
  if (table.rows.length < MAX_ROWS) {
    const firstRow = table.querySelector('tr');
    const newRow = firstRow.outerHTML;

    table.insertAdjacentHTML('beforeend', newRow);
  }
}

function removeRow() {
  const tbody = table.children[0];

  if (table.rows.length > MIN_ROWS) {
    tbody.children[0].remove();
  }
}

function appendColumn() {
  const rows = table.querySelectorAll('tr');

  if (rows[0].cells.length < MAX_COLUMNS) {
    rows.forEach((row) => {
      row.insertAdjacentHTML('beforeend', '<td></td>');
    });
  }
}

function removeColumn() {
  const rows = table.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.cells.length > MIN_COLUMNS) {
      const lastCell = row.cells[row.cells.length - 1];

      lastCell.remove();
    }
  });
}

function updateButtons() {
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
