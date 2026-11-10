'use strict';

const container = document.querySelector('div.container');
const table = container.querySelector('.field');

const tableState = {
  rows: [...table.querySelectorAll('tr')].length,
  columns: [...table.querySelector('tr').querySelectorAll('td')].length,
};

function canBeRemoved(amount) {
  if (amount <= 2) {
    return 0;
  }
}

function canBeAdded(amount) {
  if (amount >= 10) {
    return 0;
  }
}

container.addEventListener('click', (e) => {
  switch (e.target.getAttribute('class')) {
    // CASE 1
    case 'append-row button':
      if (canBeAdded(tableState.rows) === 0) {
        break;
      }

      const copyRow = table.querySelector('tr').cloneNode(true);

      table.append(copyRow);

      tableState.rows += 1;
      break;

    // CASE 2
    case 'remove-row button':
      if (canBeRemoved(tableState.rows) === 0) {
        break;
      }

      const allRows = table.querySelectorAll('tr');

      allRows[allRows.length - 1].remove();

      tableState.rows -= 1;
      break;

    // CASE 3
    case 'append-column button':
      if (canBeAdded(tableState.columns) === 0) {
        break;
      }

      const rows = [...table.querySelectorAll('tr')];

      rows.forEach((row) => {
        const createCell = document.createElement('td');

        row.append(createCell);
      });

      tableState.columns += 1;
      break;

    // CASE 4
    case 'remove-column button':
      if (canBeRemoved(tableState.columns) === 0) {
        break;
      }

      const removeColumn = [...table.querySelectorAll('tr')];

      removeColumn.forEach((node) => {
        node.lastElementChild.remove();
      });

      tableState.columns -= 1;
      break;

    default:
      break;
  }
});
