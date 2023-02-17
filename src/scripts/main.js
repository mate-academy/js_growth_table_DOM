'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');
const thead = table.firstElementChild;

container.addEventListener('click', (ev) => {
  const button = ev.target;
  const buttonClass = [...button.classList];

  if (!buttonClass.includes('button')) {
    return;
  }

  const rows = table.querySelectorAll('tr');

  switch (buttonClass[0]) {
    case 'append-column':
      rows.forEach(el => {
        el.append(el.lastElementChild.cloneNode());
      });
      break;

    case 'remove-column':
      if ([...rows[0].children].length > 1) {
        rows.forEach(e => {
          e.lastElementChild.remove();
        });
      }
      break;

    case 'append-row':
      thead.append(rows[0].cloneNode(true));
      break;

    case 'remove-row':
      if (rows.length > 1) {
        thead.lastElementChild.remove();
      }
      break;
  }
});
