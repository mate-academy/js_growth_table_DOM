'use strict';

const maxItem = 10;
const minItem = 2;

document.addEventListener('click', (e) => {
  const press = e.target.closest('.button');

  if (!press) {
    return;
  }

  let rowsNumber = document.querySelectorAll('.field tr').length;
  let columnNumber = document.querySelector('.field tr').children.length;
  const action = press.className.split(' ').slice(0, -1).join();
  const typeAction = action.split('-')[0];
  const tbody = document.querySelector('.field tbody');

  const disableButton = (rows, columns, className) => {
    const direction = className.split('-').slice(1).join('');
    const amount = direction === 'row' ? rows : columns;
    const oppositeTypeAction = typeAction === 'append' ? 'remove' : 'append';

    if (amount >= maxItem || amount <= minItem) {
      press.disabled = true;

      return;
    }

    const btn = document.querySelector(`
      .${oppositeTypeAction}-${direction}[disabled]
    `);

    if (btn) {
      btn.disabled = false;
    }
  };

  switch (action) {
    case 'append-row':
      const tr = document.createElement('tr');
      const cells
    = [...Array(columnNumber)].map(() => document.createElement('td'));

      tr.append(...cells);
      tbody.append(tr);
      rowsNumber++;

      disableButton(rowsNumber, columnNumber, action);
      break;

    case 'remove-row':
      tbody.lastElementChild.remove();
      rowsNumber--;

      disableButton(rowsNumber, columnNumber, action);
      break;

    case 'append-column':
      const trs = document.querySelectorAll('tr');

      for (const column of trs) {
        const td = document.createElement('td');

        column.appendChild(td);
      }

      columnNumber++;

      disableButton(rowsNumber, columnNumber, action);
      break;

    case 'remove-column':
      const trss = document.querySelectorAll('tr');

      for (const column of trss) {
        column.deleteCell(0);
      }

      columnNumber--;

      disableButton(rowsNumber, columnNumber, action);
  }
});
