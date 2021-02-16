'use strict';

// write code here
const MAX_COUNT = 10;
const MIN_COUNT = 2;
const container = document.querySelector('.container');

function manipulateRow(action) {
  const table = document.querySelector('tbody');
  const row = table.firstElementChild;

  if (action === 'append') {
    table.append(row.cloneNode(true));
  } else if (action === 'remove') {
    table.removeChild(row);
  }
}

function manipulateColumn(action) {
  const rows = document.querySelectorAll('tr');

  [...rows].forEach(row => {
    const cell = row.firstElementChild;

    if (action === 'append') {
      row.append(cell.cloneNode());
    } else if (action === 'remove') {
      row.removeChild(cell);
    }
  });
}

function setDisabledButtons() {
  const table = document.querySelector('tbody');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');

  appendColumn.disabled = table.firstElementChild.children.length === MAX_COUNT;
  removeColumn.disabled = table.firstElementChild.children.length === MIN_COUNT;
  appendRow.disabled = table.children.length === MAX_COUNT;
  removeRow.disabled = table.children.length === MIN_COUNT;
}

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button') || e.target.disabled) {
    return;
  }

  switch (e.target.classList[0]) {
    case 'append-column':
      manipulateColumn('append');
      break;
    case 'remove-column':
      manipulateColumn('remove');
      break;
    case 'append-row':
      manipulateRow('append');
      break;
    case 'remove-row':
      manipulateRow('remove');
      break;
  }

  setDisabledButtons();
});
