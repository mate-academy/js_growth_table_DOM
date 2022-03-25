'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const buttons = document.querySelectorAll('.button');
const addLastRowButton = document.querySelector('.append-row');
const removeLastRowButton = document.querySelector('.remove-row');
const addLastColumnButton = document.querySelector('.append-column');
const removeLastColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', () => {
  addLastRowButton.disabled = table.rows.length >= 10;
  removeLastRowButton.disabled = table.rows.length <= 2;
  addLastColumnButton.disabled = table.rows[0].children.length >= 10;
  removeLastColumnButton.disabled = table.rows[0].children.length <= 2;
});

buttons.forEach(button => {
  button.addEventListener('click', evt => {
    const classList = evt.target.classList;
    const rows = document.querySelectorAll('tr');

    if (classList.contains('append-row')) {
      const clonedRow = table.rows[table.rows.length - 1].cloneNode(true);

      table.append(clonedRow);
    }

    if (classList.contains('remove-row')) {
      table.rows[table.rows.length - 1].remove();
    }

    if (classList.contains('append-column')) {
      rows.forEach(row => {
        const clonedCell = row.cells[0].cloneNode(true);

        row.children[row.children.length - 1].after(clonedCell);
      });
    }

    if (classList.contains('remove-column')) {
      rows.forEach(row => {
        row.children[row.children.length - 1].remove();
      });
    }
  });
});
