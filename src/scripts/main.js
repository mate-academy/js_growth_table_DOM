'use strict';

const table = document.querySelector('.field tbody');
const container = document.querySelector('.container');
const [
  appendRow,
  removeRow,
  appendColumn,
  removeColumn,
] = document.querySelectorAll('.button');

container.addEventListener('click', {
  handleEvent(ev) {
    if (!ev.target.classList.contains('button')) {
      return;
    }

    const buttonAction = ev.target.classList[0];
    const method = capitalized(buttonAction);

    this[method]();

    const rowsCount = table.children.length;
    const columnsCount = table.lastElementChild.children.length;
    const maxCells = 10;
    const minCells = 2;

    appendRow.disabled = (rowsCount >= maxCells);
    removeRow.disabled = (rowsCount <= minCells);
    appendColumn.disabled = (columnsCount >= maxCells);
    removeColumn.disabled = (columnsCount <= minCells);
  },

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
});

function capitalized(text) {
  const result = text.split('-');

  result[1] = result[1].slice(0, 1).toUpperCase() + result[1].slice(1);

  return result.join('');
};
