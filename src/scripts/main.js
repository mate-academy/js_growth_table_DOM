'use strict';

const min = 2;
const max = 10;

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

appendColumn.addEventListener('click', () => {
  [...table.rows].forEach(el => {
    el.insertAdjacentHTML('beforeend', `
      <td></td>
    `);
  });

  if (table.firstChild.children.length >= max) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', () => {
  [...table.rows].forEach(el => {
    el.children[0].remove();
  });

  if (table.firstChild.children.length <= min) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});

appendRow.addEventListener('click', () => {
  const clone = table.rows[0].cloneNode(true);

  table.append(clone);

  if ([...table.children].length >= max) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if ([...table.children].length <= min) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});
