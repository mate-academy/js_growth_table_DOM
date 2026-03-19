'use strict';

const MIN = 2;
const MAX = 10;
const buttons = [...document.querySelectorAll('button')];
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

buttons.forEach((elementButton) => {
  // eslint-disable-next-line no-shadow
  elementButton.addEventListener('click', (event) => {
    const row = tbody.querySelectorAll('tr').length;
    const column = tbody.querySelector('tr')?.children.length || 0;

    if (event.currentTarget.classList.contains('append-row')) {
      if (row < MAX) {
        const tr = document.createElement('tr');

        for (let i = 0; i < column; i++) {
          const td = document.createElement('td');

          tr.appendChild(td);
        }

        tbody.appendChild(tr);
        removeRow.disabled = false;
      }
    }

    if (event.currentTarget.classList.contains('remove-row')) {
      if (row > MIN) {
        tbody.lastElementChild.remove();
        appendRow.disabled = false;
      }
    }

    if (event.currentTarget.classList.contains('append-column')) {
      if (column < MAX) {
        [...tbody.querySelectorAll('tr')].forEach((elementTr) => {
          const td = document.createElement('td');

          elementTr.appendChild(td);
        });
        removeColumn.disabled = false;
      }
    }

    if (event.currentTarget.classList.contains('remove-column')) {
      if (column > MIN) {
        [...tbody.querySelectorAll('tr')].forEach((elementTr) => {
          elementTr.lastElementChild.remove();
        });
        appendColumn.disabled = false;
      }
    }

    appendRow.disabled = tbody.children.length >= MAX;
    removeRow.disabled = tbody.children.length <= MIN;
    appendColumn.disabled = tbody.firstElementChild.children.length >= MAX;
    removeColumn.disabled = tbody.firstElementChild.children.length <= MIN;
  });
});
