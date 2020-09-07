'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('tbody');
const list = table.rows;
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (event) => {
  if (event.target.className === 'append-column button') {
    [...list].map(elem => elem.append(document.createElement('td')));
  }

  if (event.target.className === 'remove-column button') {
    [...list].map(elem => elem.lastElementChild.remove());
  }

  if (event.target.className === 'append-row button') {
    table.append(list[0].cloneNode(true));
  }

  if (event.target.className === 'remove-row button') {
    table.lastElementChild.remove();
  }
  addRow.disabled = (list.length === 10);
  removeRow.disabled = (list.length === 2);
  removeColumn.disabled = (list[0].cells.length === 2);
  addColumn.disabled = (list[0].cells.length === 10);
});
