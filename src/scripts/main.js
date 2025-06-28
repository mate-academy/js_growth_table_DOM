'use strict';

const container = document.querySelector('.container');

// Counts
let rowsCount = document.querySelector('tr').children.length;
let columnCount = document.querySelector('tr').children.length;

// Buttons
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

// Event
container.addEventListener('click', (e) => {
  const table = container.querySelector('.field');
  const tbody = table.querySelector('tbody');
  const row = table.querySelector('tr');
  const column = table.querySelectorAll('tr');

  if (e.target === appendRowButton) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < row.children.length; i++) {
      const newCell = document.createElement('td');

      newRow.append(newCell);
    }

    if (rowsCount < 10) {
      tbody.append(newRow);

      rowsCount++;
    }

    updateButtons();
  }

  if (e.target === removeRowButton) {
    const lastRow = tbody.lastElementChild;

    lastRow.remove();
    rowsCount--;

    updateButtons();
  }

  if (e.target === appendColumnButton) {
    column.forEach((el) => {
      el.lastElementChild.before(document.createElement('td'));
    });

    columnCount++;
    updateButtons();
  }

  if (e.target === removeColumnButton) {
    column.forEach((el) => {
      el.removeChild(el.children[columnCount - 1]);
    });

    columnCount--;
    updateButtons();
  }
});

function updateButtons() {
  appendRowButton.disabled = rowsCount === 10;
  removeRowButton.disabled = rowsCount === 2;
  appendColumnButton.disabled = columnCount === 10;
  removeColumnButton.disabled = columnCount === 2;
}
