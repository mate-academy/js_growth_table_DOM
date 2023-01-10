'use strict';

const table = document.querySelector('.field tbody');
const container = document.querySelector('.container');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', {
  handleEvent(ev) {
    if (!ev.target.classList.contains('button')) {
      return;
    }

    const buttonAction = capitalizeText(ev.target.classList[0]);

    actions[buttonAction]();

    const rowsCount = table.children.length;
    const columnsCount = table.lastElementChild.children.length;
    const maxCells = 10;
    const minCells = 2;

    appendRowButton.disabled = (rowsCount >= maxCells);
    removeRowButton.disabled = (rowsCount <= minCells);
    appendColumnButton.disabled = (columnsCount >= maxCells);
    removeColumnButton.disabled = (columnsCount <= minCells);
  },
});

const actions = {
  appendRow() {
    const columnsCount = table.querySelector('tr').children.length;
    const row = document.createElement('tr');

    for (let i = 1; i <= columnsCount; i++) {
      const cell = document.createElement('td');

      row.append(cell);
    }

    table.append(row);
  },

  appendColumn() {
    const rows = table.children;

    [...rows].forEach(row => {
      const cell = document.createElement('td');

      row.append(cell);
    });
  },

  removeRow() {
    table.lastElementChild.remove();
  },

  removeColumn() {
    const rows = table.children;

    [...rows].forEach(row => {
      row.lastElementChild.remove();
    });
  },
};

function capitalizeText(text) {
  const result = text.split('-');

  result[1] = result[1].slice(0, 1).toUpperCase() + result[1].slice(1);

  return result.join('');
};
