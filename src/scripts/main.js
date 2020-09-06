'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');
const list = table.rows;

container.addEventListener('click', (event) => {
  if (event.target.className === 'append-column button'
    && list[0].cells.length !== 10) {
    [...list].map(elem => {
      const td = document.createElement('td');

      elem.append(td);
    });
  }

  if (event.target.className === 'remove-column button'
    && list[0].cells.length !== 2) {
    [...list].map(elem => {
      elem.lastElementChild.remove();
    });
  }

  if (event.target.className === 'append-row button'
    && list.length !== 10) {
    const tr = list[0].cloneNode(true);

    table.append(tr);
  }

  if (event.target.className === 'remove-row button'
    && list.length !== 2) {
    table.lastElementChild.remove();
  }
});
