'use strict';

const container = document.querySelector('.container');
const field = container.querySelector('.field');
const rows = field.rows;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', (ev) => {
  const tBody = field.tBodies[0];

  switch (ev.target.classList[0]) {
    case 'append-row':
      const newRow = rows[0].cloneNode(true);

      tBody.append(newRow);
      break;

    case 'remove-row':
      tBody.lastElementChild.remove();
      break;

    case 'append-column':
      [...rows].forEach((row) => row.append(document.createElement('td')));
      break;

    case 'remove-column':
      [...rows].forEach((row) => row.lastElementChild.remove());
  }

  if (rows.length >= 10) {
    addRowButton.disabled = true;
  } else {
    addRowButton.disabled = false;
  }

  if (rows.length <= 2) {
    removeRowButton.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }

  if (rows[0].cells.length >= 10) {
    addColumn.disabled = true;
  } else {
    addColumn.disabled = false;
  }

  if (rows[0].cells.length <= 2) {
    removeColumnButton.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
});
