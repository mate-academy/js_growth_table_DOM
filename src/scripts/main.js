'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');
const rows = table.rows;
let initialRows = 4;
let initialColumns = 4;
const maxCount = 10;
const minCount = 2;
const appendRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const appendColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  switch (button.classList[0]) {
    case 'append-row':
      table.append(rows[rows.length - 1].cloneNode(true));
      initialRows++;
      removeRowButton.disabled = false;

      if (initialRows === maxCount) {
        appendRowButton.disabled = true;
      }
      break;

    case 'remove-row':
      rows[rows.length - 1].remove();
      initialRows--;
      appendRowButton.disabled = false;

      if (initialRows === minCount) {
        removeRowButton.disabled = true;
      }
      break;

    case 'append-column':
      [...rows].forEach(row =>
        row.append(row.cells[row.cells.length - 1].cloneNode(true)));

      initialColumns++;
      removeColumnButton.disabled = false;

      if (initialColumns === maxCount) {
        appendColumnButton.disabled = true;
      }
      break;

    case 'remove-column':
      [...rows].forEach(row =>
        row.cells[row.cells.length - 1].remove());

      initialColumns--;
      appendColumnButton.disabled = false;

      if (initialColumns === minCount) {
        removeColumnButton.disabled = true;
      }
      break;
  }
});
