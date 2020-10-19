'use strict';

const root = document.querySelector('.container');
const table = root.querySelector('.field');

root.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  const actionsList = event.target.classList;
  const rowsCount = table.rows.length;
  const cellsCount = table.rows[0].children.length;

  if (actionsList.contains('append-row') && rowsCount <= 10) {
    table.insertRow();

    for (let i = 0; i < cellsCount; i++) {
      table
        .rows[rowsCount]
        .insertAdjacentHTML('beforeend', `<td></td>`);
    }
  }

  if (actionsList.contains('remove-row') && rowsCount > 2) {
    table.rows[rowsCount - 1].remove();
  }

  if (actionsList.contains('append-column') && cellsCount <= 10) {
    for (const row of table.rows) {
      row.insertAdjacentHTML('beforeend', `<td></td>`);
    }
  }

  if (actionsList.contains('remove-column') && cellsCount > 2) {
    for (const row of table.rows) {
      row.children[cellsCount - 1].remove();
    }
  }
});
