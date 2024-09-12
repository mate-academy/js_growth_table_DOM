'use strict';

const table = document.querySelector('.field').firstElementChild;

const container = document.querySelector('.container');

const cellsCount = {
  minColumns: 2,
  maxColumns: 10,
  minRows: 2,
  maxRows: 10,
};

const rowsActions = {
  append: 'append-row',
  remove: 'remove-row',
};

const columnsActions = {
  append: 'append-column',
  remove: 'remove-column',
};

container.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'BUTTON') {
    return;
  }

  const eventName = target.classList[0];

  const rows = [...table.children];

  switch (eventName) {
    case rowsActions.append:
    case rowsActions.remove:
      (eventName === rowsActions.append)
        ? table.append(table.lastElementChild.cloneNode(true))
        : table.deleteRow(-1);

      container.children[1].disabled = table.rows.length === cellsCount.minRows;
      container.children[0].disabled = table.rows.length === cellsCount.maxRows;

      break;

    case columnsActions.append:
    case columnsActions.remove:
      (eventName === columnsActions.append)
        ? rows.forEach(row => row.insertCell())
        : rows.forEach(row => row.deleteCell(-1));

      container.children[3].disabled = (
        table.rows[0].cells.length === cellsCount.minColumns
      );

      container.children[2].disabled = (
        table.rows[0].cells.length === cellsCount.maxColumns
      );

      break;

    default:
      break;
  }
});
