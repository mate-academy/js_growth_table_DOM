'use strict';

const container = document.querySelector('.container');
let currentCol = 4;
let currentRow = 4;
const minCol = 2;
const minRow = 2;
const maxCol = 10;
const maxRow = 10;

container.addEventListener('click', changeTable);

function changeTable(click) {
  const table = document.querySelector('table');

  const appendRow = () => {
    const row = document.createElement('tr');

    for (let col = 1; col <= currentCol; col++) {
      row.append(document.createElement('td'));
    }

    currentRow = currentRow + 1;
    table.children[0].append(row);
  };
  const removeRow = () => {
    table.children[0].lastElementChild.remove();
    currentRow = currentRow - 1;
  };
  const appendColumn = () => {
    const rows = table.querySelectorAll('tr');

    for (const row of rows) {
      row.append(document.createElement('td'));
    }

    currentCol = currentCol + 1;
  };
  const removeColumn = () => {
    const rows = table.querySelectorAll('tr');

    for (const row of rows) {
      row.lastElementChild.remove();
    }

    currentCol = currentCol - 1;
  };

  switch (true) {
    case click.target.matches('.append-row'):
      appendRow();
      break;
    case click.target.matches('.remove-row'):
      removeRow();
      break;
    case click.target.matches('.append-column'):
      appendColumn();
      break;
    case click.target.matches('.remove-column'):
      removeColumn();
      break;
  }

  if (currentCol === maxCol) {
    document.querySelector('.append-column').setAttribute('disabled', true);
  } else if (currentCol === maxCol - 1) {
    document.querySelector('.append-column').removeAttribute('disabled');
  }

  if (currentCol === minCol) {
    document.querySelector('.remove-column').setAttribute('disabled', true);
  } else if (currentCol === minCol + 1) {
    document.querySelector('.remove-column').removeAttribute('disabled');
  }

  if (currentRow === maxRow) {
    document.querySelector('.append-row').setAttribute('disabled', true);
  } else if (currentRow === maxRow - 1) {
    document.querySelector('.append-row').removeAttribute('disabled');
  }

  if (currentRow === minRow) {
    document.querySelector('.remove-row').setAttribute('disabled', true);
  } else if (currentRow === minRow + 1) {
    document.querySelector('.remove-row').removeAttribute('disabled');
  }
}
