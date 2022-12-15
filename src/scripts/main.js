'use strict';

const maxAmount = 10;
const minAmount = 2;

document.addEventListener('click', e => {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  let cols = document.querySelector('.field tr').children.length;
  let rows = document.querySelectorAll('.field tr').length;

  const action = button.className.split(' ').slice(0, -1).join();
  const typeAction = action.split('-')[0];
  const tbody = document.querySelector('.field tbody');

  const isDisabled = (rowAmount, colAmount, className) => {
    const direction = className.split('-').slice(1).join('');
    const amount = direction === 'row' ? rowAmount : colAmount;
    const oppositeTypeAction = typeAction === 'append' ? 'remove' : 'append';

    if (amount === maxAmount || amount === minAmount) {
      button.disabled = true;

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
      const cells = [...Array(cols)].map(() => document.createElement('td'));

      tr.append(...cells);
      tbody.append(tr);
      rows++;

      isDisabled(rows, cols, action);

      break;

    case 'append-column':
      [...tbody.children].forEach(el => {
        const td = document.createElement('td');

        el.append(td);
      });

      cols++;

      isDisabled(rows, cols, action);

      break;

    case 'remove-row':
      tbody.lastElementChild.remove();
      rows--;

      isDisabled(rows, cols, action);

      break;

    case 'remove-column':
      [...tbody.children].forEach(el => el.lastElementChild.remove());
      cols--;

      isDisabled(rows, cols, action);
  }
});
