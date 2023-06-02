'use strict';

// write code here
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const maxCells = 10;
const minCells = 2;

appendRowButton.addEventListener('click', (e) => {
  const countRows = document.querySelectorAll('tr').length;

  if (countRows < maxCells) {
    table.append(table.lastElementChild.cloneNode(true));
    removeRowButton.disabled = false;
  }

  if (countRows === maxCells - 1) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', (e) => {
  const countRows = document.querySelectorAll('tr').length;

  if (countRows > minCells) {
    table.lastElementChild.remove();
    appendRowButton.disabled = false;
  }

  if (countRows === minCells + 1) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  Array.from(rows).forEach(row => {
    const countColumns = row.children.length;

    if (countColumns < maxCells) {
      const cell = document.createElement('td');

      row.append(cell);
      removeColumnButton.disabled = false;
    }

    if (countColumns === maxCells - 1) {
      appendColumnButton.disabled = true;
    }
  });
});

removeColumnButton.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tr');

  Array.from(rows).forEach(row => {
    const countColumns = row.children.length;

    if (countColumns > minCells) {
      row.lastElementChild.remove();
      appendColumnButton.disabled = false;
    }

    if (countColumns === minCells + 1) {
      removeColumnButton.disabled = true;
    }
  });
});
