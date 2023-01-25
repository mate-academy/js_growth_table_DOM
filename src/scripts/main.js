'use strict';

const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.addEventListener('click', (e) => {
  if (!e.target.matches('.button')) {
    return;
  }

  switch (e.target) {
    case addRow:
      const newRow = table.children[0].cloneNode(true);

      table.append(newRow);
      break;

    case removeRow:
      table.children[0].remove();
      break;

    case addColumn:
      [...table.children].forEach(el => {
        const td = document.createElement('td');

        el.append(td);
      });
      break;

    case removeColumn:
      [...table.children].forEach(el => {
        el.children[0].remove();
      });
      break;
  }
  addRow.disabled = table.children.length === 10;
  removeRow.disabled = table.children.length === 2;
  addColumn.disabled = table.children[0].children.length === 10;
  removeColumn.disabled = table.children[0].children.length === 2;
});
