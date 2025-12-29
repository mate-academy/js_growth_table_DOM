'use strict';

const buttons = document.querySelectorAll('.button');
const MIN_SIZE = 2;
const MAX_SIZE = 10;

buttons.forEach((node) => {
  node.addEventListener('click', (e) => {
    const table = document.querySelector('.field');
    const tr = table.querySelectorAll('tr');

    const actions = {
      'append-row': () => {
        const rowsCount = table.querySelectorAll('tr').length;

        if (rowsCount >= MAX_SIZE) {
          return;
        }

        const newTr = document.createElement('tr');

        const amountTd = tr[0].cells.length;

        for (let i = 0; i < amountTd; i++) {
          const td = document.createElement('td');

          newTr.appendChild(td);
        }

        table.appendChild(newTr);
      },

      'remove-row': () => {
        const rowsCount = table.querySelectorAll('tr').length;

        if (rowsCount <= MIN_SIZE) {
          return;
        }

        const rows = table.querySelectorAll('tr');

        rows[rows.length - 1].remove();
      },

      'append-column': () => {
        const columnsCount = table.rows[0].cells.length;

        if (columnsCount >= MAX_SIZE) {
          return;
        }

        Array.from(table.rows).forEach((row) => {
          row.insertCell();
        });
      },

      'remove-column': () => {
        const columnsCount = table.rows[0].cells.length;

        if (columnsCount <= MIN_SIZE) {
          return;
        }

        Array.from(table.rows).forEach((row) => {
          row.deleteCell(-1);
        });
      },
    };

    const actionsKey = e.currentTarget.dataset.action;

    if (actions[actionsKey]) {
      actions[actionsKey]();
    }

    const rowsDis = table.querySelectorAll('tr').length;
    const colsDis = table.rows[0].cells.length;

    document.querySelector('.append-row').disabled = rowsDis >= MAX_SIZE;
    document.querySelector('.remove-row').disabled = rowsDis <= MIN_SIZE;
    document.querySelector('.append-column').disabled = colsDis >= MAX_SIZE;
    document.querySelector('.remove-column').disabled = colsDis <= MIN_SIZE;
  });
});
