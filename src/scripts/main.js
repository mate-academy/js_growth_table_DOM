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

  const type = button.className.split(' ').slice(0, -1).join();
  const tbody = document.querySelector('.field tbody');

  const isDisabled = (rowAmount, colAmount, className) => {
    const direction = className.split('-').slice(1).join('');

    const amount = direction === 'row' ? rowAmount : colAmount;

    if (amount === minAmount || amount === maxAmount) {
      button.disabled = true;

      return;
    }

    if (amount === maxAmount) {
      const btn = document.querySelector(`.append-${direction}`);

      btn.disabled = false;
    }

    if (amount === minAmount) {
      const btn = document.querySelector(`.remove-${direction}`);

      btn.disabled = false;
    }
  };

  switch (type) {
    case 'append-row':
      const tr = document.createElement('tr');
      const cells = [...Array(cols)].map(() => document.createElement('td'));

      tr.append(...cells);
      tbody.append(tr);
      rows++;

      isDisabled(rows, cols, type);

      break;

    case 'append-column':
      [...tbody.children].forEach(el => {
        const td = document.createElement('td');

        el.append(td);
      });

      cols++;

      isDisabled(rows, cols, type);

      break;

    case 'remove-row':
      tbody.lastElementChild.remove();
      rows--;

      isDisabled(rows, cols, type);

      break;

    case 'remove-column':
      [...tbody.children].forEach(el => el.lastElementChild.remove());
      cols--;

      isDisabled(rows, cols, type);
  }
});
