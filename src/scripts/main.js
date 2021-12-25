'use strict';

const table = document.querySelector('.field').children[0];

const funct = (action) => {
  if (action === 'append-column') {
    const button = document.querySelector('append-column button');

    [...table.rows].forEach(element => {
      const copy = element.cells[0].cloneNode(true);

      if (element.cells.length < 10) {
        element.append(copy);
      } else {
        button.disabled = true;
      }
    });
  }

  if (action === 'remove-column') {
    const button = document.querySelector('remove-column button');

    [...table.rows].forEach(element => {
      const cell = element.cells[0];

      if (element.cells.length > 2) {
        element.removeChild(cell);
      } else {
        button.disabled = true;
      }
    });
  }

  if (action === 'append-row') {
    const copy = table.rows[0].cloneNode(true);
    const button = document.querySelector('append-row button');

    if (table.rows.length < 10) {
      table.append(copy);
    } else {
      button.disabled = true;
    }
  }

  if (action === 'remove-row') {
    const remove = table.firstElementChild;
    const button = document.querySelector('remove-row button');

    if (table.rows.length > 2) {
      table.removeChild(remove);
    } else {
      button.disabled = true;
    }
  }
};

document.addEventListener('click', (eve) => {
  funct(eve.target.classList[0]);
});
