'use strict';

const table = document.querySelector('table');
const row = table.querySelector('tr');
// const tbody = table.querySelector('tbody');

const buttonAppendRow = document.querySelector('button.append-row');
const buttonRemoveRow = document.querySelector('button.remove-row');
const buttonAppendColumn = document.querySelector('button.append-column');
const buttonRemoveColumn = document.querySelector('button.remove-column');

buttonAppendRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  if (rows.length >= 10) {
    return;
  }

  const newRow = row.cloneNode(true);

  table.tBodies[0].appendChild(newRow);

  updateButtons();
});

buttonRemoveRow.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  rows[rows.length - 1].remove();

  updateButtons();
});

buttonAppendColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const cells = rows[0] ? rows[0].querySelectorAll('td') : [];

  if (cells.length >= 10) {
    return;
  }

  for (const each of rows) {
    const newCell = document.createElement('td');

    each.append(newCell);
  }

  updateButtons();
});

buttonRemoveColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (const each of rows) {
    each.lastElementChild.remove();
  }

  updateButtons();
});

function updateButtons() {
  const rows = table.querySelectorAll('tr');
  const cells = rows[0] ? rows[0].querySelectorAll('td') : [];

  if (rows.length > 9) {
    buttonAppendRow.disabled = true;
  } else {
    buttonAppendRow.disabled = false;
  }

  if (rows.length <= 2) {
    buttonRemoveRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
  }

  if (cells.length > 9) {
    buttonAppendColumn.disabled = true;
  } else {
    buttonAppendColumn.disabled = false;
  }

  if (cells.length <= 2) {
    buttonRemoveColumn.disabled = true;
  } else {
    buttonRemoveColumn.disabled = false;
  }
}

updateButtons();
