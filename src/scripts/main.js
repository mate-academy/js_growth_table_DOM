'use strict';

const tableGrow = document.querySelector('tbody');
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
      const newRow = tableGrow.lastElementChild.cloneNode(true);

      tableGrow.append(newRow);
      break;

    case removeRow:
      tableGrow.lastElementChild.remove();
      break;

    case addColumn:
      [...tableGrow.children].forEach(el => {
        const tab = document.createElement('td');

        el.append(tab);
      });
      break;

    case removeColumn:
      [...tableGrow.children].forEach(el => {
        el.lastElementChild.remove();
      });
      break;
  }

  addRow.disabled = tableGrow.children.length === 10;
  removeRow.disabled = tableGrow.children.length === 2;
  addColumn.disabled = tableGrow.children[0].children.length === 10;
  removeColumn.disabled = tableGrow.children[0].children.length === 2;
});
